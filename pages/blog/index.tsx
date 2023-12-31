import fsPromises from "fs/promises";
import Head from "next/head";
import path from "path";
import Container from "react-bootstrap/Container";
import BlogHero from "../../components/Blog/blogHero";
import BlogSection from "../../components/Blog/blogSection";
import BlogSubscription from "../../components/BlogDetail/blogSubscription";
import Footer from "../../components/Common/footer";
import Header from "../../components/Common/header";
import SectionGap from "../../components/Common/sectionGap";

export async function getStaticProps(context: any)
{

  const filePath = path.join(process.cwd(), "blogdata/blog.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {props: {jsonString: objectData}};
}

export default function Index(props: {jsonString: any})
{
  return (
    <div><Head>
      <title>Blog | neoXL</title>
      <meta
        name="description"
        content="Generated by create next app"
      />
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
      <Container className={"Container"}>
        {/*<BlogHero />*/}
        {/*<SectionGap />*/}
        <BlogSection jsonString={props.jsonString} />
        <SectionGap />
        <BlogSubscription />
        <SectionGap />
      </Container>
      <Footer />

    </div>
  );
}



