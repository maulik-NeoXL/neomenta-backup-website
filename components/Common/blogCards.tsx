import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "../../styles/components/common/blogcards.module.css";

export default function BlogCards()
{
  return (
    <>
      <div className={styles.blog_container}>
        <div className={styles.blog_wrapper}>
          <div className={styles.blog_heading_wrapper}>
            <div className={styles.blog_heading}>
              <p> Latest Blogs </p>
            </div>
          </div>

          <div className={styles.blog_card_wrapper}>
            <div className={styles.blog_card}>
              <div className={styles.blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"/assets/images/case-study/case_study_1.jpg"}
                  alt={"case-study-hero"}
                />
              </div>

              <div className={styles.blog_content}>
                <div className={styles.blog_title}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
                <div className={styles.blog_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore
                  magna aliqua.
                </div>
                <div className={styles.case_info_link_wrap}>
                  <Link
                    href="/about"
                    className={styles.case_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.case_info_link_icon}
                  /> </Link>
                </div>

              </div>
            </div>

            <div className={styles.blog_card}>
              <div className={styles.blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"/assets/images/case-study/case_study_1.jpg"}
                  alt={"case-study-hero"}
                />
              </div>

              <div className={styles.blog_content}>
                <div className={styles.blog_title}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
                <div className={styles.blog_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore
                  magna aliqua.
                </div>
                <div className={styles.case_info_link_wrap}>
                  <Link
                    href="/about"
                    className={styles.case_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.case_info_link_icon}
                  /> </Link>
                </div>

              </div>
            </div>

            <div className={styles.blog_card}>
              <div className={styles.blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"/assets/images/case-study/case_study_1.jpg"}
                  alt={"case-study-hero"}
                />
              </div>

              <div className={styles.blog_content}>
                <div className={styles.blog_title}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
                <div className={styles.blog_desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore
                  magna aliqua.
                </div>
                <div className={styles.case_info_link_wrap}>
                  <Link
                    href="/about"
                    className={styles.case_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.case_info_link_icon}
                  /> </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
