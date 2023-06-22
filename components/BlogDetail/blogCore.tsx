import styles from "../../styles/components/blogdetail/blogCore.module.css";

export default function BlogCore(props: any)
{
  const {blogData} = props;
  return (
    <>
      <div className={styles.blog_core_main}>
        <div className={styles.blog_title_wrap}>
          <p className={styles.blog_title}>{blogData?.title} </p>
          <div className={styles.blog_author_detail}>
            <p className={styles.blog_author_name}> By <span className={styles?.highlight}>  {blogData?.author}  </span> {blogData?.date}<span
              className={styles.highlight}> {blogData?.industry}  </span></p>
            <span className={styles.blog_reading_time}> {blogData?.readtime} Mins </span>
          </div>
        </div>
        <div className={styles.blog_quote_box}>
          <div className={styles.blog_text_box}>
            <div className={styles.text_wrapper}>
              <p
                className={styles.blog_quote_title}
              >“{blogData?.quote}”</p>
              <p className={styles.blog_quote_author}> - {blogData?.qoute_author} </p>
            </div>
          </div>
          <div className={styles.blog_image_box}>
            <div className={styles.blog_image_wrapper}>
              <img
                className={styles.blog_github_founder_image}
                src={blogData?.quote_author_image}
                alt={"blog_github_founder_image"}
              />
            </div>
          </div>
        </div>
        <div className={styles.blog_summery_box}>
          <div className={styles.blog_summery_main}>
            <p className={styles.blog_summery_text}> {blogData?.moral} </p>
          </div>
        </div>
      </div>
    </>
  );
}
