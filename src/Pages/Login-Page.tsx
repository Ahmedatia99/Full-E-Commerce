import Breadcrumbs from "@/components/common/Breadcrumbs";
import LoginForm from "@/components/Signup-Page/LoginForm";

function Login() {
  return (
    <div className="container mx-auto px-5">
      {/* ✅ Breadcrumbs */}
      <Breadcrumbs />

      <main
        className="grid lg:h-auto grid-cols-1 lg:grid-cols-2 justify-center items-center my-10"
        role="main"
        aria-labelledby="login-heading"
      >
        {/* ✅ Decorative/illustration image */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-lg"
            src="https://res.cloudinary.com/dtf9brzuu/image/upload/v1757871437/E-commerce/SignImage_dvjw83.png"
            alt="Illustration showing login and shopping experience"
            loading="lazy"
          />
        </div>

        {/* ✅ Login Form */}
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

export default Login;
