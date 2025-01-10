
import React from "react";

import OurCline from "../component/our_clint";
const PerformenceWraperInWebApp = () => {
    return (
        <>
            <section className="performance-wrapper">
                <div className="container">
                    <div className="section-title pt-md-5 pb-2">
                        <h2>Why are we different?</h2>
                        <p>
                            We create user-friendly interfaces, secure payment gateways and seamless
                            navigation
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <div className="dg-web-apps dg-diffrents" />
                        </div>
                        <OurCline/>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PerformenceWraperInWebApp;
