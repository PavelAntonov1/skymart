import styles from "./CartItem.module.css";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import ProductQuantity from "../product/productQuantity/ProductQuantity";
import Button from "../utilities/button/Button";

import { setProductQuantity, removeProduct } from "../../storeSlices/cartSlice";
import { NavLink } from "react-router-dom";

const CartItem = (props) => {
  const quantityRef = useRef();
  const dispatch = useDispatch();

  const quantityChangeHandler = () => {
    dispatch(
      setProductQuantity({ id: props.id, quantity: +quantityRef.current.value })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(removeProduct(props.id));
  };

  return (
    <div className={styles.container}>
      <NavLink
        className={styles.title}
        to={`/products/${props.category}/${props.id}`}
      >
        {props.title}
      </NavLink>
      <div className={styles.information}>
        <span className={styles.price}>${props.price}</span>

        <ProductQuantity
          ref={quantityRef}
          defaultValue={props.quantity}
          onChange={quantityChangeHandler}
        />

        <Button onClick={removeFromCartHandler}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
