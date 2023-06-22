import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "../../styles/components/contact/OfficeLocation.module.css";

export default function OfficeLocation()
{
  return (
    <>
      <div className={styles.office_container}>
        <h1 className={styles.office_heading}> Office Location</h1>
        <div className={styles.office_wrapper}>
          <div className={styles.office_card}>
            <div className={styles.card_icon}>
              <div className={styles.location_icon_image_wrapper}>
                <img
                  className={styles.location_image}
                  src={"/assets/images/contact/location-ahmedabad.svg"}
                  alt={"location_image"}
                />
              </div>
            </div>
            <p className={styles.card_title}> Pune, India</p>
            <div className={styles.card_location_list}>
              <div className={styles.card_location_icon_wrapper}>
                <div className={styles.card_location_icon}>
                  <span className={styles.card_location_icon_span}> <LocationOnIcon />   </span>
                </div>
              </div>
              <div className={styles.card_location_text_wrapper}>
                <p className={styles.card_location_text}>
                  6th Floor, The Kode, Baner - Pashan Link Rd, Baner, Pune, Maharashtra 411021
                </p>
              </div>

            </div>

            <div className={styles.contact_list_wrapper}>
              <div className={styles.contact_email_wrapper}>
                <div className={styles.contact_icon_wrapper}>
                  <div className={styles.contact_icon}><span> <CallIcon /></span></div>
                  <p className={styles.contact_text}> +91 98980 46872
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.office_card_2}>
            <div className={styles.card_icon}>
              <div className={styles.location_icon_image_wrapper}>
                <img
                  className={styles.location_image}
                  src={"/assets/images/contact/location-pune.svg"}
                  alt={"location_image"}
                />
              </div>
            </div>
            <div className={styles.card_title}> Ahmedabad, India</div>
            <div className={styles.card_location_list}>
              <div className={styles.card_location_icon_wrapper}>
                <div className={styles.card_location_icon}>
                  <span className={styles.card_location_icon_span}> <LocationOnIcon />   </span>
                </div>
              </div>
              <div className={styles.card_location_text_wrapper}>
                <div className={styles.card_location_text}>
                  2nd Floor, RE11 Ahmedabad Near Vikramnagar, Iscon, Ambli Rd, Ahmedabad, Gujarat 380058
                </div>
              </div>

            </div>

            <div className={styles.contact_list_wrapper}>
              <div className={styles.contact_email_wrapper}>
                <div className={styles.contact_icon_wrapper}>
                  <div className={styles.contact_icon}><span> <CallIcon /></span></div>
                  <div className={styles.contact_text}> +91 99044 47225
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
