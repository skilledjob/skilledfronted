import OtpInput from "react-otp-input";

/**
 * @name Otp
 * @description This component represents the OTP input field.
 * @param {string} otp - The OTP value.
 * @param {function} setOtp - The function to set the OTP value.
 * @example
 * ```jsx
 *      <Otp otp={otp} setOtp={setOtp} />
 * ```
 */

export default function Otp({ otp, setOtp }) {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      isInputNum={true}
      shouldAutoFocus={true}
      numInputs={4}
      inputType="number"
      inputStyle={{
        background: "#262525",
        borderRadius: "8px",
        border: "none",
        outline: "none",
        width: "54px",
        height: "54px",
        fontSize: "20px",
        color: "white",
        fontWeight: "400",
        margin: "0 0.5rem",
      }}
      renderInput={({ index, ref, ...rest }) => (
        <input ref={ref} {...rest} type="text" />
      )}
    />
  );
}
