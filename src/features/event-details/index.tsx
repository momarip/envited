import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface EventDetailsProps {}

const EventDetails: FC<EventDetailsProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="">
      <div>
        <img id="birthday" src="./img/Birthday.png"></img>
      </div>
      <div id="birthname">Birthday Bash</div>
      <p id="hostName">Hosted By Elisia</p>
      <div id="date" className="row">
        <div className="bi bi-calendar-date" id="icon"></div>
        <div className="parentdate">
          <h1 id="startDate">18 August 6:00PM</h1>
          <p id="endDate">to 19 August 1:00PM UTC +10</p>
        </div>
      </div>
      <div id="location">
        <div className="bi bi-pin-map" id="locationIcon"></div>
        <div className="parentdate">
          <h1 id="startDate">Street name</h1>
          <p id="endDate">to 19 August 1:00PM UTC +10</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
