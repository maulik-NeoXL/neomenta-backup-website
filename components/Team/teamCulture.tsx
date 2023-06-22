import styles from "../../styles/components/team/TeamCulture.module.css";

export default function TeamCulture()
{
  return (
    <>
      <div className={styles.team_container}>
        <div className={styles.team_wrapper}>
          <div className={styles.team_content}>
            <p className={styles.team_title}> Our culture that build champions</p>
            <div className={styles.team_desc_wrapper}>
              <p className={styles.team_desc_1}>
                neoXL is a family that shares the same drive and passion to change our beautiful world. Our friendly
                culture inspires our team to think outside the box embracing failures.
                <br /><br />
                We believe in building a space between work and personal life. Casual lunch/dinners, friendly meetings
                and some break from work is what we tend to do for our team to relax a bit and enjoy.
              </p>
            </div>
          </div>

          <div className={styles.team_img_wrapper}>
            <div className={styles.team_img}>
              <img
                className={styles.image}
                src={"/assets/images/team/team_culture.jpg"}
                alt={"team-hero"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
