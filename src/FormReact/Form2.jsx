import { Fragment, useState } from "react";
import "./Form2.css";

const Form2 = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [checks, setChecks] = useState([]);
  const [select, setSelect] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const [favColor, setFavColor] = useState("");
  const [range, setRange] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);

  const radiobtn = ["Male", "Female"];

  const handleUser = (e) => setUser(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);
  const handleGender = (e) => setGender(e.target.value);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecks((prev) => [...prev, e.target.value]);
    } else {
      setChecks((prev) => prev.filter((val) => val !== e.target.value));
    }
  };

  const handleSingleSelect = (e) => setSelect(e.target.value);

  const handleMultiSelect = (e) => {
    const values = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedSkills(values);
  };

  const handleDob = (e) => setDob(e.target.value);
  const handleTime = (e) => setTime(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleFavColor = (e) => setFavColor(e.target.value);
  const handleRange = (e) => setRange(e.target.value);
  const handleWebsite = (e) => setWebsite(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleFile = (e) => setFile(e.target.files[0]);

   const resetForm = () => {
    setUser("");
    setEmail("");
    setPass("");
    setGender("");
    setChecks([]);
    setSelect("");
    setSelectedSkills([]);
    setDob("");
    setTime("");
    setAge("");
    setFavColor("");
    setRange("");
    setWebsite("");
    setPhone("");
    setFile(null);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Name:", user);
    console.log("Email:", email);
    console.log("Password:", pass);
    console.log("Gender:", gender);
    console.log("Checked Subjects:", checks);
    console.log("Single Select:", select);
    console.log("Multi Select:", selectedSkills);
    console.log("Date of Birth:", dob);
    console.log("Preferred Time:", time);
    console.log("Age:", age);
    console.log("Favorite Color:", favColor);
    console.log("Range Value:", range);
    console.log("Website:", website);
    console.log("Phone:", phone);
    console.log("File:", file ? file.name : "No file selected");

    resetForm()
  };

  const videoSrc = "https://spacex1-clone.netlify.app/assets/starshiplaunch-DGL85-4R.mp4";

  return (
    <div className="video-section">
      <video src={videoSrc} autoPlay loop muted></video>
      <div className="overlay"></div>

      <div id="form">
        <h1 style={{color:"white", textAlign:"center"}}>RegiStration Form</h1>
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Enter your name" onChange={handleUser} />
          <input type="email" placeholder="Enter email" onChange={handleEmail} />
          <input type="password" placeholder="Enter password" onChange={handlePassword} />

          {radiobtn.map((ele, index) => (
            <Fragment key={index}>
              <label>
                <input type="radio" name="gender" value={ele} onChange={handleGender} />
                {ele}
              </label>
            </Fragment>
          ))}
           <div id="check">
          <label><input type="checkbox" value="English" onChange={handleCheckbox} /> English</label>
          <label><input type="checkbox" value="Math" onChange={handleCheckbox} /> Math</label>
          <label><input type="checkbox" value="Physics" onChange={handleCheckbox} /> Physics</label>
          <label><input type="checkbox" value="Chemistry" onChange={handleCheckbox} /> Chemistry</label>
            <label><input type="checkbox" value="Biology" onChange={handleCheckbox} /> Biology</label>
              <label><input type="checkbox" value="IT" onChange={handleCheckbox} /> IT</label>
          </div>

          
          <select name="skills" onChange={handleSingleSelect}>
            <option value="">-- Select --</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>

          {/* Multi select */}
          <select multiple onChange={handleMultiSelect}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>
          <p style={{color:"white"}}>Chosen: {selectedSkills.join(", ")}</p>

          <input type="date" onChange={handleDob} />
          <input type="time" onChange={handleTime} />
          <input type="number" placeholder="Enter age" onChange={handleAge} />
          <input type="color" onChange={handleFavColor} />
          <input type="range" min="0" max="100" onChange={handleRange} /> {range}
          <input type="url" placeholder="Enter website" onChange={handleWebsite} />
          <input type="tel" placeholder="Enter phone number" onChange={handlePhone} />
          <input type="file" onChange={handleFile} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
