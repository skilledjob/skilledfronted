import SigninForm from "./components/SigninForm";

export const metadata = {
  title: "Login Page",
  description: "Login Page",
};

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <SigninForm />
    </div>
  );
}
