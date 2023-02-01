import "./SelectCityType";
import SelectCityType from "./SelectCityType";

import { React, useState } from "react";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  cityName: "",
  startDate: "",
  endDate: "",
  code: "",
  completed: "",
};

const NewCityForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const dataChangeHandler = (e) => {
    console.log("dataChangeHandler called");

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewCitySubmit = (e) => {
    e.preventDefault();
    props.addCityCallbackFunc(formData);
  };
  return (
    <div>
      <form onSubmit={handleNewCitySubmit}>
        <label htmlFor="cityName">City</label>
        <input
          type="text"
          id="cityName"
          name="cityName"
          value={formData.cityName}
          onChange={dataChangeHandler}
        ></input>
        {/* <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={dataChangeHandler}
        ></input>
              <SelectCityType></SelectCityType>;
              date range pick MUI */}

        <button className="button-add-city" type="submit">
          Submit New City
        </button>
      </form>
    </div>
  );
};

NewCityForm.propTypes = {
  addCityCallbackFunc: PropTypes.func.isRequired,
};

export default NewCityForm;
