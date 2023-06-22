import styles from "../../styles/components/career/CareerHeroSection.module.css";

export default function CareerHeroSection()
{
  return (
    <>
      <div className={styles.career_container}>
        <div className={styles.career_wrapper}>
          <div className={styles.career_content}>
            <h5>We are Hiring</h5>
            <p className={styles.career_title}> Work with us!</p>
            <p className={styles.career_subtitle}>The work environment at neoXL is built on the principles of learning, development, and work-life harmony. This is because employee satisfaction is an important part of neoXL's values.</p>
          </div>
          <div className={styles.career_image_wrapper}>
            < div className={styles.career_image}>
              <img
                className={styles.image}
                src={"/assets/images/career/career_hero_2.png"}
                alt={"career-hero"}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
