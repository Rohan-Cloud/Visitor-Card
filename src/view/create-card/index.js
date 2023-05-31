import { React } from "react";
import * as css from "./style";
import * as constant from "../../../src/constant";
import {
	useHistory, Link, Switch,
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
import GetInformation from "./get-info/index";
import IntegrateFacebook from "./intigrat-facebook/index";
import ChooseDesign from "./choose-design";
const GetInfoMainLayout = () => {
	const history = useHistory();
	return (
		<css.GetInfoMainStyled>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ">
				<Link className="navbar-brand logo-image" to={constant.BASE_URL + "/home"} onClick={() => { history.push(constant.BASE_URL + '/home') }}><p className="logoname">MY.IDENTITY</p></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-awesome fas fa-bars"></span>
					<span className="navbar-toggler-awesome fas fa-times"></span>
				</button>


			</nav>
			<div className="middleContent">
			
				<Router history={Router}>
					<Switch>
						<Route exact path={constant.BASE_URL + "/create-your-own"}>
							<GetInformation />
						</Route>
						<Route exact path={constant.BASE_URL + "/integrate-facebook"}>
							<IntegrateFacebook />
						</Route>
						<Route exact path={constant.BASE_URL + "/choose-design"}>
							<ChooseDesign />
						</Route>
					</Switch>
				</Router>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<p className="p-small">Copyright © 2023 <a href="https://inovatik.com">Inovatik</a> - All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
		</css.GetInfoMainStyled>)
}

export default GetInfoMainLayout