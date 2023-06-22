import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {StepLabel} from "@mui/material";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import styles from "../../styles/components/about/AboutOurJourney.module.css";
import AboutOurJourneySlider from "./aboutOurJourneySlider";

export default function AboutOurJourney()
{

  const steps = [
    {
      label: "2018",
      title: "Birth of Automation",
      desc: "The founder discovered a new market for automation.",
      image:"/assets/images/about/2018.png"
    },
    {
      label: "2019",
      title: "Market Research",
      desc: "After meeting with 100+ SME's, the painpoint was validated and the solution was born.",
      image:"/assets/images/about/2019.png"
    },
    {
      label: "2021",
      title: "Incorporation",
      desc: "Inocrporated Neomenta Private Limited in September 2021.",
      image:"/assets/images/about/2021.png"
    },
    {
      label: "2022",
      title: "Team building",
      desc: "First hiring of neoXL were taken with the team strength being 11 at present.",
      image:"/assets/images/about/2022.png"
    }
  ];

  const [currentTimeline, setCurrentTimeline] = useState(0);

  const handler: any = function(index: any)
  {
    console.log("  on click ")
    if(currentTimeline === index)
    {
      return;
    }
    setCurrentTimeline(index);
  };

  const next = () =>
  {
    if(currentTimeline >= steps.length - 1)
    {
      return;
    }
    setCurrentTimeline(prev => prev + 1);
  };

  const previous = () =>
  {
    if(currentTimeline <= 0)
    {
      return;
    }
    setCurrentTimeline(prev => prev - 1);
  };

  return (
    <>
      <div className={styles.journey_main}>
        <Container className={"Container"}>
          <p className={styles.journey_title}>Our Journey</p>
          <div className={styles.journey_timeline_section}>
            <Stepper nonLinear activeStep={currentTimeline} alternativeLabel={true}>
              {steps.map((step, index) => (
                <Step key={step.label} onClick={() => handler(index)}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <AboutOurJourneySlider
            step={steps[currentTimeline]}
            currentTimeline={currentTimeline + 1}
          />

          <div className={styles.journey_timeline_slider_arrow_section}>
            <div className={styles.journey_timeline_arrow_main}>
              <button
                onClick={previous}
                className={styles.journey_timeline_btn}
              ><KeyboardArrowLeftIcon sx={{fontSize: "18px"}} /></button>
              <button
                onClick={next}
                className={styles.journey_timeline_btn}
              ><KeyboardArrowRightIcon sx={{fontSize: "18px"}} /></button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
