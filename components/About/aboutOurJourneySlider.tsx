import styles from "../../styles/components/about/aboutOurJourneySlider.module.css";

export default function AboutOurJourneySlider(props: {currentTimeline: number, step: any})
{
  const {step} = props;

  return (
    <div className={styles.journey_timeline_slide_section}>
      <div className={styles.journey_timeline_slide_main}>
        <div className={styles.journey_timeline_slide_inside_left}>
          <div className={styles.journey_timeline_image_wrapper}>
            <img
              className={styles.journey_timeline_image}
              src={step.image}
              alt={"journey_timeline_image"}
            />
          </div>
        </div>
        <div className={styles.journey_timeline_slide_inside_right}>
          <div className={styles.journey_timeline_slide_text_box}>
            <p className={styles.journey_timeline_title}>
              {step.title}</p>
            <p className={styles.journey_timeline_desc}>
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
