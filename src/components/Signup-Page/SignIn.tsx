import Breadcrumbs from "@/components/common/Breadcrumbs";
import LoginForm from "@/components/Signup-Page/LoginForm";
import signupImg from "@/assets/images/login-illustration.jpg"
function SignIn() {
  return (
    <div >
      {/*  Breadcrumbs */}
      <Breadcrumbs />

      <main
        className="grid lg:h-auto grid-cols-1 lg:grid-cols-2 justify-center items-center"
        role="main"
        aria-labelledby="login-heading"
      >
        {/*  Decorative/illustration image */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-lg"
            alt="Illustration showing login and shopping experience"
            src={signupImg}
            loading="lazy"
          />
        </div>

        {/*  Login Form */}
        <section className="w-full" aria-labelledby="login-section">
          {/* Screen readers only */}
          <h1 id="login-heading" className="sr-only">
            Login Page
          </h1>

          <LoginForm />
        </section>
      </main>
    </div>
  );
}

export default SignIn;
