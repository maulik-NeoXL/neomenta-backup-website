import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "../../styles/components/career/CareerPerks.module.css";

export default function CareerPerks()
{
  return (
    <>
      <div className={styles.perks_container}>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_title}>
            Perks & Benefits
          </div>

          <div className={styles.perks_card_container}>
            <div className={styles.perks_card_wrapper}>
              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
                  </div>
                </div>
                <div className={styles.card_title}> Shared ownership</div>
                <div className={styles.card_description}> We believe that every employee should have ownership of our
                  company.
                </div>
              </div>

              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <SettingsIcon sx={{
                      fontSize: "30px",
                      color: "#cad3dd",
                      opacity: "1",
                      "&:hover": {color: "#1976d2"}
                    }} />
                  </div>
                </div>
                <div className={styles.card_title}> Career Growth</div>
                <div className={styles.card_description}> We invest in the career growth of our employees via cross
                  functional team exposure across different technologies.
                </div>
              </div>

              <div className={styles.perks_card_2}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <RocketLaunchIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
                  </div>
                </div>
                <div className={styles.card_title}> Flexible Working</div>
                <div className={styles.card_description}> We provide flexible working options for employees to drive
                  productivity that works for you.
                </div>
              </div>
            </div>

            <div className={styles.perks_card_wrapper_2}>
              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
                  </div>
                </div>
                <div className={styles.card_title}> Mentoring</div>
                <div className={styles.card_description}> We believe in grooming individuals to live life to their full
                  potential. Learn from the best!
                </div>
              </div>

              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
                  </div>
                </div>
                <div className={styles.card_title}> Impact Driven</div>
                <div className={styles.card_description}> We believe our work impacts the world and would love you to
                  be a part of it!
                </div>
              </div>

              <div className={styles.perks_card_2}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
                  </div>
                </div>
                <div className={styles.card_title}> Equality Driven</div>
                <div className={styles.card_description}> We have no sir/mam culture, rather we aim to be one united
                  family.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
