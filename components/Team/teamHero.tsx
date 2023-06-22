import styles from "../../styles/components/team/TeamHero.module.css";

export default function TeamHero()
{
  return (
    <>
      <div className={styles.team_container}>
        <div className={styles.team_wrapper}>
          <div className={styles.team_content}>
            <p className={styles.team_title}>Not a Team, a family of CHAMPIONS.</p>
            <div className={styles.team_desc_wrapper}>
              <p className={styles.team_desc_1}>
                Think of us as prime Real madrid, prime New York Yankees or prime Chicago Bulls. We believe that we are
                the elites and deliver what our coach (customer) needs. We are here to win championships, set records
                and rewrite history.
              </p>

              <p className={styles.team_desc_2}>
                We are ready to die for each other on and off the field. Respect and love is mutual among us. We are
                ready to play in the big leagues and prove that we can beat the big boys of our industry. If you have
                what it takes, join our elite team.
              </p>
            </div>
          </div>

          <div className={styles.team_img_wrapper}>
            <div className={styles.team_img}>
              <img
                className={styles.image}
                src={"/assets/images/team/team_hero.jpg"}
                alt={"team-hero"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
