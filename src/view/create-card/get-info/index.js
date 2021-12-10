import { React, useState } from "react";
import { Steps } from "antd";

import * as css from "./style";
import TextBox from "../../../component/textbox";
import RegulerButton from "../../../component/button";
import * as constant from "../../../constant";
import 'antd/dist/antd.css';
import {
	useHistory, Link, Switch,
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
const GetInformation = () => {
    const history = useHistory();
    const { Step } = Steps;
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        mobilePhone: "",
        Email: "",
        password: ""
    })
    const nextStepClick = () => {
        history.push(constant.BASE_URL + '/integrate-facebook') 
    }
    return (
        <css.GetInfoStyled>
            <Steps current={0}>
                <Step title="Create Card" description="Enter detail for card" />
                <Step title="Customization" description="Link with social media" />
                <Step title="Choose design" description="Select card design" />
            </Steps>,
            <h3>
                Create your card
            </h3>
            <p>Enter related details</p>
            <br />
            <div className="formCls">
                <p className="textLable">First Name</p>
                <TextBox id="firstName" className="firstName" />
                <br />
                <p className="textLable">Last Name</p>
                <TextBox id="lastName" className="lastName" />
                <br />
                <p className="textLable">Mobile Number</p>
                <TextBox id="mobilePhone" className="mobilePhone" />
                <br />
                <p className="textLable">Email ID</p>
                <TextBox id="email" className="email" />
                <br />
                <p className="textLable">Password</p>
                <TextBox id="password" className="password" />
                <br />
                <RegulerButton
                    className="primary-button"
                    type="primary"
                    text={"Next Step"}
                    onClick={(e) => { nextStepClick(e) }}
                />
            </div>
        </css.GetInfoStyled>
    )
}

export default GetInformation