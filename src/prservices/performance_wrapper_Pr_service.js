
import React from "react";
import OurCline from "../component/our_clint";
const PerformancePrService = () => {
    return (
        <>
            <section className="performance-wrapper">
                <div className="container">
                    <div className="section-title pt-md-5 pb-2">
                        <h2>Why are we different?</h2>
                        <p>
                            We understand the power of building meaningful relationships with
                            journalists and influencers to give your business a competitive edge.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <div className="dg-pr-services dg-diffrents" />
                        </div>
                        <OurCline/>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PerformancePrService;
