import RequestForgotPassword from "./RequestForgotPassword";

export default function ForgotPasswordRequested({ goForgotPassword }) {
  return (
    <div>
      <h1 className="leading-2 mb-4 text-center text-lg font-semibold text-slate-200">
        Check your email
      </h1>
      <p className="text-center text-sm text-slate-300">
        We&apos;ve sent you an email with a link to reset your password.
      </p>
      <hr className="my-4 border-slate-900" />
      <p className="text-center text-xs text-slate-400">
        You didn&apos;t receive an email or your link expired?
      </p>

      <div className="mt-5">
        <RequestForgotPassword goForgotPassword={goForgotPassword} />
      </div>
    </div>
  );
}
