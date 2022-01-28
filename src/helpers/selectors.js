export function getAppointmentsForDay(state, day) {
  for (const value of state.days) {
    if (value.name === day) {
      if (
        value.appointments.length !== 0 &&
        Array.isArray(value.appointments)
      ) {
        let result = [];
        for (const key of value.appointments) {
          result.push(state.appointments["" + key]);
        }
        return result;
      }
    }
  }
  return [];
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((weekDay) => {
    return weekDay.name === day;
  });

  if (!filteredDay) {
    return [];
  }
  const mappedInterviewers = filteredDay.interviewers.map((interviewer) => {
    return state.interviewers[interviewer];
  });
  return mappedInterviewers;
}

export function getInterview(state, interview) {
  let result = {};
  if (interview === null) {
    return null;
  } else {
    for (let value in state.interviewers) {
      if (state.interviewers[value].id === interview.interviewer) {
        result = {
          student: interview.student,
          interviewer: state.interviewers[value],
        };
      }
    }
    return result;
  }
}
