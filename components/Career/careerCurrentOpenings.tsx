import styles from "../../styles/components/career/CareerCurrentOpenings.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CareerCurrentOpenings() {
return (
<>
<div className={styles.job_container}>
    <div className={styles.job_wrapper}>
        <div className={styles.job_title}> Current Openings</div>
        <div className={styles.job_cards_container}>
            <div className={styles.job_cards_wrapper}>
                <div className={styles.job_cards_dual_wrapper}>
                    <div className={styles.job_cards}>
                        <div className={styles.job_cards_content}>
                            <div className={styles.job_cards_title}>Sr. Java developer</div>
                            <div className={styles.job_cards_desc}>Preferred qualifications: 7-10 years of relevant work experience in business application development/implementation with strong understanding of Microservice Architecture.</div>
                            <div className={styles.job_cards_apply_wrapper}>
                                <div className={styles.job_cards_location_wrapper}>
                                    <div className={styles.job_cards_location}> Location: Pune, India</div>
                                </div>
                                <div className={styles.job_cards_job_content_wrapper}>
                                    <div className={styles.job_cards_apply}><a> <ArrowForwardIcon color={"primary"}/> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.job_cards_2}>
                        <div className={styles.job_cards_content}>
                            <div className={styles.job_cards_title}>Java developer</div>
                            <div className={styles.job_cards_desc}>Preferred qualifications: 1-2 years of relevant work experience in business application development/implementation with strong understanding of Microservice Architecture.</div>
                            <div className={styles.job_cards_apply_wrapper}>
                                <div className={styles.job_cards_location_wrapper}>
                                    <div className={styles.job_cards_location}> Location: Ahmedabad, India</div>
                                </div>
                                <div className={styles.job_cards_job_content_wrapper}>
                                    <div className={styles.job_cards_apply}><a> <ArrowForwardIcon color={"primary"}/> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.job_cards_dual_wrapper}>
                    <div className={styles.job_cards}>
                        <div className={styles.job_cards_content}>
                            <div className={styles.job_cards_title}>React developer</div>
                            <div className={styles.job_cards_desc}>We are hiring multiple Mobile Engineers with experience using React .The ideal candidate will have a deep understanding of React.</div>
                            <div className={styles.job_cards_apply_wrapper}>
                                <div className={styles.job_cards_location_wrapper}>
                                    <div className={styles.job_cards_location}> Location: Pune, India</div>
                                </div>
                                <div className={styles.job_cards_job_content_wrapper}>
                                    <div className={styles.job_cards_apply}><a> <ArrowForwardIcon color={"primary"}/> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.job_cards_2}>
                        <div className={styles.job_cards_content}>
                            <div className={styles.job_cards_title}>Lead Database Administrator</div>
                            <div className={styles.job_cards_desc}>Experience: 5-7 yearsJob descriptionWe are a fast-growing digital, cloud, and mobility services provider with a principal market being North Americas. We are looking for talented database/SQL, noSQL expert.</div>
                            <div className={styles.job_cards_apply_wrapper}>
                                <div className={styles.job_cards_location_wrapper}>
                                    <div className={styles.job_cards_location}> Location: Pune, India</div>
                                </div>
                                <div className={styles.job_cards_job_content_wrapper}>
                                    <div className={styles.job_cards_apply}><a> <ArrowForwardIcon color={"primary"}/> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
