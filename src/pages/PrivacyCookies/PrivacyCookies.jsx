import { Link } from "react-router-dom";
import styles from "./PrivacyCookies.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { privacyCookies } from "../../utils/data/data";

const PrivacyCookies = () => {
  return (
    <div className={styles["privacy"]}>
      <div className={styles["privacy-navigate"]}>
        <Link to="/">Home</Link>
        <RiArrowRightSLine size={20} />
        <Link to="/privacy">Privacy & Cookies</Link>
      </div>
      <div className={styles["privaci-text"]}>
        <section>
          <h2>Privacy Policy and Cookies</h2>
          <p>
            Welcome to our website! We appreciate your interest in our cooking
            recipes and strive to provide you with the best possible experience
            using our site. Please read this Privacy and Cookie Policy to be
            aware of how we handle your personal information and use cookies.
          </p>
        </section>
        {privacyCookies.map((p) => {
          return (
            <section key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </section>
          )
        })}
      </div>
    </div>
  );
};

export default PrivacyCookies;
