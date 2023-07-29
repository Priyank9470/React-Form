import { useState } from "react";
import { ValidateEmail, ValidateName, ValidatePhone } from "./Validation";

function useMyFormHook(initial) {
    const [registrationModel, setRegistrationModel] = useState(initial);
    function handleChange(event) {
        setRegistrationModel({
            ...registrationModel,
            [event.target.id]: event.target.value,
        });
    }
    const [registrationModelError, setRegistrationModelError] = useState({
        nameError: false,
        emailError: false,
        phoneNumberError: false,
        selectCityError: false,
        radioError: false,
        checkboxError: false,
        imageError: false,
    });
    const dropOption = [
        { label: "Gandhinagar", value: 1 },
        { label: "Surat", value: 2 },
        { label: "Vapi", value: 3 },
    ];
    const checkBoxList = [
        { labelCheck: "Cricket", valueCheck: 1 },
        { labelCheck: "Football", valueCheck: 2 },
    ];
    const handleImageChange = (e) => {
        setRegistrationModel({ ...registrationModel, image: URL.createObjectURL(e.target.files[0]) });
    };
    const Validate = () => {
        if (!ValidateName.test(registrationModel.name)) {
            setRegistrationModelError({ nameError: true });
        } else if (!ValidateEmail.test(registrationModel.email)) {
            setRegistrationModelError({
                emailError: true,
            });
        } else if (!ValidatePhone.test(registrationModel.phoneNumber)) {
            setRegistrationModelError({
                phoneNumberError: true,
            });
        } else if (!registrationModel.selectCity) {
            setRegistrationModelError({
                selectCityError: true,
            });
        } else if (!registrationModel.radio) {
            setRegistrationModelError({
                radioError: true,
            });
        } else if (!registrationModel.checkbox) {
            setRegistrationModelError({
                checkboxError: true,
            });
        } else if (!registrationModel.image) {
            setRegistrationModelError({
                imageError: true,
            });
        } else {
            setRegistrationModelError({ imageError: "", nameError: "" });
        }
    };
    const handleReset = () => {
        setRegistrationModel(""); setRegistrationModelError(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return [registrationModel, handleChange, registrationModelError, dropOption, checkBoxList, handleImageChange, Validate, handleReset, handleSubmit];
}

export default useMyFormHook;