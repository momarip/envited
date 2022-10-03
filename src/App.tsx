import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "./features/create-event";
import EventDetails from "./features/event-details";
import Landing from "./features/landing";

const Test = () => {
  console.log("RELEASE LCOAL QUERY");
  return <></>;
};
const App = () => (
  <>
    <Test />
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/createEvent" element={<CreateEvent></CreateEvent>}></Route>
      <Route
        path="/eventDetails"
        element={<EventDetails></EventDetails>}
      ></Route>
    </Routes>
  </>
);

export default App;
