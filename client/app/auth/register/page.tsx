import AuthForm from "../../../components/AuthForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
  <div>
  <AuthForm type="signup" />
  <p className="mt-4 text-sm text-gray-600 text-center">
            Already Registerd?{" "}
            <Link
              href="/auth/login"
              className="text-blue-500 hover:underline"
            >
              Click here to Login
            </Link>
          </p>
  </div>
  )
};

export default RegisterPage;
