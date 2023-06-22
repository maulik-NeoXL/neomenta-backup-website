import Link from "next/link";
import styles from "../../styles/components/contact/ContactForm.module.css";

export default function ContactForm()
{
  return (
    <>
      <div className={styles.contact_form_container}>
        <div className={styles.contact_form_wrapper}>
          <div className={styles.contact_form_heading}>
            <p>Contact</p>
          </div>

          <div className={styles.card_wrapper}>
            <div className={styles.card1}>
              <div className={styles.card_heading}>For Business enquiries</div>
              <div className={styles.card_email}><Link href={"mailto:info@neoxl.com"}>info@neoxl.com </Link></div>
            </div>

            <div className={styles.card2}>
              <div className={styles.card_heading}>For work opportunities</div>
              <div className={styles.card_email}><Link href={"mailto:hr@neoxl.com"}> hr@neoxl.com </Link></div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
