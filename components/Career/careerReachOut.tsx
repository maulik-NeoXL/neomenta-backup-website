import styles from "../../styles/components/career/CareerReachOut.module.css";

export default function CareerReachOut(props: {
  title: string
})
{
  const {title} = props;
  return (
    <div className={styles.blog_subscription_container}>
      <div className={styles.blog_subscription_main}>
        <div className={styles.blog_text_box_main}>
          <div className={styles.blog_text_box_wrapper}>
            <p className={styles.reach_out_first}>{title}</p>
            <p className={styles.reach_out_second}>please reach out
              at <a className={styles.reach_out_link} href={"mailto:hr@neoxl.com"}> hr@neoxl.com </a></p>
          </div>
        </div>
        <div className={styles.blog_image_box_main}>
          <div className={styles.blog_image_wrapper}>
            <img
              className={styles.blog_subscription_card_image}
              src={"/assets/images/career/goal.png"}
              alt={"blog_subscription_card_image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
