import styles from "./AddressList.module.css";
import { stores } from "../../data/stores";
import { NavLink } from "react-router-dom";

const AddressList = (props) => {
  return (
    <ul
      className={`${styles.container} ${props.type === "white" && "whitened"}`}
    >
      {stores.map((store, i) => (
        <>
          {i !== 0 && <span className={styles.separator}>&#x25CF;</span>}
          <li>
            <NavLink
              key={i}
              to={`/our-locations/${store.storeName
                .trim()
                .replace(" ", "-")
                .toLowerCase()}`}
            >
              {store.storeName}
            </NavLink>
          </li>
        </>
      ))}
    </ul>
  );
};

export default AddressList;
