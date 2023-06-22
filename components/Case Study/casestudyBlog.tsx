import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "../../styles/components/casestudy/CaseStudyBlog.module.css";

export default function CaseStudyBlog()
{
  return (
    <div className={styles.study_container}>
      <div className={styles.study_wrapper}>
        <p className={styles.study_title}> Browse all Case studies</p>
        <div className={styles.study_blog_wrapper}>
          <div className={styles.study_blog_div}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"/assets/images/case-study/blog_heading.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>

          <div className={styles.study_blog_div}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"assets/images/case-study/blog_heading_2.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>

          <div className={styles.study_blog_div_2}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"assets/images/case-study/blog_heading.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.study_blog_wrapper}>
          <div className={styles.study_blog_div}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"assets/images/case-study/blog_heading_2.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>

          <div className={styles.study_blog_div}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"assets/images/case-study/blog_heading.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>

          <div className={styles.study_blog_div_2}>
            <div className={styles.study_blog_imgDiv}>
              <img
                className={styles.image}
                src={"/assets/images/case-study/blog_heading_2.jpg"}
                alt={"case-study-hero"}
              />

            </div>
            <div className={styles.study_content}>
              <p className={styles.study_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p className={styles.study_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.study_info_link_wrap}>
                <Link
                  href="/about"
                  className={styles.study_info_link}
                >Read more <ArrowForwardIcon
                  fontSize="small"
                  color="primary"
                  className={styles.study_info_link_icon}
                /> </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
