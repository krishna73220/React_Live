
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCategories() {
    return (
        <>
            <ul>
                <li>
                    <Link to='/blog'>
                        Influencer Marketing
                        <i classname="fas fa-angle-right"></i>
                    </Link>
                    <i classname="fas fa-angle-right"></i>
                </li>
                <i classname="fas fa-angle-right">
                    <li>
                        <Link to='/blog'>
                            ⁠Branding &amp; Advertisement
                            <i classname="fas fa-angle-right"></i>
                          </Link>
                        <i classname="fas fa-angle-right"></i>
                    </li>
                    <i classname="fas fa-angle-right">
                        <li>
                            <Link to='/blog'>
                                ⁠Social Media Marketing
                                <i classname="fas fa-angle-right"></i>
                              </Link>
                            <i classname="fas fa-angle-right"></i>
                        </li>
                        <i classname="fas fa-angle-right">
                            <li>
                                <Link to='/blog'>
                                    ⁠Performance Marketing
                                    <i classname="fas fa-angle-right"></i>
                                  </Link>
                                <i classname="fas fa-angle-right"></i>
                            </li>
                            <i classname="fas fa-angle-right">
                                <li>
                                    <Link to='/blog'>
                                        Search Engine Optimisation
                                        <i classname="fas fa-angle-right"></i>
                                      </Link>
                                    <i classname="fas fa-angle-right"></i>
                                </li>
                                <i classname="fas fa-angle-right">
                                    <li>
                                        <Link to='/blog'>
                                            Business Intelligence
                                            <i classname="fas fa-angle-right"></i>
                                          </Link>
                                        <i classname="fas fa-angle-right"></i>
                                    </li>
                                    <i classname="fas fa-angle-right">
                                        <li>
                                            <Link to='/blog'>
                                                Marketing &amp; Collaboration
                                                <i classname="fas fa-angle-right"></i>
                                              </Link>
                                            <i classname="fas fa-angle-right"></i>
                                        </li>
                                        <i classname="fas fa-angle-right">
                                            <li>
                                                <Link to='/blog'>
                                                    ⁠Algorithms &amp; Development
                                                    <i classname="fas fa-angle-right"></i>
                                                  </Link>
                                                <i classname="fas fa-angle-right"></i>
                                            </li>
                                            <i classname="fas fa-angle-right"></i>
                                        </i>
                                    </i>
                                </i>
                            </i>
                        </i>
                    </i>
                </i>
            </ul>
            <i classname="fas fa-angle-right">
                <i classname="fas fa-angle-right">
                    <i classname="fas fa-angle-right"></i>
                </i>
            </i>
        </>

    )
}