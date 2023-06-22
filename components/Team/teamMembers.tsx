import styles from "../../styles/components/team/TeamMembers.module.css";

export default function TeamMembers()
{
  return (
    <div className={styles.members_container}>
      <div className={styles.members_wrapper}>
        <p className={styles.members_title}> Meet the Champions</p>
        <div className={styles.members_card_wrapper}>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/hiren.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Hiren Soni</p>
              <p className={styles.desc}>
                Director
              </p>
            </div>
          </div>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/rahul.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Rahul Chandera</p>
              <p className={styles.desc}>Director
              </p></div>
          </div>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/kirtan.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Kirtan Patel</p>
              <p className={styles.desc}>
                System Architect
              </p>
            </div>
          </div>

          <div className={styles.members_card_2}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/vikas.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Vikas Kumar</p>
              <p className={styles.desc}>
                Lead Software Engineer
              </p>
            </div>
          </div>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/maulik.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Maulik Tanna</p>
              <p className={styles.desc}>Product Manager
              </p></div>
          </div>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/mayur.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Mayur Vishroliya</p>
              <p className={styles.desc}>Product Designer
              </p></div>
          </div>

          <div className={styles.members_card}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/bhavesh.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Bhavesh Soni</p>
              <p className={styles.desc}>
                Founder & CTO
              </p>
            </div>
          </div>

          <div className={styles.members_card_2}>
            <div className={styles.members_imageDiv}>
              <img
                className={styles.image}
                src={"/assets/images/team/mitesh.jpg"}
                alt={"team-hero"}
              />
            </div>
            <div className={styles.members_info}>
              <p className={styles.title}>Mitesh Majithia</p>
              <p className={styles.desc}>
                Co-founder & CEO
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
