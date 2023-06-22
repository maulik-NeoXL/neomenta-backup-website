import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AccordionDetails} from "@mui/material";
import {Accordion, AccordionSummary} from "@mui/material";
import styles from "../../styles/components/home/HomeFAQ.module.css";

export default function HomeFAQ()
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
            <p className={styles.accordion_faq_question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
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
            <p className={styles.accordion_faq_question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
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
            <p className={styles.accordion_faq_question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
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
            <p className={styles.accordion_faq_question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
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
            <p className={styles.accordion_faq_question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.accordion_faq_answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </AccordionDetails>
        </Accordion>

      </div>
    </>
  );
}
