import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "../components/Common/footer";
import GetStarted from "../components/Common/getStarted";
import Header from "../components/Common/header";
import SectionGap from "../components/Common/sectionGap";
import PricingFAQ from "../components/Pricing/pricingFAQ";
import PricingHero from "../components/Pricing/pricingHero";
import PricingTable from "../components/Pricing/pricingTable";

export default function Pricing()
{
  return (
    <div>
      <Head>
        <title>Pricing | neoXL </title>
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
      <Container className={"Container"}>
        {/*<PricingHero />*/}
        <SectionGap />
        <PricingHero />
        <SectionGap />
        <PricingTable />
        <SectionGap />
        <PricingFAQ />
        <SectionGap />
        <GetStarted title={"Ready to get started?"} />
      </Container>
      <SectionGap />
      <Footer />
    </div>

  );
}
