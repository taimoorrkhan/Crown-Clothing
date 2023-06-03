import { Link, Outlet } from "react-router-dom"
import React,{useContext} from "react";
import "./NavigationStyles.scss";
import { ReactComponent as MainLogo } from "../../assests/crown.svg";
import { UserContext } from "../../Contexts/UserContext";
import { signOutAuthUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/Cart/CartIcon";
import CartDropDown from "../../components/Cart/CartDropDown";
import { CartContext } from "../../Contexts/CartContext";
export default function Navigation() {
	const { currentUser} = useContext(UserContext);
	
		const { isCartOpen } = useContext(CartContext);

  return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<MainLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					<Link className="nav-link" to="/shop">
						Contact
					</Link>
					{
						currentUser ? ( 
							<span className="nav-link" to="/signout" onClick={signOutAuthUser}>
								Sign Out
							</span>
						) : (
							<Link className="nav-link" to="/auth">
            Sign In
							</Link>
						)
					}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropDown />}
			</div>
			<Outlet />
			
		</>
  );
}
