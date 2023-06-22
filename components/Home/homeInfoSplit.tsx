import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import styles from "../../styles/components/home/HomeInfoSplit.module.css";

export default function HomeInfoSplit()
{
  return (
    <>
      <div className={styles.home_info_split_main} data-aos="fade-up">
        <div className={styles.home_info_image_main}>
          <div className={styles.home_info_image_wrapper}>
            <img
              className={styles.home_info_image}
              src={"/assets/images/home/home-info-split.png"}
              alt={"home-info-split"}
            />
          </div>
        </div>
        <div className={styles.home_info_text_main}>
          <div className={styles.home_info_sub}>
            <p className={styles.home_info_title}>Think of Whatsapp, but for your business</p>
            <p className={`${styles.home_info_desc} ${styles.home_info_desc_first}`}>With neoXL, your enterprise can
              delegate routine tasks to a programmable digital assistant and concentrate on high-value activities.</p>
            <p className={`${styles.home_info_desc} ${styles.home_info_desc_first}`}>neoXL <span>integrates</span> chat,
              dropbox, and spreadsheets to create a queryable memory system that can be accessed, updated, programmed,
              and extended through conversation in real-time.</p>
            <p className={`${styles.home_info_desc} ${styles.home_info_desc_first}`}>Since everyone is familiar with
              chat, spreadsheets, and dropbox, neoXL dramatically reduces the barrier to entry for automating your
              enterprise.</p>
            <div className={styles.home_info_link_wrap}>
              <Link
                href="/blog/why-neoxl"
                className={styles.home_info_link}
              >Learn more <ArrowForwardIcon
                fontSize="small"
                color="primary"
                className={styles.home_info_link_icon}
              /> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
