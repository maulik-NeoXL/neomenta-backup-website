import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import styles from "../../styles/components/home/HomeFeatures.module.css";

export default function HomeFeatures()
{
  return (
    <>
      <p className={styles.home_features_heading}>Who do we stand for</p>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_icon}>
            <div className={styles.card_icon_background}>
              <SettingsIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
            </div>
          </div>
          <p className={styles.card_title}>Field Ops</p>
          <p className={styles.card_description}>Companies with large field operations team</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_icon}>
            <div className={styles.card_icon_background}>
              <CreateNewFolderIcon sx={{fontSize: "30px", color: "#cad3dd", opacity: "1", "&:hover": {color: "#1976d2"}}} />
            </div>
          </div>
          <p className={styles.card_title}>Franchise management</p>
          <p className={styles.card_description}>Manage your franchises, their EoD sales figures, performance and revenue monitoring</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_icon}>
            <div className={styles.card_icon_background}>
              <RocketLaunchIcon sx={{fontSize: "30px", color: "#cad3dd", "&:hover": {color: "#1976d2"}}} />
            </div>
          </div>
          <p className={styles.card_title}>Sales Management</p>
          <p className={styles.card_description}>Manage feet-on-street teams who can record their activities over their smartphone</p>
        </div>

      </div>

      <div className={styles.get_started_button_wrapper}>
        <Link href="https://web.orgbeat.com/signUp" target="_blank">
          <button className={styles.get_started_button}> Create account</button>
        </Link>
      </div>

    </>
  );
}
