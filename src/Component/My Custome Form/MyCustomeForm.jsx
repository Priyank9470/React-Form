import React, { useState } from "react";
import useFormHook from "./useFormHook";

function MyCustomeForm() {
    const [formInput, handleChange] = useFormHook({
        firstName: "",
        lastName: ""
    });

    const handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        alert(`Hello ${formInput.firstName} ${formInput.lastName}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>This is basic form</h1>
            <div>
                <label>First Name: </label>
                <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    value={formInput.firstName}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <label>Last Name: </label>
                <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    value={formInput.lastName}
                    onChange={handleChange}
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default MyCustomeForm;