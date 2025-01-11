
import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './TestCarousel.css'; // Import custom CSS
import { Link } from 'react-router-dom';

const Politics=()=>{
    return(
        <>
        <section className="main-wrapper mb-40">
          <div className="container">
            <div className="featured-wrap">
              <div className="col-md-4 col-xs-6">
                <div
                  className="featured-post"
                  style={{ backgroundImage: "url(img/Politics/ashok-chodhary.jpeg)" }}
                >
                  <div className="post-info">
                    <a  className="cat-name tt-u">
                      Politics
                    </a>
                    <h3 className="fw-6 fz-16">
                    <Link to="/tej-yaadav-ne-apane-maata-pita-ke-kaaryon" className="text-white"> तेजस्वी यादव ने अपने माता-पिता के क्रियाकलापों के लिए कभी अफसोस
                    जाहिर नहीं किया: अशोक चैधरी</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div
                  className="featured-post"
                  style={{ backgroundImage: "url(img/श्री-उमेश-सिंह-कुशवाहा.jpeg)" }}
                >
                  <div className="post-info">
                    <a  className="cat-name tt-u">
                      Politics
                    </a>
                    <h3 className="fw-6 fz-16">
                    <Link to="/sata-me-rahte-huye-tranfer" className="text-white"> सत्ता में रहते हुए ट्रांसफर-पोस्टिंग और सरकारी नौकरी के नाम पर
                    लालू परिवार ने अकूत संपत्ति बनाई: उमेश सिंह कुशवाहा</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="top-wrap mb-10">
                  <div
                    className="featured-post"
                    style={{
                      backgroundImage: "url(img/Politics/ashok-chodhary.jpeg)"
                    }}
                  >
                    <div className="post-info">
                      <a  className="cat-name tt-u">
                        Politics
                      </a>
                      <h3 className="fw-6 fz-16">
                      <Link to="/tej-yaadav-ne-apane-maata-pita-ke-kaaryon" className="text-white"> तेजस्वी यादव ने अपने माता-पिता के क्रियाकलापों के लिए कभी अफसोस
                      जाहिर नहीं किया: अशोक चैधरी</Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bottom-wrap">
                  <div
                    className="featured-post"
                    style={{
                      backgroundImage: "url(img/श्री-उमेश-सिंह-कुशवाहा.jpeg)"
                    }}
                  >
                    <div className="post-info">
                      <a  className="cat-name tt-u">
                        Politics
                      </a>
                      <h3 className="fw-6 fz-16">
                      <Link to="/sata-me-rahte-huye-tranfer" className="text-white"> सत्ता में रहते हुए ट्रांसफर-पोस्टिंग और सरकारी नौकरी के नाम पर
                      लालू परिवार ने अकूत संपत्ति बनाई: उमेश सिंह कुशवाहा</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.slider-wrap */}
            <div className="main-content mt-20 ov-hidden">
              <div className="col-md-8 sm-padding">
                <div className="news-block padding-15 bg-white bd-grey mb-40">
                  <div className="grid-posts">
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-1.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -1 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-2.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -2 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-3.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -3 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-4.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -4 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-5.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -5 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-6.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -6 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-7.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -7 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/entertain-8.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -8 */}
                  </div>
                  {/* /.grid-posts */}
                </div>
                {/* /.news-block */}
                <ul className="pagination-wrap ml-10">
                  <li>
                    <a >
                      <i className="ti-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <a >1</a>
                  </li>
                  <li>
                    <a  className="active">
                      2
                    </a>
                  </li>
                  <li>
                    <a >3</a>
                  </li>
                  <li>
                    <a >
                      <i className="ti-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* content block */}
              <aside className="col-md-4 sm-padding">
                <div className="sidebar-wrap">
                  <div className="single-sidebar bd-grey bg-white">
                    <a >
                      <img
                        src="img/banner-2.jpg"
                        alt="Sidebar Ad"
                        className="img-w1"
                      />
                    </a>
                  </div>
                  {/* /.single-sidebar */}
                  <div className="single-sidebar no-padding">
                    <a
                      href="https://www.accuweather.com/en/us/new-york-ny/10007/weather-forecast/349727"
                      className="aw-widget-legal"
                    >
                      {/*
                                By accessing and/or using this code snippet, you agree to AccuWeather’s terms and conditions (in English) which can be found at https://www.accuweather.com/en/free-weather-widgets/terms and AccuWeather’s Privacy Statement (in English) which can be found at https://www.accuweather.com/en/privacy.
                                */}
                    </a>
                    <div
                      id="awcc1499974479079"
                      className="aw-widget-current"
                      data-locationkey=""
                      data-unit="c"
                      data-language="en-us"
                      data-useip="true"
                      data-uid="awcc1499974479079"
                    />
                  </div>
                  {/* /.single-sidebar */}
                  <div className="single-sidebar no-padding">
                    <div className="side-tab">
                      <ul className="tab-menu mb-15">
                        <li className="active">
                          <a href="#recent" data-toggle="tab">
                            Recent
                          </a>
                        </li>
                        <li>
                          <a href="#popular" data-toggle="tab">
                            Popular
                          </a>
                        </li>
                        <li>
                          <a href="#comments" data-toggle="tab">
                            Comments
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content bd-grey padding-15">
                        <div className="tab-pane fade in active" id="recent">
                          <ul className="list-post-items">
                            <li>
                              <img src="img/tab-1.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >William Braynt went to visit the US.</a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-2.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    Style icon angelina goes to take oscar.
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-3.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    How to become a wildlife photographer?
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-4.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    linin park singer is no more. he is top in the
                                    world.
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* /#recent */}
                        <div className="tab-pane fade in" id="popular">
                          <ul className="list-post-items">
                            <li>
                              <img src="img/tab-1.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-2.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-3.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-4.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* /#popular */}
                        <div className="tab-pane fade in" id="comments">
                          <ul className="list-post-items">
                            <li>
                              <img src="img/tab-1.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-2.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-3.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                            <li>
                              <img src="img/tab-4.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                  <a >
                                    William Braynt went to visit the grabl
                                  </a>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  national Octobar 2023
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* /#comments */}
                      </div>
                    </div>
                  </div>
                  {/* /.single-sidebar */}
                  <div className="single-sidebar">
                    <h3 className="fw-8 fz-18 tt-u mb-30">Subscribe News24</h3>
                    <form action="#" className="subscribe-form">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                      <input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                  {/* /.single-sidebar */}
                  <div className="single-sidebar">
                    <div id="calendar_wrap" className="calendar_wrap">
                      <table id="wp-calendar">
                        <caption>July 2023</caption>
                        <thead>
                          <tr>
                            <th scope="col" title="Monday">
                              M
                            </th>
                            <th scope="col" title="Tuesday">
                              T
                            </th>
                            <th scope="col" title="Wednesday">
                              W
                            </th>
                            <th scope="col" title="Thursday">
                              T
                            </th>
                            <th scope="col" title="Friday">
                              F
                            </th>
                            <th scope="col" title="Saturday">
                              S
                            </th>
                            <th scope="col" title="Sunday">
                              S
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={3} id="prev" className="pad">
                              &nbsp;
                            </td>
                            <td className="pad">&nbsp;</td>
                            <td colSpan={3} id="next" className="pad">
                              &nbsp;
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td colSpan={5} className="pad">
                              &nbsp;
                            </td>
                            <td>1</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>
                              <a
                                href="http://cracktheme.com/codehube/2023/07/08/"
                                aria-label="Posts published on July 8, 2023"
                              >
                                8
                              </a>
                            </td>
                            <td>9</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>11</td>
                            <td>
                              <a
                                href="http://cracktheme.com/codehube/2023/07/12/"
                                aria-label="Posts published on July 12, 2023"
                              >
                                12
                              </a>
                            </td>
                            <td>
                              <a
                                href="http://cracktheme.com/codehube/2023/07/13/"
                                aria-label="Posts published on July 13, 2023"
                              >
                                13
                              </a>
                            </td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td id="today">20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                          </tr>
                          <tr>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <td>31</td>
                            <td className="pad" colSpan={6}>
                              &nbsp;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /.single-sidebar */}
                </div>
                {/* /.sidebar-wrap */}
              </aside>
              {/* sidebar block */}
            </div>
            {/* /.main-content */}
          </div>
          {/* /.container */}
        </section>
        {/* /.main-wrapper */}
      </>
    )
}
export default  Politics;

