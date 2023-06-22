import styles from "../../styles/components/home/HomeNeedAutomation.module.css";

export default function HomeNeedAutomation()
{
  return (
    <>
      <p className={styles.home_need_automation_title}>Why you need to automate now?</p>
      <div className={styles.home_need_automation_box}>
        <div className={styles.home_need_automation_box_image_wrapper}>
          <img
            className={styles.home_need_automation_image}
            src={"/assets/images/home/home_need_automation_image.png"}
            alt="home_need_automation_image"
          />
        </div>
        <div className={styles.home_need_automation_text_box}>
          <div className={`${styles.home_need_automation_sub_box} ${styles.home_need_automation_box_gap}`}>
            <div className={`${styles.home_need_automation_inside_box} ${styles.home_need_automation_inside_box_spacing}`}>
              <p className={`${styles.home_need_automation_inside_box_title} ${styles.home_need_automation_title_spacing}`}>Smart
                business</p>
              <p className={styles.home_need_automation_inside_box_desc}>Manage your entire business through chat
                messages with your team</p>
            </div>
            <div className={`${styles.home_need_automation_inside_box} ${styles.home_need_automation_inside_box_mob_space} `}>
              <p className={`${styles.home_need_automation_inside_box_title} ${styles.home_need_automation_title_spacing}`}>Business
                transformation</p>
              <p className={styles.home_need_automation_inside_box_desc}>Transform your scattered chat data to
                spreadsheets and improve your sales performance management</p>
            </div>
          </div>
          <div className={`${styles.home_need_automation_sub_box} ${styles.home_need_automation_box_gap}`}>
            <div className={`${styles.home_need_automation_inside_box} ${styles.home_need_automation_inside_box_spacing}`}>
              <p className={`${styles.home_need_automation_inside_box_title} ${styles.home_need_automation_title_spacing}`}>Digital
                tools</p>
              <p className={styles.home_need_automation_inside_box_desc}>Track your field operations with our
                geolocation capabilities</p>
            </div>
            <div className={`${styles.home_need_automation_inside_box} ${styles.home_need_automation_inside_box_mob_space}`}>
              <p className={`${styles.home_need_automation_inside_box_title} ${styles.home_need_automation_title_spacing}`}>Everything
                is an API</p>
              <p className={styles.home_need_automation_inside_box_desc}>Connect with all your existing tools to have a
                central view of your business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
