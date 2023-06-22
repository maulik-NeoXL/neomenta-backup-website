import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "../../styles/components/help/helpCards.module.css";

export default function HelpCards()
{
  return (
    <>
      <div className={styles.help_container}>
        <div className={styles.help_wrapper}>
          <div className={styles.help_blog_wrapper}>
            <div className={styles.help_blog_div}>
              <div className={styles.help_blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"/assets/images/case-study/blog_heading.jpg"}
                  alt={"case-study-hero"}
                />

              </div>

              <div className={styles.help_content}>
                <p className={styles.help_content_title}> How is neoXL different from Whatsapp?</p>
                <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.help_info_link_wrap}>
                  <Link
                    href="/helpDetails"
                    className={styles.help_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.help_info_link_icon}
                  /> </Link>
                </div>
              </div>

            </div>

            <div className={styles.help_blog_div}>
              <div className={styles.help_blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"assets/images/case-study/blog_heading_2.jpg"}
                  alt={"case-study-hero"}
                />

              </div>
              <div className={styles.help_content}>
                <p className={styles.help_content_title}> How to setup neoXL for a tea franchise?</p>
                <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.help_info_link_wrap}>
                  <Link
                    href="/helpDetails"
                    className={styles.help_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.help_info_link_icon}
                  /> </Link>
                </div>
              </div>

            </div>

            <div className={styles.help_blog_div_2}>
              <div className={styles.help_blog_imgDiv}>
                <img
                  className={styles.image}
                  src={"assets/images/case-study/blog_heading.jpg"}
                  alt={"case-study-hero"}
                />

              </div>
              <div className={styles.help_content}>
                <p className={styles.help_content_title}> How to setup neoXL for a tiles company?</p>
                <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.help_info_link_wrap}>
                  <Link
                    href="/helpDetails"
                    className={styles.help_info_link}
                  >Read more <ArrowForwardIcon
                    fontSize="small"
                    color="primary"
                    className={styles.help_info_link_icon}
                  /> </Link>
                </div>
              </div>

            </div>

          </div>

          {/*<div className={styles.help_blog_wrapper}>*/}
          {/*  <div className={styles.help_blog_div}>*/}
          {/*    <div className={styles.help_blog_imgDiv}>*/}
          {/*      <img*/}
          {/*        className={styles.image}*/}
          {/*        src={"assets/images/case-study/blog_heading_2.jpg"}*/}
          {/*        alt={"case-study-hero"}*/}
          {/*      />*/}

          {/*    </div>*/}
          {/*    <div className={styles.help_content}>*/}
          {/*      <p className={styles.help_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>*/}
          {/*      <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor*/}
          {/*        incididunt ut labore et dolore magna aliqua.</p>*/}
          {/*      <div className={styles.help_info_link_wrap}>*/}
          {/*        <Link*/}
          {/*          href="/about"*/}
          {/*          className={styles.help_info_link}*/}
          {/*        >Read more <ArrowForwardIcon*/}
          {/*          fontSize="small"*/}
          {/*          color="primary"*/}
          {/*          className={styles.help_info_link_icon}*/}
          {/*        /> </Link>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*  </div>*/}

          {/*  <div className={styles.help_blog_div}>*/}
          {/*    <div className={styles.help_blog_imgDiv}>*/}
          {/*      <img*/}
          {/*        className={styles.image}*/}
          {/*        src={"assets/images/case-study/blog_heading.jpg"}*/}
          {/*        alt={"case-study-hero"}*/}
          {/*      />*/}

          {/*    </div>*/}
          {/*    <div className={styles.help_content}>*/}
          {/*      <p className={styles.help_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>*/}
          {/*      <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor*/}
          {/*        incididunt ut labore et dolore magna aliqua.</p>*/}
          {/*      <div className={styles.help_info_link_wrap}>*/}
          {/*        <Link*/}
          {/*          href="/about"*/}
          {/*          className={styles.help_info_link}*/}
          {/*        >Read more <ArrowForwardIcon*/}
          {/*          fontSize="small"*/}
          {/*          color="primary"*/}
          {/*          className={styles.help_info_link_icon}*/}
          {/*        /> </Link>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*  </div>*/}

          {/*  <div className={styles.help_blog_div_2}>*/}
          {/*    <div className={styles.help_blog_imgDiv}>*/}
          {/*      <img*/}
          {/*        className={styles.image}*/}
          {/*        src={"/assets/images/case-study/blog_heading_2.jpg"}*/}
          {/*        alt={"case-study-hero"}*/}
          {/*      />*/}

          {/*    </div>*/}
          {/*    <div className={styles.help_content}>*/}
          {/*      <p className={styles.help_content_title}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>*/}
          {/*      <p className={styles.help_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor*/}
          {/*        incididunt ut labore et dolore magna aliqua.</p>*/}
          {/*      <div className={styles.help_info_link_wrap}>*/}
          {/*        <Link*/}
          {/*          href="/about"*/}
          {/*          className={styles.help_info_link}*/}
          {/*        >Read more <ArrowForwardIcon*/}
          {/*          fontSize="small"*/}
          {/*          color="primary"*/}
          {/*          className={styles.help_info_link_icon}*/}
          {/*        /> </Link>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
}
