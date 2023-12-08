import styles from "./StoreAddress.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const StoreAddress = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Closest Location</span>

      <div className={styles.addressContainer}>
        <FaMapMarkerAlt className={styles.icon} />
        <span className={styles.address}>{props.address}</span>
      </div>
    </div>
  );
};

export default StoreAddress;
