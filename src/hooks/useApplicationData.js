import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { startSession } from "pg/lib/sasl";

// Establishing state structure for app
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

    // Retrieves data from the server database to populate Appointments, Interviewers and Days
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState({
          ...state,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // to handles state management for selecting days on the DayList component
  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    
    const currentDay = state.days.find((day) => day.appointments.includes(id));

    const newDay = { ...currentDay, spots: currentDay.spots - 1 };
    const newDays = state.days.map((day) => {
      return day.name === state.day ? newDay : day;
    });

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview },
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        setState({
          ...state,
          appointments,
          days: newDays,
        });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const currentDay = state.days.find((day) => day.appointments.includes(id));

    const newDay = { ...currentDay, spots: currentDay.spots + 1 };
    const newDays = state.days.map((day) => {
      return day.name === state.day ? newDay : day;
    });

    return axios
      .delete(`/api/appointments/${id}`)
      .then((response) => {
        setState({
          ...state,
          appointments,
          days: newDays,
        });
      });
  }
  return { state, setDay, bookInterview, cancelInterview };
}
