import styles from "../../styles/components/community/CommunityHero.module.css";

export default function CommunityHero()
{
  return (
    <>
      <div className={styles.community_container}>
        <div className={styles.community_wrapper}>
          <div className={styles.community_title}> Join our global community, one big dream!</div>
          <div className={styles.community_desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididuk...
          </div>
          <div className={styles.community_btn}>
            <button> Join our community</button>
          </div>

          <div className={styles.community_imgDiv}>
            <img
              className={styles.image}
              src={"/assets/images/community/career_hero.png"}
              alt={"community-hero"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
