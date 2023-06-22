import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "../../styles/components/casestudy/CaseStudyTrusted.module.css";

export default function CaseStudyTrusted()
{
  return (
    <div className={styles.trust_container}>
      <div className={styles.trust_wrapper}>
        <div className={styles.trust_title_wrapper}>
          <p className={styles.trust_title}> Trusted by</p>
        </div>
        <div className={styles.trust_icon_div}>
          {/*<div className={styles.trust_div}></div>*/}
          <div className={styles.trust_icon}><AppleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><GoogleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><AppleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><GoogleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><AppleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><GoogleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>
          <div className={styles.trust_icon}><AppleIcon sx={{fontSize: "50px", color: "#cad3dd"}} /></div>

        </div>

      </div>
    </div>
  );
}
