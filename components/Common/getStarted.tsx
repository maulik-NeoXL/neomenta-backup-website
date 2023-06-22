import Link from "next/link";
import styles from "../../styles/components/common/getStarted.module.css";

export default function GetStarted(props: {
  title: string
})
{
  const {title} = props;

  return (
    <>
      <div className={styles.get_start_container}>
        <div className={styles.get_start_main}>
          <div className={styles.get_start_title_btn_section}>
            <p className={styles.get_start_title}> {title} </p>
            <div className={styles.get_start_btn_section}>
              <Link
                href="https://web.orgbeat.com/signUp" target="_blank"
                className={styles.get_start_link}
              > Create button </Link>
            </div>
          </div>
          <div className={styles.get_start_gif_section}>
            <div className={styles.get_start_gif_wrapper}>
              <img
                className={styles.get_start_gif}
                src={"/assets/images/common/getStarted/new_neoXL_fast.gif"}
                alt={"get_started_gif"}
              />
            </div>
          </div>
          <div className={styles.get_start_ellipse_top}>
            <img
              className={styles.get_start_ellipse_top}
              src={"/assets/images/common/getStarted/get-started-ellipse-top.png "}
              alt={"get_start_ellipse_top"}
            />
          </div>
          <div className={styles.get_start_ellipse_bottom}>
            <img
              className={styles.get_start_ellipse_bottom}
              src={"/assets/images/common/getStarted/get-started-ellipse-bottom.png "}
              alt={"get_start_ellipse_bottom"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
