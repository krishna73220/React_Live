 
import React from "react";
import BreadErmCrm from "./softwareerpcrm/breadcrumb_erm_crm";
import TestimonialErmCrm from "./softwareerpcrm/testomonial_erm_crm";
import MarketingTeam from "./component/marketing_teams";
import PerformanceErmCrm from "./softwareerpcrm/performance_wrapper_erm_crm";
import JionWithDg from "./component/join_with_dg";
const  SoftwarEerpCrm =() => {
    return (
        <>
            <BreadErmCrm/>
            <TestimonialErmCrm/>
            <MarketingTeam/>
            <PerformanceErmCrm/>
            <JionWithDg/>
        </>
    );
};
export default SoftwarEerpCrm;
