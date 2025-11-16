import React, { useReducer, useRef } from "react";

const FormReduce = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    date: "",
    age: "",
    gender: "",
    country: "",
    profilePic: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update_form":
        return { ...state, [action.key]: action.value };
      case "reset_form":
        return { ...initialState };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const fileInputRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(" Form Data:", state);

    // reset form fields
    dispatch({ type: "reset_form" });

    // manually clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInput = (e) => {
    const { name, value, type, files } = e.target;
    dispatch({
      type: "update_form",
      key: name,
      value: type === "file" ? files[0]?.name || "" : value
    });
  };

  return (
    <div className="pl-80">
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-4 justify-around pl-[100px] bg-gray-100 p-6 rounded-lg w-[750px]"
      >
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleInput}
          className="w-[550px] h-[25px] bg-gray-300 rounded-md p-1"
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInput}
          className="w-[550px] h-[25px] bg-gray-300 rounded-md p-1"
          placeholder="Enter your email"
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInput}
          className="w-[550px] h-[25px] bg-gray-300 rounded-md p-1"
          placeholder="Enter password"
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="date"
          value={state.date}
          onChange={handleInput}
          className="w-[550px] h-[25px] bg-gray-300 rounded-md p-1"
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={state.age}
          onChange={handleInput}
          className="w-[550px] h-[25px] bg-gray-300 rounded-md p-1"
          placeholder="Enter your age"
        />

        <label>Gender:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={state.gender === "Male"}
              onChange={handleInput}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={state.gender === "Female"}
              onChange={handleInput}
            />{" "}
            Female
          </label>
        </div>

        <label>Country:</label>
        <select
          name="country"
          value={state.country}
          onChange={handleInput}
          className="w-[550px] h-[30px] bg-gray-300 rounded-md p-1"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <label>Profile Picture:</label>
        <input
          type="file"
          name="profilePic"
          ref={fileInputRef}
          onChange={handleInput}
          className="w-[250px] h-[30px] bg-gray-300 rounded-md p-1"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md w-[120px] mt-3 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormReduce;
