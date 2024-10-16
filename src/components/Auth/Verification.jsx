import { ShieldRounded } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useActivationMutation } from "../../lib/features/auth/authApi";
import { styles } from "../../utils/styles";

const Verification = ({ navigate }) => {
  const { token } = useSelector((state) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState(false);
  const [loading, setLoading] = useState(false);


  // Separate useRef for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      setLoading(false)
      navigate("/login");
    }
    if (error) {
      toast.error(error.data?.message || "An error occurred.");
      setLoading(false);
      setInvalidError(true);
    }
  }, [isSuccess, error, navigate]);

  const [verifyNumber, setVerifyNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 6) {
      setInvalidError(true);
      return;
    }
    setLoading(true);
    await activation({
      activation_token: token,
      activation_code: verificationNumber,
    });
  };

  const handleInputChange = (index, value) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    // Automatically move to the next input
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className="p-4">
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <div className="w-full flex items-center justify-center mt-3">
        <div className="w-[80px] h-[80px] rounded-full bg-blue-500 flex items-center justify-center">
          <ShieldRounded className="text-white !text-6xl" />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full mx-auto flex items-center justify-center gap-1">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="text"
            key={key}
            ref={inputRefs[index]}
            className={`w-[55px] h-[55px] bg-transparent border-[3px] rounded-[10px] flex items-center text-center text-black justify-center text-[18px] font-Poppins outline-none ${
              invalidError
                ? "shake border-red-500"
                : "border-green-500"
            }`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onFocus={(e) => e.target.select()} // Select the input content on focus
          />
        ))}
      </div>
      <br />
      <br />
      <button
            onClick={verificationHandler}
            className="flex justify-center items-center px-6 rounded-md bg-[#fa9f00] text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer"
          >{loading ? <span className="inline-block w-6 h-6 border-2 border-white rounded-full border-t-transparent border-double animate-spin transition-all duration-200"></span>:"Verify OTP"}</button>
      <br />
      <div className="w-full mt-8 text-center">
        <p className={`${styles.label}`}>
          Go back to sign in?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verification;
