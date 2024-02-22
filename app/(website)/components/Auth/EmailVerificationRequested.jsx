export default function EmailVerificationRequested() {
  return (
    <div>
      <h1 className="leading-2 mb-4 text-center text-lg font-semibold text-slate-200">
        Please confirm your email address
      </h1>
      <p className="text-center text-sm text-slate-300">
        We sent an verfication email Please click the link in the email to
        activate your account.
      </p>
      {/* <hr className="my-4 border-slate-900" />
      <p className="text-center text-xs text-slate-400">
        You didn&apos;t receive an email or your link expired?
      </p> */}

      {/* <div className="mt-5">
        <RequestEmailVerification goForgotPassword={goForgotPassword} />
      </div> */}
    </div>
  );
}
