import React from "react";

const Footer=()=>{
    return(
        <div>
            <>
  <footer className="footer-wrapper bg-dark">
    <div className="footer-widgets padding">
      <div className="container">
        <div className="col-md-4 col-xs-6 sm-padding">
          <div className="single-widget">
            <a  className="footer-logo">
              <img
                src="img/logo/Headlines-Nation-news.png"
                style={{ maxWidth: 162 }}
                className="img-responsive"
                alt="headlinesnation"
              />
            </a>
            <p className="text-light no-margin">
              News24 is a Clean Responsive HTML News-paper, Magazine, News and
              Blog template. with good feature that allow you to completely
              customize your website to your needs.
            </p>
          </div>
        </div>
        {/* widget 1 */}
        <div className="col-md-4 col-xs-6 sm-padding">
          <div className="single-widget">
            <h3>Most Viwed</h3>
            <div className="footer-posts">
              <div className="footer-post">
                <span className="date">Oct 28, 2024</span>
                <h4>
                  <a >
                    Success is not a good teacher failure makes you humble
                  </a>
                </h4>
              </div>
              <div className="footer-post">
                <span className="date">Oct 28, 2024</span>
                <h4>
                  <a >
                    Success is not a good teacher failure makes you humble
                  </a>
                </h4>
              </div>
            </div>
            {/* /.footer-posts */}
          </div>
        </div>
        {/* widget 2 */}
        <div className="col-md-4 col-xs-12 sm-padding">
          <div className="single-widget">
            <h3>Most Viwed</h3>
            <ul className="tag-list">
              <li>
                <a >Worlds</a>
              </li>
              <li>
                <a >Entertainment</a>
              </li>
              <li>
                <a >Health</a>
              </li>
              <li>
                <a >Football</a>
              </li>
              <li>
                <a >News</a>
              </li>
              <li>
                <a >Fasion</a>
              </li>
              <li>
                <a >Health</a>
              </li>
              <li>
                <a >Western Foods</a>
              </li>
              <li>
                <a >Western Foods</a>
              </li>
              <li>
                <a >Race</a>
              </li>
              <li>
                <a >Football</a>
              </li>
              <li>
                <a >Foods</a>
              </li>
            </ul>
          </div>
        </div>
        {/* widget 3 */}
      </div>
    </div>
    {/* /.footer-widgets */}
    <div className="footer-copyright ptb-40">
      <div className="container">
        <div className="col-xs-6 xs-padding xs-text-center">
          <p className="no-margin fz-13 text-light">
            © Copyright Headlines Nation 2024, All Rights Reserved
          </p>
        </div>
        <div className="col-xs-6 xs-padding">
          <ul className="footer-social text-right xs-text-center">
            <li>
              <a >
                <i className="ti-facebook" />
              </a>
            </li>
            <li>
              <a >
                <i className="ti-twitter" />
              </a>
            </li>
            <li>
              <a >
                <i className="ti-google" />
              </a>
            </li>
            <li>
              <a >
                <i className="ti-pinterest" />
              </a>
            </li>
            <li>
              <a >
                <i className="ti-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* /.footer-wrapper */}
</>


        </div>
    )

}
export default Footer;