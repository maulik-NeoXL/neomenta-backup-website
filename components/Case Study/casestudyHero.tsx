import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "../../styles/components/casestudy/CaseStudyHero.module.css";

export default function CaseStudyHero()
{
  return (
    <div className={styles.case_container}>
      <div className={styles.case_wrapper}>
        <div className={styles.case_content}>
          <p className={styles.case_title}>
            Success stories from real neoXL customers
          </p>
          <p className={styles.case_desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className={styles.case_imgbx}>
          <div className={styles.case_img}>
            <img
              className={styles.image}
              src={"/assets/images/case-study/case_study_1.jpg"}
              alt={"case-study-hero"}
            />
          </div>
          <div className={styles.case_card_content}>
            <p className={styles.case_card_title}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
            <p className={styles.case_card_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
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
  );
}
