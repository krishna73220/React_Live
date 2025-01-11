// src/components/TestCarousel.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './TestCarousel.css'; // Import custom CSS
import { Link } from 'react-router-dom';

export const TestCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true, // Enable fade transition
    draggable: true, // Ensure dragging is enabled
    prevArrow: <button type="button" className="slick-prev">{"<"}</button>,
    nextArrow: <button type="button" className="slick-next">{">"}</button>,
  };
  return (
    <div className="carousel-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="slide">
          <div
            className="featured-post"
            style={{ backgroundImage: "url(img/sports/sabjee-misra.jpeg)" }}>
            <div className="post-info">
              <Link to="/sport" className="cat-name tt-u">Sports</Link>
              <h3 className="fw-6 fz-16">
                <Link to="/is-baar-bhee-hoga-painorama-staar-seejan-07-ka-ivent" className="text-white">इसबार भी पनोरमा स्टार सीजन 07 का होगा आयोजन- संजीव मिश्रा</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="featured-post"
            style={{ backgroundImage: "url(img/sanjay-misra.jpg)" }}
          >
            <div className="post-info">
              <Link to="sport" className="cat-name tt-u">Sports</Link>
              <h3 className="fw-6 fz-16">
              
                  <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" className="text-white">मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                  हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="featured-post"
            style={{ backgroundImage: "url(img/sanjay-misra.jpg)" }}
          >
            <div className="post-info">
              <Link to="sport" className="cat-name tt-u">Sports</Link>
              <h3 className="fw-6 fz-16">
              <Link to="/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha" className="text-white">मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं
                                        हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा</Link>
              </h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export const PolticsSlide = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nav: false,
    navigation: false
  };

  return (
    <Slider {...settings}>
      <div>
        <div
          className="featured-post"
          style={{ backgroundImage: "url(img/Politics/ashok-chodhary.jpeg)" }}
        >
          <div className="post-info">
            <Link to="/politics" className="cat-name tt-u">Politics</Link>
            <h3 className="fw-6 fz-16">           
              <Link to="/tej-yaadav-ne-apane-maata-pita-ke-kaaryon" className="text-white"> तेजस्वी यादव ने अपने माता-पिता के क्रियाकलापों के लिए कभी अफसोस
              जाहिर नहीं किया: अशोक चैधरी</Link>
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div
          className="featured-post"
          style={{ backgroundImage: "url(img/श्री-उमेश-सिंह-कुशवाहा.jpeg)" }}
        >
          <div className="post-info">
            <Link to="/politics" className="cat-name tt-u">Politics</Link>
            <h3 className="fw-6 fz-16">            
              <Link to="/sata-me-rahte-huye-tranfer" className="text-white"> सत्ता में रहते हुए ट्रांसफर-पोस्टिंग और सरकारी नौकरी के नाम पर
              लालू परिवार ने अकूत संपत्ति बनाई: उमेश सिंह कुशवाहा</Link>
            </h3>
          </div>
        </div>
      </div>

    </Slider>
  );
};
export const WorlsUpr = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nav: false,
    navigation: false
  };

  return (
    <Slider {...settings}>
      <div> <div
        className="featured-post"
        style={{ backgroundImage: "url(img/slider-post-3.jpg)" }}
      >
        <div className="post-info">
          <a  className="cat-name tt-u">
            World
          </a>
          <h3 className="fw-6 fz-16">
            <a  className="text-white">
              An Army or Ground Force is a Fighting Force That Fights
              Primarily On Land.
            </a>
          </h3>
        </div>
      </div></div>
      <div> <div
        className="featured-post"
        style={{ backgroundImage: "url(img/slider-post-3.jpg)" }}
      >
        <div className="post-info">
          <a  className="cat-name tt-u">
            World
          </a>
          <h3 className="fw-6 fz-16">
            <a  className="text-white">
              An Army or Ground Force is a Fighting Force That Fights
              Primarily On Land.
            </a>
          </h3>
        </div>
      </div></div>

    </Slider>
  );
};
export const WorlsDown = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nav: false,
    navigation: false
  };

  return (
    <Slider {...settings}>
      <div><div
        className="featured-post"
        style={{ backgroundImage: "url(img/slider-post-4.jpg)" }}
      >
        <div className="post-info">
          <a  className="cat-name tt-u">
            World
          </a>
          <h3 className="fw-6 fz-16">
            <a  className="text-white">
              Alex Helis Confirms Mystery Pop Singer On New Music Album.
            </a>
          </h3>
        </div>
      </div></div>
      <div> <div
        className="featured-post"
        style={{ backgroundImage: "url(img/slider-post-4.jpg)" }}
      >
        <div className="post-info">
          <a  className="cat-name tt-u">
            World
          </a>
          <h3 className="fw-6 fz-16">
            <a  className="text-white">
              Alex Helis Confirms Mystery Pop Singer On New Music Album.
            </a>
          </h3>
        </div>
      </div></div>

    </Slider>
  );
};

const Bannermain = () => {
  return (

    <>
      <div className="featured-wrap ">
        <div className="col-md-5 col-sm-12">
          <div className="post-carousel ">
            <TestCarousel></TestCarousel>
          </div>
        </div>

        {/* *************************************************politics*********************************************** */}
        <div className="col-md-3 col-sm-6">
          <div className="post-carousel ">
            <PolticsSlide></PolticsSlide>
          </div>
          {/* /.post-carousel */}
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="top-wrap mb-10">
            <div className="post-carousel ">

              <WorlsUpr />

            </div>
            {/* /.post-carousel */}
          </div>
          <div className="bottom-wrap">
            <div className="post-carousel ">

              <WorlsDown></WorlsDown>
            </div>
            {/* /.post-carousel */}
          </div>
        </div>
      </div>
      {/* /.slider-wrap */}


    </>
  )
}
export default Bannermain;

