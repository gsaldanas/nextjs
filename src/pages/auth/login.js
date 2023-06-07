import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UILOGINID,
});
const Login = () => {
  return (
    <div>
      <h1>register here..</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
