import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import styles from "styles/components/common/footer.module.css";

export default function Footer()
{
  return (
    <>
      <div className={styles.footer_main}>
        <Container className={"Container"}>
          <div className={styles.footer_up}>
            <ul className={styles.footer_list}>
              <li><Link className={styles.links} href={"/"}> Home </Link></li>
              <li><Link className={styles.links} href={"/about"}> About </Link></li>
              <li><Link className={styles.links} href={"/blog"}> Blogs </Link></li>
              <li><Link className={styles.links} href={"/pricing"}> Pricing </Link></li>
              <li><Link className={styles.links} href={"/team"}> Team </Link></li>
              <li><Link className={styles.links} href={"/career"}> Career </Link></li>
              <li><Link className={styles.links} href={"/contact"}> Contact </Link></li>
            </ul>
          </div>
          <hr />
          <div className={styles.footer_post_hr}>
            <div className={styles.footer_inside_sub}>
              <p className={styles.footer_copyright_text}> Copyright © 2022 Neomenta Inc. All rights reserved. </p>
            </div>

            <div className={styles.social_links}>
              <div className={styles.facebook_icon}><a href="https://www.linkedin.com/company/neoxlpr/" target="_blank">
                <LinkedInIcon /> </a></div>
              <div className={styles.facebook_icon}><a href="https://www.facebook.com/profile.php?id=100088269940393"
                target="_blank"><FacebookIcon /> </a></div>
              <div className={styles.facebook_icon}><a href="#" target="_blank"> <InstagramIcon /></a></div>
              <div className={styles.facebook_icon}><a href="https://twitter.com/neoXLpr" target="_blank">
                <TwitterIcon /> </a></div>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}
