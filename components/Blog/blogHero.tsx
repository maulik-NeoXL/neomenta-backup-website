import styles from "../../styles/components/Blog/BlogHero.module.css";

export default function BlogHero()
{
  return (
    <>
      <div className={styles.blog_hero_container}>
        <div className={styles.blog_hero_wrapper}>
          <p className={styles.blog_hero_title}> Resources for businesses to learn, scale & grow.</p>
          <img
            className={styles.blog_hero_upper_image}
            src={"/assets/images/blog/blog_hero_upper_image.png"}
            alt={"footer_brand_logo"}
          />
          <img
            className={styles.blog_hero_belowe_image}
            src={"/assets/images/blog/blog_hero_belowe_image.png"}
            alt={"footer_brand_logo"}
          />
        </div>
      </div>
    </>
  );
}
