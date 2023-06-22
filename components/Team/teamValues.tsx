import Container from "react-bootstrap/Container";
import styles from "../../styles/components/team/TeamValues.module.css";

export default function TeamValues()
{
  return (
    <>
      <div className={styles.values_container}>
        <div className={styles.values_wrapper}>
          <Container className={"Container"}>
            <p className={styles.values_title}> Our core values</p>

            <div className={styles.values_card_wrapper}>
              <div className={styles.values_card}>
                <p className={styles.values_card_title}> Integrity </p>
                <p className={styles.values_card_desc}> We are honest to our work and our people. We believe without
                  work our life would be boring and meaningless. Being
                  ethical and transparent is what we strive for. </p>
              </div>

              <div className={styles.values_card}>
                <p className={styles.values_card_title}> Passion </p>
                <p className={styles.values_card_desc}> We are passionate towards our work and that is what drives us to
                  mould our art. We are Passionate enough to make a dent in the world.</p>
              </div>

              <div className={styles.values_card}>
                <p className={styles.values_card_title}> Customer First </p>
                <p className={styles.values_card_desc}> We believe our customers are our first adapters and first
                  critiques. We are a company of the Customers, by the Customers and for the Customers.</p>
              </div>

              <div className={styles.values_card_2}>
                <p className={styles.values_card_title}>Innovation</p>
                <p className={styles.values_card_desc}> We innovate together. Providing continual technology releases
                  and
                  new
                  initiatives gives our customers a competitive advantage.</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );

}
