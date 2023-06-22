import styles from "../../styles/components/blogdetail/blogFooter.module.css";

export default function BlogFooter(props: any)
{
  const {blogFooter} = props;
  return (
    <div className={styles.blog_footer_main}>
      <div className={styles.blog_footer_publisher_detail}>
        <div className={styles.blog_footer_image_wrapper}>
          <img
            className={styles.blog_footer_image}
            src={blogFooter?.author_image}
            alt={"blog_footer_image"}
          />
        </div>
        <div className={styles.blog_footer_text_box_wrapper}>
          <p className={styles.blog_footer_text_primary}><a
            href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fbsoni%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2JIDmhMqph4OcBLffi9hz6"
          > By {blogFooter?.author} </a></p>
          <p className={styles.blog_footer_text_secondary}>{blogFooter?.author_designation}</p>
        </div>
      </div>
      <div className={styles.blog_footer_publisher_logo}>
        <div className={styles.blog_footer_logo_image_wrapper}>
          <img
            className={styles.blog_footer_logo}
            src={"/assets/images/help/new_neoXL_fast.gif"}
            alt={"blog_footer_logo"}
          />
        </div>
      </div>
    </div>
  );
}
