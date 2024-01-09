import { useEffect, useRef, useState } from "react";
import Button from "../../utilities/button/Button";
import styles from "./ProductsRow.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ProductsRow = (props) => {
  const containerRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [maxScrolls, setMaxScrolls] = useState(0);

  useEffect(() => {
    const itemWidth = containerRef.current.children[0].offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    const updateMaxScrolls = () => {
      setMaxScrolls(
        props.children.length - Math.floor(containerWidth / itemWidth)
      );
    };

    window.addEventListener("resize", updateMaxScrolls);
    updateMaxScrolls();

    return () => {
      window.removeEventListener("resize", updateMaxScrolls);
    };
  }, []);

  const nextItemHandler = () => {
    const itemWidth = containerRef.current.children[0].offsetWidth;

    console.log(maxScrolls);

    if (currentScroll === maxScrolls) return;

    setCurrentScroll((prevCurrentScroll) => ++prevCurrentScroll);

    setScrollPosition((prevPosition) => prevPosition + itemWidth);

    containerRef.current.scrollTo({
      left: scrollPosition + itemWidth,
      behavior: "smooth",
    });
  };

  const prevItemHandler = () => {
    const itemWidth = containerRef.current.children[0].offsetWidth;

    if (currentScroll === 0) return;

    setCurrentScroll((prevCurrentScrolls) => --prevCurrentScrolls);

    setScrollPosition((prevPosition) => prevPosition - itemWidth);

    containerRef.current.scrollTo({
      left: scrollPosition - itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.row}>
      {maxScrolls > 0 && (
        <Button onClick={prevItemHandler} className={styles.buttonPrev}>
          <FaArrowLeft />
        </Button>
      )}

      <div className={styles.container} ref={containerRef}>
        {props.children}
      </div>

      {maxScrolls > 0 && (
        <Button onClick={nextItemHandler} className={styles.buttonNext}>
          <FaArrowRight />
        </Button>
      )}
    </div>
  );
};

export default ProductsRow;
