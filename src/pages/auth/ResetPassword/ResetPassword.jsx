import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {
  useResetPasswordMutation,
  useResetTokenValidateMutation,
} from "../../../lib/features/auth/authApi";
import Loading from "../../../components/Loading/Loading";

const ResetPassword = () => {
  const { token } = useParams();
  const [validToken, setValidToken] = useState(false);
  const [resetPassword] = useResetPasswordMutation();
  const [validateResetToken, { data, isLoading: isValidating }] =
    useResetTokenValidateMutation();
  const navigate = useNavigate();


  useEffect(() => {
    const validateToken = async () => {
      try {
        await validateResetToken(token).unwrap();
        setValidToken(true);
      } catch (error) {
        toast.error("Invalid or expired token.", error);
        navigate("/error-page");
      }
    };

    validateToken();
  }, [token, navigate, validateResetToken]);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
    if (!validToken) return;

    try {
      await resetPassword({
        password: values.password,
        email: data.user
      }).unwrap();
      toast.success("Password reset successful");
      navigate("/login");
    } catch (error) {
      toast.error("Password reset failed", error);
    }
  };

  if (!validToken || isValidating) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 w-full h-[100vh] flex justify-center items-center z-[9999]">
        <Loading padding={"10px"} classes={"w-16 h-16"} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reset Password
        </h2>

        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600"
              >
                Reset Password
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
