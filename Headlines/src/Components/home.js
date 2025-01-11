import React from 'react'
import Bannermain from './homePage/bannersection';
import NewsTicker from './homePage/Ticker';
import { Link } from 'react-router-dom';

const MainHomeSection = () => {
  return (
    <div>
      <>
        <section className="main-wrapper mb-40">
          <div className="container">
            {/* ************************************sport************************************ */}

            <Bannermain></Bannermain>

            {/* /.news-ticker-wrap */}

           <NewsTicker></NewsTicker>        


            <div className="main-content mt-20 ov-hidden">
              <div className="col-md-8 sm-padding">
                <div className="news-block padding-15 bg-white bd-grey mb-40">
                  <h2 className="block-heading mb-40">Trending News</h2>
                  <div className="grid-posts">
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/संजीव मिश्रा.png" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                          <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" >मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                          हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> Agust 27 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -1 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/trending-2.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -2 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/trending-3.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -3 */}
                    <div className="col-xs-6 padding-10">
                      <div className="grid-post">
                        <a  className="mb-20">
                          <img src="img/trending-4.jpg" alt="Tranding News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* post -4 */}
                  </div>
                  {/* /.grid-posts */}
                </div>
                {/* /.news-block */}
                <div className="news-block padding-15 bg-white bd-grey mb-40">
                  <h2 className="block-heading mb-40">World News</h2>
                  <div className="two-col-posts">
                    <div className="col-md-6 padding-10">
                      <div className="post-item">
                        <a  className="mb-20">
                          <img src="img/world-1.jpg" alt="World News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for business company.
                            </a>
                          </h4>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 padding-10">
                      <div className="small-posts">
                        <div className="sm-post-item">
                          <img src="img/world-2.jpg" alt="World News" />
                          <div className="sm-post-content bd-grey">
                            <h4 className="fz-14">
                              <a >William braynt went to visit.</a>
                            </h4>
                            <p className="fz-12 fw-6 tt-u no-margin">
                              national Octobar 2024
                            </p>
                          </div>
                        </div>
                        <div className="sm-post-item">
                          <img src="img/world-3.jpg" alt="World News" />
                          <div className="sm-post-content bd-grey">
                            <h4 className="fz-14">
                              <a >
                                White house press secretary Spicer briefs.
                              </a>
                            </h4>
                            <p className="fz-12 fw-6 tt-u no-margin">
                              national Octobar 2024
                            </p>
                          </div>
                        </div>
                        <div className="sm-post-item">
                          <img src="img/world-4.jpg" alt="World News" />
                          <div className="sm-post-content bd-grey">
                            <h4 className="fz-14">
                              <a >
                                Expert tips on how to get a pay rise business.
                              </a>
                            </h4>
                            <p className="fz-12 fw-6 tt-u no-margin">
                              national Octobar 2024
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .news-block */}
                <div className="news-block padding-15 bg-white bd-grey mb-40">
                  <h2 className="block-heading mb-40">Featured Videos</h2>
                  <div className="side-tab">
                    <div className="col-md-6 padding-10">
                      <div className="tab-content">
                        <div
                          className="tab-pane v-player fade in active"
                          id="video-1"
                        >
                          <iframe
                            src="https://player.vimeo.com/video/39524612"
                            allowFullScreen=""
                          />
                        </div>{" "}
                        {/* /#video-1 */}
                        <div className="tab-pane v-player fade in" id="video-2">
                          <iframe
                            src="https://player.vimeo.com/video/39524612"
                            allowFullScreen=""
                          />
                        </div>{" "}
                        {/* /#video-2 */}
                        <div className="tab-pane v-player fade in" id="video-3">
                          <iframe
                            src="https://player.vimeo.com/video/39524612"
                            allowFullScreen=""
                          />
                        </div>{" "}
                        {/* /#video-3 */}
                        <div className="tab-pane v-player fade in" id="video-4">
                          <iframe
                            src="https://player.vimeo.com/video/39524612"
                            allowFullScreen=""
                          />
                        </div>{" "}
                        {/* /#video-4 */}
                      </div>
                    </div>
                    <div className="col-md-6 padding-10">
                      <ul className="video-thumbs">
                        <li className="active">
                          <img src="img/video-1.jpg" alt="Featured Video" />
                          <a href="#video-1" data-toggle="tab">
                            <div className="display-table">
                              <div className="table-cell">
                                <i className="ti-control-play" />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <img src="img/video-2.jpg" alt="Featured Video" />
                          <a href="#video-2" data-toggle="tab">
                            <div className="display-table">
                              <div className="table-cell">
                                <i className="ti-control-play" />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <img src="img/video-3.jpg" alt="Featured Video" />
                          <a href="#video-3" data-toggle="tab">
                            <div className="display-table">
                              <div className="table-cell">
                                <i className="ti-control-play" />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <img src="img/video-4.jpg" alt="Featured Video" />
                          <a href="#video-4" data-toggle="tab">
                            <div className="display-table">
                              <div className="table-cell">
                                <i className="ti-control-play" />
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.news-block */}
                <div className="banner-in-content padding-15 bg-white bd-grey ov-hidden mb-40">
                  <a >
                    <img src="img/banner.jpg" alt="Banner AD" />
                  </a>
                </div>
                {/* /.banner-in-content */}
                <div className="news-block padding-15 bg-white bd-grey">
                  <h2 className="block-heading mb-40">Sports News</h2>
                  <div className="news-items">
                    <div className="col-xs-12 padding-10">
                      <div className="list-post-item">
                        <a  className="img-thumb">
                          <img src="img/sports-1.jpg" alt="Sports News" />
                        </a>
                        <div className="post-info padding-15 ptb-20 bd-grey">
                          <h4 className="mb-15 fw-6">
                            <a  className="text-dark">
                              The future of possible innovation for local business
                              company.
                            </a>
                          </h4>
                          <p className="fz-13">
                            Stay focused and remember we design the best WordPress
                            News and Magazine Themes. It’s the ones closest to you
                            that want to…
                          </p>
                          <span className="date">
                            <i className="ti-timer" /> November 16 , 2024
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-6 padding-10">
                      <a >
                        <img
                          src="img/sports-2.jpg"
                          className="img-full"
                          alt="Sports News"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-xs-6 padding-10">
                      <a >
                        <img
                          src="img/sports-3.jpg"
                          className="img-full"
                          alt="Sports News"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-xs-6 padding-10">
                      <a >
                        <img
                          src="img/sports-4.jpg"
                          className="img-full"
                          alt="Sports News"
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-xs-6 padding-10">
                      <a >
                        <img
                          src="img/sports-5.jpg"
                          className="img-full"
                          alt="Sports News"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.news-block */}
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
                              <img src="img/sanjay-misra.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" className="">मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                                हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  Bihar Agust 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* /#recent */}
                        <div className="tab-pane fade in" id="popular">
                          <ul className="list-post-items">
                            <li>
                              <img src="img/sanjay-misra.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" className="">मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                                हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  Bihar Agust 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* /#popular */}
                        <div className="tab-pane fade in" id="comments">
                          <ul className="list-post-items">
                            <li>
                              <img src="img/sanjay-misra.jpg" alt="Image" />
                              <div className="list-post-content bd-grey">
                                <h4 className="fz-14">
                                <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" className="">मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                                हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
                                </h4>
                                <p className="fz-12 fw-6 tt-u no-margin">
                                  Bihar Agust 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
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
                                  national Octobar 2024
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
                    <h3 className="fw-8 fz-18 tt-u mb-30">News Category</h3>
                    <ul className="cat-list">
                      <li>
                        <a >World</a>
                      </li>
                      <li>
                        <a >Travel</a>
                      </li>
                      <li>
                        <a >Foods</a>
                      </li>
                      <li>
                        <a >Creative</a>
                      </li>
                      <li>
                        <a >Sports</a>
                      </li>
                      <li>
                        <a >Racing</a>
                      </li>
                      <li>
                        <a >Technology</a>
                      </li>
                    </ul>
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
                        <caption>July 2024</caption>
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
                                href="http://cracktheme.com/codehube/2024/07/08/"
                                aria-label="Posts published on July 8, 2024"
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
                                href="http://cracktheme.com/codehube/2024/07/12/"
                                aria-label="Posts published on July 12, 2024"
                              >
                                12
                              </a>
                            </td>
                            <td>
                              <a
                                href="http://cracktheme.com/codehube/2024/07/13/"
                                aria-label="Posts published on July 13, 2024"
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

    </div>
  )
}

export default MainHomeSection;