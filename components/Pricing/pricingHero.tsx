import styles from "../../styles/components/pricing/pricingHero.module.css";

export default function PricingHero()
{
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_wrapper}>
          <p className={styles.about_title}> Automation should be <span> easy. </span></p>
          <p className={styles.about_subtext}> No credit card required. All plans come with a
            free, <span className={styles.about_highlight}> 30-day free trial </span> of
            our Premium features.
          </p>
        </div>
      </div>
    </>
  );
}
