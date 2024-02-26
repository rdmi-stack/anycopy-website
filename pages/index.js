// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Hero from '../components/web/Hero';
import Testimonials from '../components/web/testimonials';       // Footer component
import BlogList from '../components/web/home-blog-list';       // Footer component
import Pricing from '../components/pricing';
import HomeVideo from '../components/homevideo';
import Video from '../components/web/video';
import Feature4 from '../components/feature4';
import Faqs from '../components/web/Faqs';
import FeatureSection1 from '../components/web/FeatureSection1';
import Notification from '../components/web/notification';
import Help from '../components/web/Help';
import FeatureSection3 from '../components/web/FeatureSection3';
import Link from 'next/link';
import Head from 'next/head';




export default function Home() {
  return (
    <>
    <Head>
        <title>AnyCopy: AI Copy Assistant Powered by Generative AI </title>
        <meta name="description" content="Experience a 10x boost in content creation efficiency and quality. Our Generative AI platform revolutionizes how you produce content, delivering engaging, precise copy at an unprecedented scale." />
      </Head>
    <div>
    
    
 
<Notification />
      <Navbar />
      <Hero />
      <FeatureSection1 />


    <Feature4 />
    
   
      <Pricing />
      <Testimonials />
<BlogList />

<Faqs />
<Help />
      <Footer />
    </div>
    </>
  );
}
