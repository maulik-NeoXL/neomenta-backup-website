import styles from "../../styles/components/blogdetail/blogSubscription.module.css";

export default function BlogSubscription()
{
  return (
    <div className={styles.blog_subscription_container}>
      <div className={styles.blog_subscription_main}>
        <div className={styles.blog_text_box_main}>
          <div className={styles.blog_text_box_wrapper}>
            <p className={styles.blog_text_primary}>Get latest updates and deals</p>
            <div className={styles.blog_input_wrapper}>
              <input
                className={styles.blog_input_field}
                placeholder={"Your email"}
              />
              <button className={styles.blog_subscribe_button}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.blog_image_box_main}>
          <div className={styles.blog_image_wrapper}>
            <img
              className={styles.blog_subscription_card_image}
              src={"/assets/images/blog/blog-detail/blog_subscription_card_image.png"}
              alt={"blog_subscription_card_image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
