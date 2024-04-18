import React from "react";
import { Route, Routes } from "react-router-dom";
import GetStart from "./pages/get-started/GetStart";
import NextStarted from "./pages/next-started/NextStarted";
import CreateAccount from "./pages/create-account/CreateAccount";
import WhatGoalSection from "./pages/whats-goal/WhatGoalSection";
import WorkoutTrackPage from "./pages/workout-tracker/WorkoutTrackPage";
import WorkSchedule from "./pages/work-schedule/WorkSchedule";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStart />} />
      <Route path="/next" element={<NextStarted />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/whats-goal" element={<WhatGoalSection />} />
      <Route path="/workout-track" element={<WorkoutTrackPage />} />
      <Route path="/workout-schedule" element={<WorkSchedule />} />
    </Routes>
  );
};

export default App;
