import React from "react";
import Slack from "../assets/slack.svg";
import Github from "../assets/github.svg";
import Camera from "../assets/camera.svg";
import { Link } from "react-router-dom";
const LinkSection = () => {
  return (
    <section>
      <a href="https://twitter.com/taofeek_ob" id="btn_twitter">
        Twitter Link
      </a>
      <a
        href="https://training.zuri.team/"
        id="btn__zuri"
        title="A cohort for basic introduction to software development and product design aimed at complete beginners, which anyone can join"
      >
        Zuri Team
      </a>
      <a
        href="https://books.zuri.team"
        id="books"
        title="A repository of design and coding books"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=taofeek"
        id="book__python"
        title="A full and simplified intro to python for beginners"
      >
        Python Books
      </a>
      <a
        href="https://backgroundcheck.zuri.team/"
        id="pitch"
        title="A fast, accurate, and affordable background checking service to help employers determine whether an applicants is trustworthy"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        title="A free design books containing world-class tips & guidelines needed to create truly professional designs"
      >
        Design Books
      </a>
      <Link to="/contact" id="contact" title="contact me by visiting this page">
        Contact Me
      </Link>
    </section>
  );
};

const Social = () => {
  return (
    <div className="social">
      <img src={Slack} alt="slack" />
      <a
        href="https://github.com/taofeek-ob/HNG--Stage-1--linktree"
        target="blank"
      >
        <img src={Github} alt="github" />
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <div className="content">
      <main>
        <div className="profile">
          <div className="image-wrapper" tabindex="1">
            <img
              src="https://avatars.githubusercontent.com/u/72547039?s=400&u=968524cdbf28219518dbb802defbfc1495aaff0e&v=4"
              alt="profile"
              id="profile__img"
            />
            <div className="camera">
              <img src={Camera} alt="camera" />
            </div>
          </div>
          <div className="cta">
            <svg
              tabIndex="1"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="rect"
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="white"
              />
              <path
                d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 3"
              />
            </svg>

            <svg
              tabIndex="1"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="rect"
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="white"
              />
              <path
                d="M21 21.8334C21.4602 21.8334 21.8333 21.4603 21.8333 21.0001C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21.0001C20.1666 21.4603 20.5397 21.8334 21 21.8334Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.8333 21.8334C27.2935 21.8334 27.6666 21.4603 27.6666 21.0001C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21.0001C26 21.4603 26.3731 21.8334 26.8333 21.8334Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.1666 21.8334C15.6269 21.8334 16 21.4603 16 21.0001C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21.0001C14.3333 21.4603 14.7064 21.8334 15.1666 21.8334Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 3"
              />
            </svg>
            <span className="tooltiptext">Share Link</span>
          </div>

          <div className="profile-links">
            <span id="twitter">taofeek_ob</span>
            <span id="slack">Taofeek</span>
          </div>
        </div>

        <LinkSection />
      </main>
      <Social />
    </div>
  );
};

export default Home;
