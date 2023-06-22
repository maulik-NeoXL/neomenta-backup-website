import Link from "next/link";
import styles from "../../styles/components/home/HomeHowItWorks.module.css";

export default function HomeHowItWorks()
{
  return (
    <>
      <div className={styles.how_it_works_container}>
        <div className={styles.how_it_works_imgdiv}>
          <img
            className={styles.home_how_it_works_img}
            src={"/assets/images/home/hero-how-it-works.png"}
            alt={"Home_Info_Split"}
            width={486}
            height={670}
          />
          {/*<img*/}
          {/*  className={styles.how_it_works_img_upper}*/}
          {/*  src={"/assets/images/home/how_it_works_img_lower.svg"}*/}
          {/*  alt={"how_it_works_img_upper"}*/}
          {/*/>*/}
          {/*<img*/}
          {/*  className={styles.how_it_works_img_lower}*/}
          {/*  src={"/assets/images/home/how_it_works_img_lower.jpg "}*/}
          {/*  alt={"how_it_works_img_lower"}*/}
          {/*/>*/}
        </div>
        <div className={styles.how_it_works_wrapper}>
          <div className={styles.home_how_it_works_title}>How does this work?
            <div className={styles.home_how_it_works_subtext_container}>
              <div className={styles.home_how_it_works_subtext_1}>
                Relax! Using neoXL is super easy. If you have used messaging apps like WhatsApp, you and your team would
                have a zero learning curve.
              </div>
              <div className={styles.home_how_it_works_subtext_2}>
                We have three additional concepts built on top of a simple messaging platform.
              </div>
            </div>

            <div className={styles.blog_learn_more}>
              <Link
                href="/blog/why-neoxl"
                className={styles.home_info_link}
              > </Link>
            </div>

            <div className={styles.home_how_it_works_bullet_points_container}>
              <ol className={styles.home_how_it_work_list_ol}>
                <div className={styles.home_how_it_works_bullet_points}>
                  <li className={styles.home_how_it_work_list_item}>
                    <div className={styles.home_how_it_works_question}>
                      <p className={styles.home_how_it_works_bullet_title_number}> 1 </p>
                      <p className={styles.home_how_it_works_bullet_title}>Form messages</p>
                    </div>
                    <p className={styles.home_how_it_works_bullet_subtext}>In addition to all the text and media
                      messaging you are familiar with, we enable user-defined forms that can be sent to people or groups
                      to initiate or update a workflow.</p>
                  </li>
                </div>

                <div className={styles.home_how_it_works_bullet_points_2}>
                  <li className={styles.home_how_it_work_list_item}>
                    <div className={styles.home_how_it_works_question}>
                      <p className={styles.home_how_it_works_bullet_title_number}> 2 </p>
                      <p className={styles.home_how_it_works_bullet_title}>Spreadsheet drive</p>
                    </div>
                    <p className={styles.home_how_it_works_bullet_subtext}>All the forms you sent or updated would
                      update a corresponding spreadsheet in your spreadsheet drive in real-time.</p>
                  </li>
                </div>

                <div className={styles.home_how_it_works_bullet_points_2}>
                  <li className={styles.home_how_it_work_list_item}>
                    <div className={styles.home_how_it_works_question}>
                      <p className={styles.home_how_it_works_bullet_title_number}> 3 </p>
                      <p className={styles.home_how_it_works_bullet_title}>Sharing deep links</p>
                    </div>
                    <p className={styles.home_how_it_works_bullet_subtext}>All the forms and spreadsheets inherently
                      have a deep link within the system to be shared safely with people using your favorite email or
                      messaging systems, thus not forcing anyone outside your enterprise to be a neoXL user.</p>
                  </li>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
