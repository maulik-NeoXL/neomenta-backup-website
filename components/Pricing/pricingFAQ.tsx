import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AccordionDetails} from "@mui/material";
import {Accordion, AccordionSummary} from "@mui/material";
import styles from "../../styles/components/pricing/pricingFAQ.module.css";

export default function PricingFAQ()
{

  return (
    <>
      <div className={styles.home_faq_container}>
        <p className={styles.home_faq_title}>Frequently Asked Questions</p>

        <Accordion
          style={{boxShadow: "none"}}
          className={styles.accordion_faq_main}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className={styles.accordion_faq_question}>Is the free plan really free?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Yes! It’s not a trial and it’s free forever. neoXL’s Free Plan comes with 1 admin
              per enterprise with a capacity of upto 5 users.
            </p>
          </AccordionDetails>

        </Accordion>

        <Accordion
          style={{boxShadow: "none"}}
          className={styles.accordion_faq_main}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <p className={styles.accordion_faq_question}>Is there a discount for yearly service?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Yes, we offer discounts on up-front long-term commitments. You will also receive 10% off on yearly
              subscriptions with neoXL.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{boxShadow: "none"}}
          className={styles.accordion_faq_main}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <p className={styles.accordion_faq_question}>Can I download neoXL?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Yes, you can. neoXL is managed on the web but we give users the freedom to download our apps on android
              and ios.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{boxShadow: "none"}}
          className={styles.accordion_faq_main}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <p className={styles.accordion_faq_question}>How can I make the payment?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              You can make the payment through credit/debit card, UPI or netbanking.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          style={{boxShadow: "none"}}
          className={styles.accordion_faq_main}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <p className={styles.accordion_faq_question}>How do I cancel my subscription?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              neoXL is flexible. There are no annoying contracts and no commitments. You can easily cancel your account
              online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>
          </AccordionDetails>
        </Accordion>

      </div>
    </>
  );
}
