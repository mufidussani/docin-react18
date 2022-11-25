import React from "react";
import DoctorAppointment from "../components/DoctorAppoinment";
import Sidebar from "../components/Sidebar";

export default function DoctorDashboard() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <DoctorAppointment />
    </div>
  );
}
