import { Fragment, useRef } from "react";
import "./Form1.css";

const FormSecond = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const aboutRef = useRef();
  const myskill = useRef([]);
  const btnskill = useRef([]);
  const nodef = useRef();
  const totalref = useRef();
  const dateinref = useRef();
  const dateoutref = useRef();
  const pickupref = useRef();
  const maskedRef = useRef();
  const timeHourRef = useRef();
  const timeMinRef = useRef();
  const timePeriodRef = useRef();
  const streetRef = useRef();
  const street2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const roomTypeRef = useRef();
  const mobileRef = useRef();
  const smokingRef = useRef();
  const guestRef = useRef();
  const noteref = useRef();

  const selectedvalue = ["Yes", "No"];

  const handleform = (e) => {
    e.preventDefault();

    console.log("First Name:", firstNameRef.current.value);
    console.log("Last Name:", lastNameRef.current.value);
    console.log("About:", aboutRef.current.value);
    console.log("Number of Adults:", nodef.current.value);
    console.log("Total Amount:", totalref.current.value);
    console.log("Date In:", dateinref.current.value);
    console.log("Date Out:", dateoutref.current.value);
    console.log("Pick-up Date:", pickupref.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Room Type:", roomTypeRef.current.value);
    console.log("Home:", phoneRef.current.value);
    console.log("Mobile:", mobileRef.current.value);
    console.log("Smoking:", smokingRef.current.value);
    console.log("# of Guests:", guestRef.current.value);
    console.log("Masked Input:", maskedRef.current.value);
    console.log(
      "Pick-up Time:",
      `${timeHourRef.current.value}:${timeMinRef.current.value} ${timePeriodRef.current.value}`
    );

    const shuttleService =
      (myskill.current.find((el) => el && el.checked) || {}).value || "";
    console.log("Shuttle Service:", shuttleService);

    const wifi =
      (btnskill.current.find((el) => el && el.checked) || {}).value || "";
    console.log("Lease Pocket Wifi:", wifi);

    console.log("Street Address:", streetRef.current.value);
    console.log("Street Address Line 2:", street2Ref.current.value);
    console.log("City:", cityRef.current.value);
    console.log("State/Province:", stateRef.current.value);
    console.log("Postal Code:", postalRef.current.value);
    console.log("Note:", noteref.current.value);

    const allRefs = [
      firstNameRef, lastNameRef, aboutRef, nodef, totalref, dateinref, dateoutref,
      pickupref, maskedRef, timeHourRef, timeMinRef, timePeriodRef,
      streetRef, street2Ref, cityRef, stateRef, postalRef,
      emailRef, phoneRef, roomTypeRef, mobileRef,
      smokingRef, guestRef, noteref
    ];

    allRefs.forEach((ref) => {
      if (!ref.current) return;
      if (ref.current.tagName === "SELECT") {
        ref.current.selectedIndex = 0;
      } else if (ref.current.type === "radio" || ref.current.type === "checkbox") {
        ref.current.checked = false;
      } else {
        ref.current.value = "";
      }
    });

    myskill.current.forEach((el) => { if (el) el.checked = false; });
    btnskill.current.forEach((el) => { if (el) el.checked = false; });

    timePeriodRef.current.value = "AM";
  };

  return (
    <div id="form">
      <div className="img">
        <img
          src="https://files.jotform.com/jufs/ugurg/form_files/catchabreak.65b115fe8b8dc3.01177570.png"
          alt="hotel"
        />
      </div>

      <form onSubmit={handleform}>
        <h1>Hotel Registration Form</h1>

        <h3>Name</h3>
        <div id="name">
          <input type="text" placeholder="First Name" ref={firstNameRef} />
          <input type="text" placeholder="Last Name" ref={lastNameRef} />
        </div>

        <h2>Pin your location</h2>
        <textarea placeholder="Enter location" ref={aboutRef}></textarea>

        <h3>Shuttle Service</h3>
        {selectedvalue.map((ele, index) => (
          <Fragment key={index}>
            <label htmlFor={`myskill-${ele}`}>
              <input
                type="radio"
                name="myskill"
                value={ele}
                id={`myskill-${ele}`}
                ref={(val) => (myskill.current[index] = val)}
              />
              {ele}
            </label>
            <br />
          </Fragment>
        ))}

        <h2>Number of Adults</h2>
        <input type="number" ref={nodef} placeholder="e.g-2" className="half-input" style={{width:"45%"}} />

        <h1 className="section-title">Booking Information</h1>
        <h3>Total Amount</h3>
        <input type="number" ref={totalref} placeholder="e.g-2000" className="half-input" style={{width:"45%"}} />

        <div className="row">
          <div>
            <h3>Check-in-date</h3>
            <input type="date" ref={dateinref} />
          </div>
          <div>
            <h3>Check-out-date</h3>
            <input type="date" ref={dateoutref} />
          </div>
        </div>

        <h3>Pick-up-date</h3>
        <input type="date" ref={pickupref} />

        <h3>Masked Input</h3>
        <input type="text" ref={maskedRef} placeholder="Enter masked input" style={{width:"45%"}} />

        <div className="row-space">
          <h3>Lease Pocket Wifi ($5)</h3>
          <h3>Pick-up Time</h3>
        </div>

        <div id="time" className="row-space">
          <div>
            {selectedvalue.map((ele, index) => (
              <Fragment key={index}>
                <label htmlFor={`btnskill-${ele}`} className="wifi-label">
                  <input
                    type="radio"
                    name="btnskill"
                    value={ele}
                    id={`btnskill-${ele}`}
                    ref={(val) => (btnskill.current[index] = val)}
                  />
                  {ele}
                </label>
                <br />
              </Fragment>
            ))}
          </div>

          <div className="time-inputs">
            <input type="number" ref={timeHourRef} placeholder="HH" min="1" max="12" />
            <span>:</span>
            <input type="number" ref={timeMinRef} placeholder="MM" min="0" max="59" />
            <select ref={timePeriodRef} defaultValue="AM">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

        <h3>Email</h3>
        <input type="email" ref={emailRef} placeholder="example@example.com" />

        <h3>Address</h3>
        <input type="text" ref={streetRef} placeholder="Street Address" />
        <input type="text" ref={street2Ref} placeholder="Street Address Line 2" />
        <div className="row">
          <input type="text" ref={cityRef} placeholder="City" />
          <input type="text" ref={stateRef} placeholder="State" />
        </div>
        <input type="text" ref={postalRef} placeholder="Postal / Zip Code" />

        <h3>Home</h3>
        <input type="tel" ref={phoneRef} placeholder="(000) 000-0000" className="half-input" />

        <h3>Room Type</h3>
        <select ref={roomTypeRef} defaultValue="Please Select" className="half-input">
          <option>Please Select</option>
          <option>Single</option>
          <option>Double</option>
          <option>Suite</option>
        </select>

        <h3>Mobile</h3>
        <input type="tel" ref={mobileRef} placeholder="(000) 000-0000" className="half-input" />

        <h3>Smoking</h3>
        <select ref={smokingRef} defaultValue="Please Select" className="half-input">
          <option>Please Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <h3># of Guests</h3>
        <input type="number" ref={guestRef} placeholder="e.g., 4" className="half-input" />

        <h2>Notes</h2>
        <textarea ref={noteref}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSecond;
