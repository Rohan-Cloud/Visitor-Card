import { React} from "react";
import HomeLayout from "../../view/home";

import * as constant from "../../../src/constant.js";
import {
	useHistory,

	Switch,
	Route,
	BrowserRouter as Router,

} from "react-router-dom";
// import GetInformation from "../../view/create-card/get-info";
import GetInfoMainLayout from "../../view/create-card";
const MainLayout = () => {
	const history = useHistory();



	return (<>
		<Router history={Router}>
			<Switch>
				<Route exact path={constant.BASE_URL + "/"}>
					<HomeLayout />
				</Route>
				<Route exact path={constant.BASE_URL + "/home"}>
					<HomeLayout />
				</Route>
				<Route exact path={constant.BASE_URL + "/create-your-own"}>
					<GetInfoMainLayout />
				</Route>
			</Switch>

		</Router>

	</>)
}

export default MainLayout



