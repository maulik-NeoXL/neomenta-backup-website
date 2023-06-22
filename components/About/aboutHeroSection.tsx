import styles from "styles/components/about/AboutHeroSection.module.css";

export default function AboutHeroSection()
{
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_wrapper}>
          <div className={styles.about_title}> Automation for <span> everyone. </span></div>
          <div className={styles.about_subtext}>{/*We believe humans should focus on high-value activities, creative
          pursuits, and personal passions. To unleash this human potential, we offer a range of automation tools to
           streamline daily tasks and free up time for exploration. */} Our no-code platform fuses the capabilities of
            chat, dropbox, and spreadsheets to make automation conversational, affordable, and accessible for
            enterprises of all sizes, independent creators, and hobbyists.
          </div>
        </div>
      </div>

    </>

  );
}
