import styles from "../../styles/components/career/CareerLifeAtNeoxl.module.css";

export default function CareerLifeAtNeoxl()
{
  return (
    <>
      <div className={styles.life_container}>
        <div className={styles.life_wrapper}>
          <div className={styles.life_title}> Life at neoXL</div>
          <div className={styles.life_imageDiv1_container}>
            <div className={styles.life_imageDiv1_wrapper}>
              <img className={styles.image_1}
                src={"/assets/images/career/life_1.jpg"}
                alt={"career-hero"} />
              <img className={styles.image_2}
                src={"/assets/images/career/life_2.jpg"}
                alt={"career-hero"} />
            </div>
          </div>

          <div className={styles.life_imageDiv2_container}>
            <div className={styles.life_imageDiv2_wrapper}>
              <div className={styles.image_3_wrapper}>
                <img className={styles.image_3}
                  src={"/assets/images/career/life_3.jpg"}
                  alt={"career-hero"}
                />
              </div>
              <div className={styles.life_2_wrapper}>
                <div className={styles.image_4_wrapper}>
                  <img className={styles.image_4}
                    src={"/assets/images/career/life_4.jpg"}
                    alt={"career-hero"}
                  />
                </div>

                <div className={styles.life_image_5_6_wrapper}>
                  <div className={styles.image_56_wrapper}>
                    <img className={styles.image_5}
                      src={"/assets/images/career/life_5.jpg"}
                      alt={"career-hero"}

                    />

                    <img className={styles.image_6}
                      src={"/assets/images/career/life_6.jpg"}
                      alt={"career-hero"}

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
