import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
// At least 5 characters,
// must contain at least 1 uppercase letter,
// must contain at least 1 lowercase letter,
// and 1 number

export const basicSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Please enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "please create a stronger password!" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
