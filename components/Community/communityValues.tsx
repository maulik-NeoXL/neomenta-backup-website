import Container from "react-bootstrap/Container";
import styles from "../../styles/components/community/CommunityValues.module.css";

export default function CommunityValues()
{
  return (
    <>
      <div className={styles.values_container}>
        <div className={styles.values_wrapper}>
          <Container className={"Container"}>
            <p className={styles.values_title}> Our core values</p>

            <div className={styles.values_card_wrapper}>
              <div className={styles.values_card}>
                <p className={styles.values_card_title}> Thrive ⬆️</p>
                <p className={styles.values_card_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, do..</p>
              </div>

              <div className={styles.values_card}>
                <p className={styles.values_card_title}> Inspire 💡 </p>
                <p className={styles.values_card_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, do..</p>
              </div>

              <div className={styles.values_card}>
                <p className={styles.values_card_title}>
                Give ❤️</p>
                <p className={styles.values_card_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, do..</p>
              </div>

              <div className={styles.values_card_2}>
                <p className={styles.values_card_title}> Connect 🤝 </p>
                <p className={styles.values_card_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, do..</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );

}
