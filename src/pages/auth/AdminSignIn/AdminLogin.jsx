import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../../../utils/styles";
import { useLoginMutation } from "../../../lib/features/auth/authApi";
import Loading from "../../../components/Loading/Loading";
import { useSelector } from "react-redux";
import Logo from "../../../assets/images/logo_green_grocer.webp";

// Validation Schema
const schema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .test("emailOrPhone", "Invalid email or phone number!", function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,14}$/; // Simple phone regex (10-14 digits)
      return emailRegex.test(value) || phoneRegex.test(value);
    })
    .required("Please enter your email or phone number"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
});

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { error, isSuccess, isLoading }] = useLoginMutation();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle login success and redirection
  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Login successfully!");
      setLoading(false);

      if (
        user?.role === "admin" ||
        user?.role === "manager" ||
        user?.role === "editor"
      ) {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/profile");
      }
    }
    if (error) {
      setLoading(false);
      toast.error(error?.data?.message || "An error occurred.");
    }
  }, [isSuccess, error, navigate, user]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (
        user.role === "admin" ||
        user.role === "manager" ||
        user.role === "editor"
      ) {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/user/profile", { replace: true });
      }
    }
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: { emailOrPhone: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ emailOrPhone, password }) => {
      setLoading(true);
      await login({ emailOrPhone, password });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-transparent w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-center mb-5 bg-[#008459]/80 py-5">
        <Link to="/">
          <img src={Logo} alt="" className="h-[50px] lg:h-auto max-w-[100%] mx-auto" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailOrPhone" className={`${styles.label}`}>
          Enter your email or phone number here
        </label>
        <input
          type="text"
          id="emailOrPhone"
          value={values.emailOrPhone}
          onChange={handleChange}
          placeholder="Enter email or phone number"
          className={`${
            errors.emailOrPhone && touched.emailOrPhone && "border-red-500"
          } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
        {errors.emailOrPhone && touched.emailOrPhone && (
          <span className="text-red-500 p-2 block">{errors.emailOrPhone}</span>
        )}

        <div className="w-full mt-2 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            Enter your password here
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

        <div className="w-full mt-2">
          <button
            type="submit"
            className="flex justify-center items-center px-6 rounded-md bg-[#fa9f00] text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer"
          >
            {loading ? (
              <span className="inline-block w-6 h-6 border-2 border-white rounded-full border-t-transparent border-double animate-spin transition-all duration-200"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className="w-full my-8 text-center">
          <Link
            to="/forget-password"
            className={`${styles.label} hover:text-green-700`}
          >
            Forget Password
          </Link>
        </div>
        <div>
          <Link to={"/"} className="flex items-center justify-center gap-2 text-sm">
            <ArrowBack className="!text-sm" /> Go to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
