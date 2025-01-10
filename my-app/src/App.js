import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';
import Home from './home';
import Performencemarketing from './performanceMarketing';
import DigitalMarketing from './digitalmarketing';
import WebAppDevlopment from './webappdevelopment';
import SoftwarEerpCrm from './softwareerpcrm';
import PrServices from './prservices';
import AboutUs from './about-us';
import OurTeam from './our-team';
import ContectUs from './contact-us';
import Careers from './careers';
import Blog from './blog';
import SearchEngineOptimization from "./search-engine-optimization";
import BlogCategories from "./component/blog_categories";
import BlogTag from "./component/BlogTag";
import RemoveHash from "./RemoveHash";

// **************myApp******************
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import Best_meme_marketing_agency_mumbai from "./blog/best-meme-marketing-agency-mumbai";
import Ditchers_blueprint_effective_social_media from "./blog/ditchers-blueprint-effective-social-media";
import Nurturing_growth_digital_marketing_agency_thrive_conflict from "./blog/nurturing-growth-digital-marketing-agency-thrive-conflict";
import Unlocking_success_best_frequency_marketing_email from "./blog/unlocking-success-best-frequency-marketing-email";
import Six_conversion_champions_supercharge_success_proven_strategies from "./blog/six-conversion-champions-supercharge-success-proven-strategie";
import How_content_marketing_is_changing_perspective_of_digital_marketing from "./blog/how-content-marketing-is-changing-perspective-of-digital-marketing";
import Advertising_and_marketing_two_indispensable from "./blog/advertising-and-marketing-two-indispensable-part-of-organization";
import Generative_ai_trends_and_tools from "./blog/generative-ai-trends-and-tools";
import How_to_choose_the_best_digital_marketing_agency_in_koramangala from "./blog/how-to-choose-the-best-digital-marketing-agency-in-koramangala";
import Digital_marketing_koramangala_startups from "./blog/digital-marketing-koramangala-startups";
import Digital_marketing_services_koramangala from "./blog/digital-marketing-services-koramangala";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    
    <HashRouter>
      <RemoveHash /> {/* Include the RemoveHash component */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performanceMarketing" element={<Performencemarketing />} />
        <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/webappdevelopment" element={<WebAppDevlopment />} />
        <Route path="/softwareerpcrm" element={<SoftwarEerpCrm />} />
        <Route path="/prservices" element={<PrServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContectUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/component/blog_categories" element={<BlogCategories />} />
        <Route path="/component/BlogTag" element={<BlogTag />} />

        {/* **************************BlogDetailPage***************************** */}
        <Route path="/blog/best-meme-marketing-agency-mumbai" element={<Best_meme_marketing_agency_mumbai />} />
        <Route path="/blog/ditchers-blueprint-effective-social-media" element={<Ditchers_blueprint_effective_social_media />} />
        <Route path="/blog/nurturing-growth-digital-marketing-agency-thrive-conflict" element={<Nurturing_growth_digital_marketing_agency_thrive_conflict />} />
        <Route path="/blog/unlocking-success-best-frequency-marketing-email" element={<Unlocking_success_best_frequency_marketing_email />} />
        <Route path="/blog/six-conversion-champions-supercharge-success-proven-strategie" element={<Six_conversion_champions_supercharge_success_proven_strategies />} />
        <Route path="/blog/how-content-marketing-is-changing-perspective-of-digital-marketing" element={<How_content_marketing_is_changing_perspective_of_digital_marketing />} />
        <Route path="/blog/advertising-and-marketing-two-indispensable-part-of-organization" element={<Advertising_and_marketing_two_indispensable />} />
        <Route path="/blog/generative-ai-trends-and-tools" element={<Generative_ai_trends_and_tools />} />
        <Route path="/blog/how-to-choose-the-best-digital-marketing-agency-in-koramangala" element={<How_to_choose_the_best_digital_marketing_agency_in_koramangala />} />
        <Route path="/blog/digital-marketing-koramangala-startups" element={<Digital_marketing_koramangala_startups />} />
        <Route path="/blog/digital-marketing-services-koramangala" element={<Digital_marketing_services_koramangala />} />
      </Routes>
      <Footer />
      <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://react.dgdigital.in/' }} />
    </View>
    </HashRouter>
  );
}

export default App;
