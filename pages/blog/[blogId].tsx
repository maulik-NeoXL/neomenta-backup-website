import fsPromises from "fs/promises";
import Head from "next/head";
import {useRouter} from "next/router";
import path from "path";
import Container from "react-bootstrap/Container";
import BlogCore from "../../components/BlogDetail/blogCore";
import BlogFooter from "../../components/BlogDetail/blogFooter";
import BlogParagraph from "../../components/BlogDetail/blogParagraph";
import BlogSubscription from "../../components/BlogDetail/blogSubscription";
import Footer from "../../components/Common/footer";
import Header from "../../components/Common/header";
import SectionGap from "../../components/Common/sectionGap";

export async function getStaticProps(context: any)
{

  const filePath = path.join(process.cwd(), "blogdata/blog.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const blogId = context.params.blogId
  return {props: {jsonString:objectData[blogId] }};
  


}

export async function getStaticPaths()
{
  const filePath = path.join(process.cwd(), "blogdata/blog.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = Object.keys(JSON.parse(jsonData)) ;
  const paths = objectData.map((blog:any) => ({
    params: { blogId: blog },
  }))
  return {
    paths,
    fallback: false
  };
}

export default function CommentPage(props: {
  jsonString: any
})
{

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Blog | neoXL</title>
        <meta name="robots" content= "noindex" />
        <link
          rel="icon"
          href="/neoxl_website/public/favicon.ico"
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
        <BlogCore blogData={props.jsonString} />
        <BlogParagraph blogParagraph={props.jsonString} />
        <BlogFooter blogFooter={props.jsonString} />
        <SectionGap />
        <BlogSubscription />
        <SectionGap />
      </Container>
      <Footer />
    </div>
  );
}
