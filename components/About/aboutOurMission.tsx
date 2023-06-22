import styles from "../../styles/components/about/AboutOurMission.module.css";

export default function AboutOurMission()
{
  return (
    <>
      <div className={styles.about_mission_main}>
        {/*<p className={styles.about_mission_title}>Our mission</p>*/}
        <div className={styles.about_mission_section_main}>
          <div className={styles.align_items_self_center}>
            <div className={styles.about_mission_text_wrapper}>
              <p className={styles.about_mission_text_primary}>Our mission</p>
              <p className={styles.about_mission_text_secondary}>Make a community-driven conversational automation platform that is easy to use, change, and extend.</p>
              <p className={styles.about_mission_text_secondary}>Apply this "messaging hammer" to problems that have resisted automation and unleash human potential.</p>
              <p className={styles.about_mission_text_secondary}>Start with four hundred small and medium enterprises, independent creators, and hobbyists to bring <span>automation to everyone.</span></p>
            </div>
            <div className={styles.about_mission_text_wrapper_2}>
              <p className={styles.about_mission_text_primary}>Our vision</p>
              <p className={styles.about_mission_text_secondary}>To create a <span>new system of the world</span> based on the conversational user interface, conversational workflows, conversational plug-n-play, and conversational search engine.</p>
            </div>
          </div>

          <div className={styles.about_mission_image_wrapper}>
            <div className={styles.about_mission_wrapper}>
              <img
                className={styles.about_mission_image}
                src={"/assets/images/about/about_our_mission.jpg"}
                alt={"about_mission_image"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
