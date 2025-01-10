 
import React from "react";
import BreadcrumbAboutUs from "./aboutUs/breadcrumb_about_us";
import TestimonialAbout from "./aboutUs/testimonial_about_us";
import AboutTeam from "./aboutUs/about_teams";
import PartnersAreaAboutUs from "./aboutUs/partners_area_aboutUs";
import JionWithDg from "./component/join_with_dg";
const AboutUs= () => {
    return (
        <>
            <BreadcrumbAboutUs/>
            <TestimonialAbout/>
            <AboutTeam/>
            <PartnersAreaAboutUs/>
            <JionWithDg/>
        </>
    );
};
export default AboutUs;
