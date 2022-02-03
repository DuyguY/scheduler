import React, { useState } from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";

// to handles booking appointments for students and allow a user to edit and delete appointments
export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // to resets name value entered by user, and selected interviewer
  function reset(props) {
    setStudent("");
    setInterviewer("");
  }

  // to cancel resets the form and navigates back
  function cancel(props) {
    reset(props);
    props.onCancel();
  }
  // to create error messages
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Interviewer name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel(props)}>
            Cancel
          </Button>
          <Button confirm onClick={() => validate(student, interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
