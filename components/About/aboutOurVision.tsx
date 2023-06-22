import styles from "../../styles/components/about/AboutOurVision.module.css";

export default function AboutOurVision()
{
  return (
    <>
      <div className={styles.about_vision_main}>
        {/*<p className={styles.about_vision_title}>Our vision</p>*/}
        <div className={styles.about_vision_section_main}>
          <div className={styles.about_vision_image_wrapper}>
            <div className={styles.about_vision_wrapper}>
              <img
                className={styles.about_vision_image}
                src={"/assets/images/about/about_vision_image.png"}
                alt={"about_vision_image"}
              />
            </div>
          </div>
          <div className={styles.about_vision_text_wrapper}>
            <p className={styles.about_vision_text_primary}>Our vision</p>
            <p className={styles.about_vision_text_secondary}>To create a <span>new system of the world</span> based on the conversational user interface, conversational workflows, conversational plug-n-play, and conversational search engine.</p>
          </div>
        </div>
      </div>
    </>
  );
}
