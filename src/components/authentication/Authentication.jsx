

import SignUp from "../Sign-up-Form/SignUp";
import SignIn from "../sign-in/SignIn";
import "./AuthStyles.scss";

const Authentication = () => {
	return (
		<div className="authentication-container">
      <SignIn />
      <SignUp />
		</div>
	);
};

export default Authentication;
