
import React from "react";
import { Link } from "react-router-dom";
const JionWithDg = () => {
    return (
        <>
            <section className="join_with_dg">
                <div className="container">
                    <div className="row cadder-area">
                        <div className="col-md-6">
                            <div className="join-title">
                                <h2>Want to join? </h2>
                                <p>
                                    Sign Up to the team who are devoted towards Growth and make Growth
                                    devoted towards
                                    <strong>YOU!</strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="join-btn-area text-center">
                                <Link
                                    to='/contact-us'
                                    className="btn btn-dark dg_btns_main btn-md"
                                >                                    
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default JionWithDg;
