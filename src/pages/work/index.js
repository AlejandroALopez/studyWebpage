import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import eq2Img1 from '../../assets/EQ2/img1.png';
import eq2Img2 from '../../assets/EQ2/img2.png';
import eq2Img3 from '../../assets/EQ2/img3.png';
import './style.scss';

export default function Work() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === 2 ? 0 : index + 1);
  };

  const currentView = () => {
    switch (index) {
      case 0: // first project: BayesEM
        return (
          <div className={index === 0 ? 'slide active' : 'slide'}>
            <div className="project">
              <div className="text-container">
                <p className="project-title">BayesEM</p>
                <p className="project-description">
                  Mobile app made to assist medical residents on patient diagnoses, allowing them to select an initial confidence probability
                  of the patient having a specific condition (pre-test), followed by a survey of symptoms that impact such probability (post-test).
                </p>
                <p className="project-description">
                  The app was built on React Native and uses a Flask backend connected to a Mongo database. The latest version of the app
                  was recently uploaded to Testflight.
                </p>
              </div>
              <div className="images-container">
                <img src={eq2Img1} className="image-eq2" alt="EQ2" />
                <img src={eq2Img2} className="image-eq2" alt="EQ2" />
                <img src={eq2Img3} className="image-eq2" alt="EQ2" />
              </div>
            </div>
          </div>
        );
      case 1: // first project: ConnectUS
        return (
          <div className={index === 1 ? 'slide active' : 'slide'}>
            ConnectUS
          </div>
        );
      case 2: // first project: EQ2
        return (
          <div className={index === 2 ? 'slide active' : 'slide'}>
            <div className="project">
              <div className="text-container">
                <p className="project-title">EQ2</p>
                <p className="project-description">
                  Mobile app to be used by instructors from the Lionheart Foundation to help trauma-impacted
                  youth.
                </p>
                <p className="project-description">
                  The app was built on React Native and uses an ExpressJS backend connected to a Mongo database. It also uses AWS S3 to store
                  audio, video, and images.
                </p>
              </div>
              <div className="images-container">
                <img src={eq2Img1} className="image-eq2" alt="EQ2" />
                <img src={eq2Img2} className="image-eq2" alt="EQ2" />
                <img src={eq2Img3} className="image-eq2" alt="EQ2" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="work-section" id="work">
      <p className="title">Work</p>
      <div className="project-container">
        <FaArrowAltCircleLeft className="arrow" onClick={prevSlide} />
        {currentView()}
        <FaArrowAltCircleRight className="arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}
