import Link from "next/link";
import styles from "../../styles/components/common/notFound.module.css";

export default function NotFoundPage()
{
  return (
    <div className={styles.not_found_main}>
      <div className={styles.not_found_wrapper}>
        <div className={styles.not_found_title}><p className={styles.not_found_text}> Oops! Page Not Found </p></div>
        <div className={styles.not_found_subtitle}><p>Sorry, the page you are looking for does not exist or is
          unavailable</p></div>
        <div className={styles.back_button}>
          <button className={styles.btn}><Link href="/"> Go to Homepage</Link></button>
        </div>
      </div>

      <div className={styles.imgDiv}>
        <img
          className={styles.img}
          src={"/assets/images/common/pageNotFound/404error.png"}
          alt={"team-hero"}
        />
      </div>
    </div>
  );
}
