import React from "react";
import ViewButton from "./View_Button";
import useMyFormHook from "./useMyFormHook";

const RegistrationForm = () => {
  const [registrationModel, handleChange, registrationModelError, dropOption, checkBoxList,
    handleImageChange, Validate, handleReset, handleSubmit] = useMyFormHook({
      name: "",
      email: "",
      phoneNumber: "",
      selectCity: false,
      radio: "",
      checkbox: false,
      image: "",
    })

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              id="name"
              // required // --- if we use "required" in <input>,<select> or <textarea> then it will validated by browser,so to add custome validation we use no validate in <form>
              onChange={handleChange}
              value={registrationModel.name}
              autoComplete="off"
            />
            {registrationModelError.nameError && <div>Enter valid name</div>}
          </div>
        </div>

        {/* Email */}
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              id="email"
              // required
              onChange={handleChange}
              value={registrationModel.email}
            />
            {registrationModelError.emailError && <div>Enter valid email</div>}
            <div className="valid-feedback">Look Good</div>
          </div>
        </div>

        {/* Mobile Number */}
        <div className="row mb-3">
          <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
            Mobile Number
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              id="phoneNumber"
              // required
              onChange={handleChange}
              value={registrationModel.phoneNumber}
              maxLength={10}
            />
          </div>
          {registrationModelError.phoneNumberError && (
            <div>Enter valid phone number</div>
          )}
        </div>

        {/* Selection */}
        <div className="row mb-3">
          <label
            className="col-form-label col-sm-2 pt-0"
            htmlFor="selectCity"
          >
            City
          </label>
          <div className="col-sm-2">
            <select
              className="form-select"
              id="selectCity"
              name="selectCity"
              // required
              onChange={handleChange}
              value={registrationModel.selectCity}
            >
              <option defaultValue>Select Your City</option>
              {dropOption.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}

              {/* <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>
            {registrationModelError.selectCityError && <div>Select City</div>}
          </div>
        </div>

        {/* radio button */}
        <fieldset className="row mb-3">
          <label className="col-form-label col-sm-2 pt-0">Gender</label>
          <div className="col-sm-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="radio"
                // required
                value="Male"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="radio"
                value="Female"
                // required
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
          </div>
          {registrationModelError.radioError && <div>Select Gender</div>}
        </fieldset>

        {/* check box */}
        <div className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Hobby</legend>
          <div className="col-sm-1">
            <div className="checkBoxList">
              {checkBoxList.map((select) => (
                <label className="form-check" key={select.valueCheck}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    // required
                    onChange={handleChange}
                    value={registrationModel.checkbox}
                  />
                  {select.labelCheck}
                </label>
              ))}
            </div>
          </div>
          {registrationModelError.checkboxError && <div> Select checkbox</div>}
        </div>

        {/* file upload */}
        <div className="mb-3">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="form-control"
            aria-label="file example"
            style={{ width: 450, marginLeft: 68 }}
            // required
            onChange={handleImageChange}
          />
          {registrationModel.image && (
            <div>
              <img
                src={registrationModel.image}
                style={{ width: 300, marginTop: 24, marginRight: 691 }}
                alt="Thumb"
              />
            </div>
          )}
          {registrationModelError.imageError && <div>Upload Image</div>}
        </div>

        <div className="inline" style={{ marginTop: 30 }}>
          {/* Submit button */}
          <button type="submit" className="btn btn-outline-success" onClick={Validate} style={{ width: 90 }}>
            Submit
          </button>

          {/* to display details in popup */}
          <ViewButton
            newname={registrationModel.name}
            newemail={registrationModel.email}
            newcity={registrationModel.selectCity}
            newradio={registrationModel.radio}
            newmobile={registrationModel.phoneNumber}
            newimage={registrationModel.image}
          />

          {/* Reset button */}
          <button
            type="reset"
            className="btn btn-outline-primary"
            style={{ width: 90, marginTop: 15 }}
            onClick={handleReset}
          >
            Reset all
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};
export default RegistrationForm;
