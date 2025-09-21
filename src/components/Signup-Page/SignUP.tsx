import Breadcrumbs from "@/components/common/Breadcrumbs";
import SignUpForm from "@/components/Signup-Page/SignForms";
import signupImg from "@/assets/images/login-illustration.jpg";
function SignUP() {
  return (
      <div >
      {/*  Breadcrumbs */}
      <Breadcrumbs />

      <main
        className="grid lg:h-auto grid-cols-1 lg:grid-cols-2 justify-center items-center my-10"
        role="main"
        aria-labelledby="signup-heading"
      >
        {/*  Decorative/illustration image */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-lg"
            src={signupImg}
            alt="Illustration showing sign up and shopping experience"
            loading="lazy"
          />
        </div>

        {/*  Sign Up Form */}
        <section className="w-full" aria-labelledby="signup-section">
          {/* Screen readers only */}
          <h1 id="signup-heading" className="sr-only">
            Sign Up Page
          </h1>

          <SignUpForm />
        </section>
      </main>
    </div>
  )
}

export default SignUP