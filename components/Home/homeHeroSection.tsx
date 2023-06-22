import Link from "next/link";
import Container from "react-bootstrap/Container";
import styles from "../../styles/components/home/HomeHeroSection.module.css";

export default function HomeHeroSection()
{
  return (
    <>
      <Container className={"Container"}>
        <div className={styles.home_hero_main} data-aos="fade-up">
          <div className={styles.home_hero_text}>
            <p className={styles.home_hero_primary}>Move <span> your world</span></p>
            <div className={styles.home_hero_secondary_desktop_hide_mobile_show}>
              <p className={styles.home_hero_secondary}>Whether you are a Small, Mid or Large sized Enterprise, we make automation <span>accessible</span> and <span>affordable</span> for everyone.</p>
            </div>
            <div className={styles.home_hero_secondary_desktop_show_mobile_hide}>
            <p className={styles.home_hero_secondary}>Whether you are a Small, Mid or Large sized Enterprise,</p>
            <p className={styles.home_hero_secondary}>we make automation <span>accessible</span> and <span>affordable</span> for everyone.</p>
            </div>

            <div className={styles.home_hero_get_started_button}>
              <Link href="https://web.orgbeat.com/signUp" target="_blank">
                <button className={styles.home_hero_started_btn}>Create account</button>
              </Link>
            </div>
          </div>

          <div className={styles.home_desktop_show_tablet_hide_mobile_hide}>
            <div className={styles.home_hero_image}>
              <div className={styles.hero_image_wrapper}>
                <img src={"/assets/images/home/home_hero_laptop.png"} alt={"home_hero_laptop"} className={styles.home_hero_laptop_image}/>
              </div>
            </div>
          </div>
          <div className={styles.home_desktop_hide_tablet_show_mobile_hide}>
            <div className={styles.home_hero_image}>
              <div className={styles.hero_image_wrapper}>
                <img src={"/assets/images/home/home_hero_tablet.png"} alt={"home_hero_tablet"} className={styles.home_hero_laptop_image}/>
              </div>
            </div>
          </div>
          <div className={styles.home_desktop_hide_tablet_hide_mobile_show}>
            <div className={styles.home_hero_image}>
              <div className={styles.hero_image_wrapper}>
                <img src={"/assets/images/home/home_hero_mobile.png"} alt={"home_hero_mobile"} className={styles.home_hero_laptop_mobile}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}