import { Link } from "react-router-dom";

export default function RouteError() {
	return (
		<>
			<p>Page not found</p>
			<Link to="/">Go to Home</Link>
		</>
	);
}
