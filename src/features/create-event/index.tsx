import React, { FC, useState } from "react";
import { useForm } from "react-cool-form";
import { useNavigate } from "react-router-dom";

interface CreateEventProps {}

const CreateEvent: FC<CreateEventProps> = () => {
  const navigate = useNavigate();
  let [eventName, setEventName] = useState("");
  let [hostName, setHostName] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");

  /* The handleChange() function to set a new state for input */
  const handleChange = (event: any) => {
    setEventName(event.target.value);
    setHostName(event.target.value);
    setStartDate(event.target.value);
    setEndDate(event.target.value);
  };

  return (
    <section className="home">
      <div id="title-landing">Create event</div>

      <form>
        <div className="col-6 form">
          <div className="form-group text-left input-align">
            <label className="col-sm-2 col-form-label">
              Event name
              <span className="text-danger font-weight-bold">*</span> :
            </label>
            <div className="col-sm-10">
              <input
                defaultValue={eventName}
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="Event name"
                id="event_name"
              />
            </div>
          </div>
          <div className="form-group text-left input-align">
            <label className="col-sm-4 col-form-label">
              Host name<span className="text-danger font-weight-bold">*</span> :
            </label>
            <div className="col-sm-8">
              <input
                defaultValue={hostName}
                onChange={(e) => {
                  setHostName(e.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="Host name"
                id="host_name"
              />
            </div>
          </div>

          <div className="form-group text-left input-align">
            <label className="col-sm-4 col-form-label">
              Start date/time
              <span className="text-danger font-weight-bold">*</span> :
            </label>
            <div className="col-sm-8">
              <input
                defaultValue={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="start date"
                id="start_date"
              />
            </div>
          </div>
          <div className="form-group text-left input-align">
            <label className="col-sm-4 col-form-label">
              End date/time
              <span className="text-danger font-weight-bold">*</span> :
            </label>
            <div className="col-sm-8">
              <input
                defaultValue={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="end date"
                id="end_date"
              />
            </div>
          </div>
          <div className="button">
            <button
              id="create"
              onClick={() => {
                navigate("/eventDetails");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;
