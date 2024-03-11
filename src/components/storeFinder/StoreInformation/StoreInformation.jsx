import styles from "./StoreInformation.module.css";
import { days } from "../../../data/days";
import { FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const StoreInformation = (props) => {
  const today = days[new Date().getDay()];
  console.log(new Date().getDay());
  const todayHours = props.store.businessHours[today];

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.inputCheckBox}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />

      <label htmlFor="checkbox" className={styles.checkbox}>
        <span className={styles.todayHours}>{todayHours}</span>

        <p className={styles.businessHours}>
          {Object.keys(props.store.businessHours).map((key) => (
            <p className={key === today ? styles.today : styles.normal}>
              {key} : {props.store.businessHours[key] ?? "closed"}
            </p>
          ))}

          <br />

          {props.store.phones.map((phone) => (
            <div className={styles.phoneContainer}>
              <FaPhoneAlt className={styles.phoneIcon} />
              <span className={styles.phone}>{phone}</span>
            </div>
          ))}
        </p>

        <FaAngleDown className={styles.icon} />
      </label>
    </div>
  );
};

export default StoreInformation;
