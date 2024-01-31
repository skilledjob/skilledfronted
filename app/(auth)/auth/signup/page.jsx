import SignupForm from "./components/SignupForm";

export const metadata = {
  title: "Signup Page",
  description: "Signup Page",
};

export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm />
    </div>
  );
}
