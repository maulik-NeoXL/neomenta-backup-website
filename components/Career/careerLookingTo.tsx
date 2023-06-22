import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "../../styles/components/career/CareerLookingTo.module.css";

export default function CareerLookingTo()
{
  return (
    <>
      <div className={styles.career_info_container}>
        <div className={styles.career_info_wrapper}>
          <div className={styles.career_info_title_wrapper}>
            <p className={styles.career_info_title}> Looking to work on cutting-edge problem? neo<span>XL</span> is
              the place where you will...
            </p>
          </div>

          <div className={styles.career_info_cards_container}>
            <div className={styles.career_info_cards_wrapper}>
              <div className={styles.career_info_card}>
                <div className={styles.career_card_content_wrapper}>
                  <div className={styles.career_logo_wrapper}>
                    <div className={styles.career_logo}><LanguageIcon
                      height={45}
                      width={45}
                      sx={{
                        color: "#ffffff",
                        fontSize: "35px"
                      }}
                    /></div>
                  </div>
                  <div className={styles.career_content}>
                    <div className={styles.career_title}> Solve</div>
                    <div className={styles.career_desc}> High Quality Problems</div>
                  </div>
                </div>
              </div>

              <div className={styles.career_info_card}>
                <div className={styles.career_card_content_wrapper}>
                  <div className={styles.career_logo_wrapper}>
                    <div className={styles.career_logo}><GroupAddIcon
                      height={25}
                      width={25}
                      sx={{
                        color: "#ffffff",
                        fontSize: "35px"
                      }}
                    /></div>
                  </div>
                  <div className={styles.career_content}>
                    <div className={styles.career_title}> Work with</div>
                    <div className={styles.career_desc}> Like Minded People</div>
                  </div>
                </div>
              </div>

              <div className={styles.career_info_card}>
                <div className={styles.career_card_content_wrapper}>
                  <div className={styles.career_logo_wrapper}>
                    <div className={styles.career_logo}><AirlineSeatFlatIcon
                      height={25}
                      width={25}
                      sx={{
                        color: "#ffffff",
                        fontSize: "35px"
                      }}
                    /></div>
                  </div>
                  <div className={styles.career_content}>
                    <div className={styles.career_title}> Stay outside</div>
                    <div className={styles.career_desc}> Your Comfort Zone</div>
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
