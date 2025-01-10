import React from "react";

import Home_slider from "./home/home_slider";
import ExpertSolutions from "./home/expert_solution";
import Marketing_area from "./home/marketing";
import Testimonial_home from "./home/testimonial";
import Counter from "./component/counter";



const Home = () => {
    return (
        <>
            <Home_slider />           
            <Counter/>
            <ExpertSolutions />
            <Marketing_area/>
            <Testimonial_home/>
        </>
    );
};

export default Home;