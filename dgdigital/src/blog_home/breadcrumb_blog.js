
import React from "react";
const BreadcrumbBlog = () => {
    return (
        <>
            <section className="breadcrumb-section blog-bredcum">
                <div className="container breadcrumb-container">
                    <div className="row">
                        <div className="breadcrumb-content">
                            <div className="col-md-12">
                                <div className="title-container text-center">
                                    <div
                                        className="breadcrumb"
                                        typeof="BreadcrumbList"
                                        vocab="https://schema.org/"
                                    >
                                        <span property="itemListElement" typeof="ListItem">
                                            <a
                                                property="item"
                                                typeof="WebPage"
                                                title="Go to DG."
                                              
                                                className="breadcrumb-home"
                                            >
                                                <span property="name">DG</span>
                                            </a>
                                            <meta property="position" content={1} />
                                        </span>
                                        &gt;
                                        <span property="itemListElement" typeof="ListItem">
                                            <span property="name" className="breadcrumb-current">
                                                Blog
                                            </span>
                                            <meta property="position" content={2} />
                                        </span>
                                    </div>
                                    <h1 className="title">Blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default BreadcrumbBlog;
