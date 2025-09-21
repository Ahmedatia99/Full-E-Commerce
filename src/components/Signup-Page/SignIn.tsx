import Breadcrumbs from "@/components/common/Breadcrumbs";
import LoginForm from "@/components/Signup-Page/LoginForm";
import signupImg from "@/assets/images/login-illustration.jpg";

function SignIn() {
  return (
    <div>
      {/* Breadcrumbs */}
      <Breadcrumbs />

      <main
        className="grid lg:h-auto grid-cols-1 lg:grid-cols-2 justify-center items-center"
        role="main"
        aria-labelledby="login-heading"
      >
        <div className="hidden lg:flex justify-center items-center">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-lg"
            alt="Login Illustration"
            src={signupImg}
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <LoginForm />
      </main>
    </div>
  );
}

export default SignIn;
