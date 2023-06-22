import fsPromises from "fs/promises";
import Head from "next/head";
import {useRouter} from "next/router";
import path from "path";
import Container from "react-bootstrap/Container";
import BlogSection from "../components/Blog/blogSection";
import Footer from "../components/Common/footer";
import GetStarted from "../components/Common/getStarted";
import Header from "../components/Common/header";
import SectionGap from "../components/Common/sectionGap";
import HomeFeatures from "../components/Home/homeFeatures";
import HomeHeroSection from "../components/Home/homeHeroSection";
import HomeHowItWorks from "../components/Home/homeHowItWorks";
import HomeInfoSplit from "../components/Home/homeInfoSplit";
import HomeNeedAutomation from "../components/Home/homeNeedAutomation";
// import HomeHeroSection from "../components/Home/homeHeroSection";
import styles from "../styles/Pages/Home.module.css";

export async function getStaticProps(context: any)
{
  const filePath = path.join(process.cwd(), "blogdata/blog.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {props: {jsonString: objectData}};
}

export default function Home(props: {jsonString: any})
{
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>neoXL</title>
        <meta name="robots" content="noindex" />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />

      </Head>
      <Header />
      <HomeHeroSection />
      <Container className={"Container"}>
        <SectionGap />
        <HomeInfoSplit />
        <SectionGap />
        <HomeNeedAutomation />
        <SectionGap />
        <HomeFeatures />
        <SectionGap />
        <HomeHowItWorks />
        {/*<SectionGap />*/}
        <BlogSection jsonString={props.jsonString} />
        <SectionGap />
        <GetStarted title={"Ready to get started?"} />
        <SectionGap />
      </Container>
      <Footer />
    </div>
  );
}
