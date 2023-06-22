import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "styles/components/Blog/BlogSectionPage.module.css";

export default function BlogSection(props: any)
{
  const blogObj = Object.entries(props.jsonString);

  return (
    <>
      <div className={styles.blog_container}>
        <div className={styles.blog_wrapper}>
          <div className={styles.study_title}> Latest Blogs</div>
          <div className={styles.blog_card_wrapper} >
            {blogObj.map((blog: any, index: number) => (
                <Link
                    href={`/blog/${blog[0]}`}
                    className={styles.case_info_link}
                >
                <div
                className={styles.blog_card}
                key={index}

              >
                <div className={styles.blog_imgDiv}>
                  <img
                    className={styles.image}
                    src={blog[1].meta_image}
                    alt={"case-study-hero"}
                  />
                </div>

                <div className={styles.blog_content} >
                  <p className={styles.blog_title}>
                    {blog[1].title}
                  </p>
                  <p
                    className={styles.blog_desc}
                    dangerouslySetInnerHTML={{__html: blog[1].meta_desc}}
                  >
                  </p>
                  <div className={styles.case_info_link_wrap}>
                   Read more <ArrowForwardIcon
                      fontSize="small"
                      color="primary"
                      className={styles.case_info_link_icon}
                    />
                  </div>

                </div>
              </div>
                </Link>
            ))}

          </div>
        </div>
      </div>
    </>

  );
}
