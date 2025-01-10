 
import React from "react";
import BreadcrumbPrService from "./prservices/breadcrumb_pr_service";
import TestimonialPrservice from "./prservices/testimonial_pr_service";
import MarketingTeam from "./component/marketing_teams";
import PerformancePrService from "./prservices/performance_wrapper_Pr_service";
import JionWithDg from "./component/join_with_dg";

const PrServices = () => {
    return (
        <>
            <BreadcrumbPrService/>
            <TestimonialPrservice/>
            <MarketingTeam/>
            <PerformancePrService/>
            <JionWithDg/>
        </>
    );
};
export default PrServices;
