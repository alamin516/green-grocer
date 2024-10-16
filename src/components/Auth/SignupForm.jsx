import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { styles } from "../../utils/styles";
import { useRegisterMutation } from "../../lib/features/auth/authApi";

// Validation Schema
const signupSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(8),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Please enter your phone number"),
});

const SignupForm = ({ navigate, setRoute }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();
  const [loading, setLoading] = useState(false);

  // Handle Success and Error with Side Effects
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      setLoading(false);
      setRoute("Verification");
    }
    if (error) {
      setLoading(false);
      toast.error(error?.data?.message || "An error occurred.");
    }
  }, [isSuccess, error, data, setRoute]);

  // Formik for Form Management
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", phone: "" },
    validationSchema: signupSchema,
    onSubmit: async ({ name, email, password, phone }) => {
      setLoading(true);
      await register({ name, email, password, phone });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="w-full mt-2 relative mb-1">
          <label htmlFor="name" className={`${styles.label}`}>
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`${
              errors.name && touched.name && "border-red-500"
            } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 p-2 block">{errors.name}</span>
          )}
        </div>
        <div className="w-full mt-2 relative mb-1">
          {/* Email Input */}
          <label htmlFor="email" className={`${styles.label}`}>
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="emailaddress@****.com"
            className={`${
              errors.email && touched.email && "border-red-500"
            } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 p-2 block">{errors.email}</span>
          )}
        </div>
        <div className="w-full mt-2 relative mb-1">
          {/* Phone Input */}
          <label htmlFor="phone" className={`${styles.label} mt-4`}>
            Enter your phone number
          </label>
          <input
            type="text"
            id="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="01712345678"
            className={`${
              errors.phone && touched.phone && "border-red-500"
            } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
          />
          {errors.phone && touched.phone && (
            <span className="text-red-500 p-2 block">{errors.phone}</span>
          )}
        </div>
        {/* Password Input */}
        <div className="w-full mt-2 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            Enter your password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="********"
            className={`${
              errors.password && touched.password && "border-red-500"
            } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
          />
          {showPassword ? (
            <Visibility
              className="absolute bottom-2 right-2 z-10 cursor-pointer dark:text-[#666]"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <VisibilityOff
              className="absolute bottom-2 right-2 z-10 cursor-pointer dark:text-[#666]"
              onClick={() => setShowPassword(true)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 p-2 block">{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full mt-2">
          <button
            type="submit"
            className="flex justify-center items-center px-6 rounded-md bg-[#fa9f00] text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer"
          >
            {loading ? (
              <span className="inline-block w-6 h-6 border-2 border-white rounded-full border-t-transparent border-double animate-spin transition-all duration-200"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        {/* <div className="w-full mt-8 text-center">
          <p className={`${styles.label}`}>Or join with</p>
        </div> */}

        {/* Social Login Buttons */}
        {/* <div className="flex items-center justify-center my-3 gap-2">
          <Google className="cursor-pointer text-[#666] bg-[#fa9f00] dark:bg-white p-2 rounded-full !w-10 !h-10" />
          <GitHub className="cursor-pointer text-[#666] bg-[#fa9f00] dark:bg-white p-2 rounded-full !w-10 !h-10" />
        </div> */}

        {/* Redirect to Login */}
        <div className="w-full mt-8 text-center">
          <p className={`${styles.label} text-[#666]`}>
            Already have an account?{" "}
            <span
              className="text-[#008459] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
