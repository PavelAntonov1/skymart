import styles from "./StoreFinder.module.css";

import { stores } from "../../data/stores";

import { findClosestStore } from "../../helpers/geoFunctions";

import { FaSadTear, FaSpinner } from "react-icons/fa";

import { useState, useEffect } from "react";
import StoreAddress from "./StoreAddress/StoreAddress";
import StoreInformation from "./StoreInformation/StoreInformation";

const StoreFinder = () => {
  const [closestStore, setClosestStore] = useState(null);
  const [error, setError] = useState(null);

  let content;

  if (closestStore && !error) {
    content = (
      <>
        <StoreAddress address={closestStore.address} />
        <StoreInformation store={closestStore} />
      </>
    );
  }

  if (error) {
    content = (
      <div className={styles.errorContainer}>
        <FaSadTear className={styles.iconError} />
        {error}
      </div>
    );
  }

  if (!closestStore && !error) {
    content = (
      <div className={styles.errorContainer}>
        <FaSpinner className={styles.iconError} />
        Loading...
      </div>
    );
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };

          const store = findClosestStore(coordinates, stores);

          setClosestStore(store);
        },
        (error) =>
          setError(
            `Oops... Error while getting your geolocation: ${error.message}.`
          )
      );
    } else {
      setError(
        `Oops... Could not get your geolocation. Please, check if your browser supports it and if you have given your permission to access your geodata.`
      );
    }
  }, []);

  return <div className={styles.container}>{content}</div>;
};

export default StoreFinder;
