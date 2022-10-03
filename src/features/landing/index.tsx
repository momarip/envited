import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div id="title-landing">
        <span> Imagine if </span> <span id="snapchat">Snapchat</span>{" "}
        <span>had events</span>
      </div>
      <p className="description">
        Easily host and share events with your friends across any social media.
      </p>
      <div id="landing-image">
        <img src="./img/Landing.svg"></img>
      </div>
      <div className="button">
        <button
          id="create"
          onClick={() => {
            navigate("/CreateEvent");
          }}
        >
          Create my event
        </button>
      </div>
    </section>
  );
};

export default Landing;
