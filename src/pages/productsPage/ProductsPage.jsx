import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Layout from "../../components/utilities/layout/Layout";
import Offer from "../../components/offer/Offer";
import styles from "./ProductsPage.module.css";

const ProductsPage = (props) => {
  return (
    <Layout>
      <section className={styles.offers}>
        <Offer color="blue" className={styles.offer1} to="/photo-services">
          Save up to 25% on photos
        </Offer>

        <Offer color="orange" className={styles.offer2} to="/membership">
          Membership Discounts of up to 10%
        </Offer>

        <Offer color="green" className={styles.offer3} to="/products/boxes">
          Buy One Box and Get Extra for Free
        </Offer>

        <Offer color="blue" className={styles.offer4} to="/uhaul-rental">
          Rent Your 10 Foot Van Today
        </Offer>

        <Offer color="orange" className={styles.offer5} to="/shipping">
          Get Free Guarantee for Your UPS Shipment
        </Offer>

        <Offer
          color="green"
          className={styles.offer6}
          to="/products/photo-paper/instax"
        >
          Instax Camera Paper Cheaper than Anywhere Else
        </Offer>

        <Offer color="blue" className={styles.offer7} to="/shipping">
          Save Money on Shipping to India
        </Offer>
      </section>
    </Layout>
  );
};

export default ProductsPage;
