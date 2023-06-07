import Userfront from "@userfront/react";

const LogoutButton = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UILOGOUTID,
});
const Logout = () => {
  return (
    <div>
      <h1>register here..</h1>
      <LogoutButton />
    </div>
  );
};

export default Logout;
