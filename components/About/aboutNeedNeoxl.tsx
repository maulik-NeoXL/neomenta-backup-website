import styles from "../../styles/components/about/AboutNeedNeoxl.module.css";

export default function AboutWhyNeed()
{
  return (
    <>
      <div className={styles.about_need_main}>
        <div className={styles.about_need_text_main}>
          <div className={styles.about_need_sub_main}>
            <p className={styles.about_need_title}>Why we need neoXL</p>
            <p className={styles.about_need_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ads eiusmod tempor incididunt ut labore et
              dolore magna sef gthdf gfh tty jhj aliqua.Lorem ipsum dolor sit amet, dolor sit amet, dfdf grg consectetur
              adipiscing elit, sed
              do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className={styles.about_need_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aaa eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={styles.about_need_image_main}>
          <div className={styles.about_need_image_wrapper}>
            <img
              className={styles.about_need_image}
              src={"/assets/images/about/about-need-section.jpg"}
              alt={"about-need-section"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
