// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Hero from '../components/web/Hero';
import Faqs from '../components/web/Faqs';
import FeatureSection1 from '../components/web/FeatureSection1';

import Help from '../components/web/Help';
import Clients from '../components/web/Clients';
import FeatureSection3 from '../components/web/FeatureSection3';
import Link from 'next/link';
import Head from 'next/head';




export default function Home() {
  return (
    <>
    <Head>
        <title>AnyCopy.ai: 10x Your Content Impact with Generative AI </title>
        <meta name="description" content="Experience a 10x boost in Copy creation efficiency and quality. Our Generative AI platform revolutionizes how you produce content, delivering engaging, precise copy at an unprecedented scale." />
      </Head>
    <div>
    
    
 

      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection1 />
   
      <FeatureSection3 />


<Faqs />
<Help />
      <Footer />
    </div>
    </>
  );
}
