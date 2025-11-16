import { useRef } from "react";
import "./Form.css";

const Form = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const email2Ref = useRef(); 
  const contactRef = useRef();
  const resumeRef = useRef(); 
  const urlRef = useRef();
  const choiceRef = useRef();
  const aboutRef = useRef();
  const colref = useRef();
  const searchref = useRef();
  const phoneref = useRef();
  const hiddenref = useRef();
  const rangeRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const monthRef = useRef();
  const weekRef = useRef();
  const numberRef = useRef();
  const datetimeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", firstNameRef.current.value);
    console.log("Last Name:", lastNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Secondary Email:", email2Ref.current.value);
    console.log("Contact:", contactRef.current.value);
    console.log("Phone:", phoneref.current.value);
    console.log("Color:", colref.current.value);
    console.log("Search:", searchref.current.value);
    console.log("Hidden Value:", hiddenref.current.value);
    console.log("Range:", rangeRef.current.value);
    console.log("Time:", timeRef.current.value);
    console.log("Date:", dateRef.current.value);
    console.log("Month:", monthRef.current.value);
    console.log("Week:", weekRef.current.value);
    console.log("Age/Number:", numberRef.current.value);
    console.log("Datetime:", datetimeRef.current.value);
    console.log("Resume File:", resumeRef.current.files[0]?.name);
    console.log("URL:", urlRef.current.value);
    console.log("Choice:", choiceRef.current.value);
    console.log("About:", aboutRef.current.value);

    const gender = document.querySelector("input[name='gender']:checked")?.value;
    console.log("Gender:", gender);

    const subjects = Array.from(
      document.querySelectorAll("input[name='subject']:checked")
    ).map((el) => el.value);
    console.log("Subjects:", subjects);

    [
      firstNameRef, lastNameRef, emailRef, email2Ref, contactRef,
      phoneref, searchref, hiddenref, rangeRef, timeRef,
      dateRef, monthRef, weekRef, numberRef, datetimeRef,
      urlRef, choiceRef, aboutRef
    ].forEach(ref => ref.current.value = "");

    document.querySelectorAll("input[name='gender']").forEach(el => el.checked = false);
    document.querySelectorAll("input[name='subject']").forEach(el => el.checked = false);
    resumeRef.current.value = null;
    
  };

  return (
    <div id="form">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <h2>First Name</h2>
        <input type="text" placeholder="Enter First Name" ref={firstNameRef} />
        <h2>Last Name</h2>
        <input type="text" placeholder="Enter Last Name" ref={lastNameRef} />

        <h2>Email</h2>
        <input type="email" placeholder="Enter Email" ref={emailRef} />

        <h2>Secondary Email</h2>
        <input type="email" placeholder="Enter Secondary Email" ref={email2Ref} />

        <h2>Contact Number</h2>
        <input type="number" placeholder="Enter Mobile Number" ref={contactRef} />

        <h2>Phone</h2>
        <input type="tel" placeholder="Enter Phone Number" ref={phoneref} />

        <h2>Gender*</h2>
        <div id="gender">
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
          <input type="radio" name="gender" value="Other" /> Other
        </div>

        <h2>Subjects*</h2>
        <div id="subject">
          <input type="checkbox" name="subject" value="English" /> English
          <input type="checkbox" name="subject" value="Math" /> Math
          <input type="checkbox" name="subject" value="Physics" /> Physics
        </div>

        <h2>Upload Resume</h2>
        <input type="file" ref={resumeRef} />
       
        <h2>URL</h2>
        <input type="url" placeholder="Enter URL" ref={urlRef} />

        <h2>Select Choice</h2>
        <select ref={choiceRef}>
          <option value="">Select your Answer</option>
          <option value="Choice1">Choice 1</option>
          <option value="Choice2">Choice 2</option>
          <option value="Choice3">Choice 3</option>
        </select>

        <h2>Favorite Color</h2>
        <input type="color" ref={colref} />

        <h2>Search</h2>
        <input type="search" placeholder="Search..." ref={searchref} />

        <input type="hidden" value="secret" ref={hiddenref} />

        <h2>Range</h2>
        <input type="range" ref={rangeRef} />

        <h2>Time</h2>
        <input type="time" ref={timeRef} />

        <h2>Date</h2>
        <input type="date" ref={dateRef} />

        <h2>Month</h2>
        <input type="month" ref={monthRef} />

        <h2>Week</h2>
        <input type="week" ref={weekRef} />

        <h2>Age</h2>
        <input type="number" placeholder="Enter Age" ref={numberRef} />

        <h2>Date & Time</h2>
        <input type="datetime-local" ref={datetimeRef} />

        <h2>About</h2>
        <textarea placeholder="About yourself" ref={aboutRef}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
