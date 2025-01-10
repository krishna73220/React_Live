
import React from "react";
import OurCline from "../component/our_clint";
const PartnersAreaAboutUs = () => {
    return (
        <>
            <section className="partners-area">
                <div className="container">
                    <div className="section-title pt-md-5 pb-2">
                        <h2>
                            Hundreds of partners around <br />
                            the world
                        </h2>
                        <p>
                            Our clients as Collaborators. We build relationship to understand their
                            business, goals, and challenges, for a long-term and mutually beneficial
                            partnership.
                        </p>
                    </div>
                    <div className="row">
                       <OurCline/>
                    </div>
                </div>
            </section>

        </>
    );
};
export default PartnersAreaAboutUs;
