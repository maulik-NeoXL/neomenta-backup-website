import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "../../styles/components/career/CareerPerks.module.css";

export default function CommunityPerks()
{
  return (
    <>
      <div className={styles.perks_container}>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_title}>
            Perks & Benefits of being a neo<span>Bro</span>
          </div>

          <div className={styles.perks_card_container}>
            <div className={styles.perks_card_wrapper}>
              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd","&:hover": { color: "#1976d2" }}} />
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>

              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <SettingsIcon sx={{fontSize: "30px", color: "#cad3dd", opacity: "1", "&:hover": { color: "#1976d2" }}} />
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>

              <div className={styles.perks_card_2}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <RocketLaunchIcon sx={{fontSize: "30px", color: "#cad3dd","&:hover": { color: "#1976d2" }}}/>
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>

            <div className={styles.perks_card_wrapper_2}>
              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd","&:hover": { color: "#1976d2" }}} />
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>

              <div className={styles.perks_card}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd","&:hover": { color: "#1976d2" }}} />
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>

              <div className={styles.perks_card_2}>
                <div className={styles.card_icon}>
                  <div className={styles.card_icon_background}>
                    <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd","&:hover": { color: "#1976d2" }}} />
                  </div>
                </div>
                <div className={styles.card_title}> Lorem ipsum dolor sit amet</div>
                <div className={styles.card_description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
