import LoginForm from "@/components/common/SignUpComponents/LoginForm";

function Login() {
  return (
    <div className="grid lg:h-[80vh] grid-cols-1 lg:grid-cols-2  justify-center items-center  my-10 ">
      <img
        className="w-full h-full object-cover overflow-hidden hidden  lg:flex justify-center items-center"
        src="https://res.cloudinary.com/dtf9brzuu/image/upload/v1757871437/E-commerce/SignImage_dvjw83.png"
        alt=""
      />
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
