import Footer from "@/components/layout/Footer";
import VideosHeader from "@/components/layout/sections/videos/VideosHeader";
import Youtube from "@/components/layout/sections/videos/Youtube";
import Navigation from "@/components/layout/Navigation";
import Head from "next/head";

const Videos = () => {
  return (
    <>
      <Head>
        <title>Pixel40 - Videos Tutoriales</title>
      </Head>
      <Navigation />
      <main className="whitebg">
        <VideosHeader />
        <Youtube />
      </main>
      <Footer />
    </>
  );
};

export default Videos;
