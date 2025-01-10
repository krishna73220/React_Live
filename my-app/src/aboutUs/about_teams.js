
import React from "react";
import { Link } from 'react-router-dom';
const AboutTeam = () => {
  return (
    <>
      <section className="about-teams">
        <div className="container">
          <div className="section-title pt-md-5 pb-5">
            <h2>Meet the team</h2>
            <p>
              A team that adapts swiftly to industry changes, emerging trends, and
              client feedback, ensuring campaigns stay ahead of the curve.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 d-sm-none d-md-block d-lg-block d-none" />
            <div className="col-lg-4 col-md-4">
              <div className="dg-team text-center">
                <img
                  src="digital-marketing-company/team/amit-kumar-founder.jpg"
                  className="img-fluid"
                  alt="Amit Kumar"
                  title="Founder Of DG digital"
                />
                <div className="name-degination pt-4">
                  <h5>Amit Kumar</h5>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-sm-none d-md-block d-lg-block d-none" />
            <div className="col-lg-4 col-md-4">
              <div className="dg-team text-center">
                <img
                  src="digital-marketing-company/team/monika-excutive-director.png"
                  className="img-fluid"
                  alt="Monika Priya Jha"
                  title="Executive Director"
                />
                <div className="name-degination pt-4">
                  <h5>Monika Priya Jha</h5>
                  <p>Executive Director</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dg-team text-center">
                <img
                  src="digital-marketing-company/team/hr.png"
                  className="img-fluid"
                  alt="Workplace Architect"
                />
                <div className="name-degination pt-4">
                  <h5>Shambhavi Anand Sharma</h5>
                  <p>Workplace Architect</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dg-team text-center">
                <img
                  src="digital-marketing-company/team/tanu-verma.png"
                  className="img-fluid"
                  alt="Curren-Seer"
                />
                <div className="name-degination pt-4">
                  <h5>Tanu Verma</h5>
                  <p>Curren-Seer</p>
                </div>
              </div>
            </div>
            <div className="button-wrapper-digital text-center pt-md-4 mt-5 pb-md-5">
              <Link className="button-digital button-xl" to='/our-team'>
                <span className="button-content">
                  <span className="button-text">View all team</span>
                  <span className="button-icon">
                    <i aria-hidden="true" className="fas fa-long-arrow-alt-right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default AboutTeam;
