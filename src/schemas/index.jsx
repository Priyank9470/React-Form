import * as myyup from "yup"

export const validate = myyup.object({
    name: myyup.string().min(2).max(20).required("Please Enter your name"),
    email: myyup.string().email().required("Please Enter your email"),
    password: myyup.string().min(6).required("Please Enter your password"),
    c_password: myyup.string().oneOf([myyup.ref("password"), null], "Password must be same").required()
})