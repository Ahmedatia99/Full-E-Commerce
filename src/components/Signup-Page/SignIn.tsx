import Breadcrumbs from "@/components/common/Breadcrumbs";
import LoginForm from "@/components/Signup-Page/LoginForm";

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
            src="https://res.cloudinary.com/dx07dkalc/image/upload/w_300,q_auto,f_auto/v1759134960/Login_vzwnrp.jpg"
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
