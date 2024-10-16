import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useForgetPasswordMutation } from "../../../lib/features/auth/authApi";
import { styles } from "../../../utils/styles";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useLoadUserQuery } from "../../../lib/features/api/apiSlice";
import Loading from "../../../components/Loading/Loading";

const schema = Yup.object().shape({
  email: Yup.string()
    .test("Invalid email!", function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    })
    .required("Please enter your email"),
});

const ForgetPassword = () => {
  const [forgetPassword, { data, error: forgetError, isLoading, isSuccess }] =
    useForgetPasswordMutation();
  const { data: userData, isLoading: userLoading } =
    useLoadUserQuery("loadUser");
  const navigate = useNavigate();

  const user = userData?.user;

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (forgetError) {
      toast.error(forgetError?.data?.message || "An error occurred.");
    }
  }, [data, isSuccess, forgetError]);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: async ({ email }) => {
      await forgetPassword({ email }).unwrap();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  if (userLoading) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/90 w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  if (user && user._id) {
    return navigate("/");
  }

  return (
    <>
      <Breadcrumbs pageTitle="Forget Password" />
      <div className="w-full mb-10">
        <div className="w-full lg:w-[66%] mx-auto px-[15px]">
          {/* Heading start */}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">
                Forget Password
              </span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Form */}
          <div className="p-4">
            <form onSubmit={handleSubmit} className="">
              <div className="w-full">
                <label htmlFor="email" className={`${styles.label} col-span-5`}>
                  Enter your email
                </label>
                <input
                  type="text"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className={`${
                    errors.email && touched.email && "border-red-500"
                  } w-full text-black dark:text-[#666] bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 p-2 block">{errors.email}</span>
                )}
              </div>
              <div className="w-full mt-2">
                <button
                  type="submit"
                  className="flex justify-center items-center px-6 rounded-md bg-[#fa9f00] text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer"
                >
                  {isLoading ? (
                    <span className="inline-block w-6 h-6 border-2 border-white rounded-full border-t-transparent border-double animate-spin transition-all duration-200"></span>
                  ) : (
                    "submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
