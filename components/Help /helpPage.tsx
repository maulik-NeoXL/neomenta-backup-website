import styles from "../../styles/components/help/helpPage.module.css";

export default function HelpPage()
{
  return (
    <>
      <div className={styles.help_container}>
        <div className={styles.help_wrapper}>
          <div className={styles.content}>
            <div className={styles.title}> How can we help you?</div>
            <div className={styles.subtitle}> Explore articles to help you understand how you can get started with neoXL
            </div>
            {/*<div className={styles.back_button}>*/}
            {/*  <button className={styles.btn}><Link href="/"> Go to Homepage </Link></button>*/}
            {/*</div>*/}
          </div>

        </div>
      </div>
    </>
  );
}
