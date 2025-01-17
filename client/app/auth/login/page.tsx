import Link from "next/link";
import AuthForm from "../../../components/AuthForm";

const LoginPage = () => {
  return(
  <>
   <AuthForm type="login" />
  <p className="mt-4 text-sm text-gray-600 text-center">
            New user?{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 hover:underline"
            >
              Click here to register
            </Link>
          </p>
  </>)
};

export default LoginPage;