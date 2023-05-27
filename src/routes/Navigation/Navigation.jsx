import { Link, Outlet } from "react-router-dom"
import "./NavigationStyles.scss";
import { ReactComponent as MainLogo } from "../../assests/crown.svg";
export default function Navigation() {
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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
				</div>
			</div>
			<Outlet />
		</>
  );
}
