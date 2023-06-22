import SettingsIcon from "@mui/icons-material/Settings";
import Container from "react-bootstrap/Container";
import styles from "../../styles/components/career/CareerUSP.module.css";

export default function CareerUSP()
{
  return (
    <>

      <div className={styles.usp_container}>
        <div className={styles.usp_wrapper}>
          <Container className={"Container"}>
            <p className={styles.usp_title}> What sets us apart</p>
            <div className={styles.usp_list_container}>
              <div className={styles.usp_list_wrapper}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div className={styles.usp_list_wrapper_2}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.usp_list_container}>
              <div className={styles.usp_list_wrapper}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div className={styles.usp_list_wrapper_2}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.usp_list_container}>
              <div className={styles.usp_list_wrapper}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>

              <div className={styles.usp_list_wrapper_2}>
                <div className={styles.usp_list_icon_wrapper}>
                  <div className={styles.usp_list_icon}><SettingsIcon sx={{color: "#ffffff"}} /></div>
                </div>

                <div className={styles.usp_list_content_wrapper}>
                  <p className={styles.usp_list_title}> Lorem Ipsum</p>
                  <p className={styles.usp_list_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

    </>
  );
}
