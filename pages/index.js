// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Hero from '../components/web/Hero';
import Faqs from '../components/web/Faqs';
import FeatureSection1 from '../components/web/FeatureSection1';
import FeatureSection2 from '../components/web/FeatureSection2';
import Help from '../components/web/Help';
import Clients from '../components/web/Clients';
import FeatureSection3 from '../components/web/FeatureSection3';
import Link from 'next/link';
import Head from 'next/head';




export default function Home() {
  return (
    <>
    <Head>
        <title>AI-Driven Email Personalization Platform - Boost Engagement & Sales</title>
        <meta name="description" content="Experience the future of email marketing with our AI-powered personalization platform. Elevate your outreach with tailored content, increase engagement rates, and drive sales effectively. Perfect for businesses seeking to harness the power of AI for smarter email strategies." />
      </Head>
    <div>
    
    
 

      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection1 />
   
      <FeatureSection2 />
      <FeatureSection3 />


<Faqs />
<Help />
      <Footer />
    </div>
    </>
  );
}
