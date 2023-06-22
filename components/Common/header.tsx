import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/components/common/Header.module.css";

export default function Header()
{

  const router = useRouter();

  const handleClick = (e: any) =>
  {
    e.preventDefault();
    router.push("/");
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() =>
  {
    window.addEventListener("scroll", () =>
    {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
      <Navbar
        className={scroll === false ? `${styles.header_main}` : `${styles.header_main_scroll}`}
        expand="md"
      >
        <Container className={"Container"}>
          <Navbar.Brand href="#home">
            <div className={styles.header_logo_wrapper}>
              <img
                className={styles.header_logo_image}
                src={"/assets/images/common/header/header_logo_image.svg"}
                alt={"header_logo_image"}
                onClick={handleClick}
              />
            </div>
            <div className="hamburger is-active" id="hamburger-1">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.link_wrapper} ms-auto`}>
              <li className={router.pathname == "/about" ? `${styles.header_link_active_text}` :
                `${styles.header_link_unactive_text}`}>
                <Link href="/about" className={`${styles.header_link_text}`}> About </Link>
              </li>
              <li className={router.pathname == "/blog" ? `${styles.header_link_active_text}` :
                `${styles.header_link_unactive_text}`}>
                <Link href="/blog" className={`${styles.header_link_text}`}> Blogs </Link>
              </li>
              <li className={router.pathname == "/pricing" ? `${styles.header_link_active_text}` :
                `${styles.header_link_unactive_text}`}>
                <Link href="/pricing" className={`${styles.header_link_text}`}> Pricing </Link>
              </li>
              <li className={router.pathname == "/team" ? `${styles.header_link_active_text}` :
                `${styles.header_link_unactive_text}`}>
                <Link href="/team" className={`${styles.header_link_text}`}> Team </Link>
              </li>
              <Link href="https://web.orgbeat.com/signIn" target="_blank">
                <button className={styles.header_create_account_button}>Sign In</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
