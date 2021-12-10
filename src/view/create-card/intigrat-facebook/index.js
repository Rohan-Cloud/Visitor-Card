import { React, useState } from "react";
import { Steps, Card } from "antd";

import * as css from "./style";

import RegulerButton from "../../../component/button";

import * as constant from "../../../constant";
import 'antd/dist/antd.css';
import {
    useHistory, Link, Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
const IntegrateFacebook = () => {
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
        <css.IntegrateFacebookStyled>
            <Steps current={1}>
                <Step title="Create Card" description="Enter detail for card" />
                <Step title="Customization" description="Link with social media" />
                <Step title="Choose design" description="Select card design" />
            </Steps>,
            <h3>
                Make your card as good as you
            </h3>
            <br />
            <div className="cardClass"> 
                <Card style={{ width: 500 ,marginRight:"5%"}}>
                    <p>To Make your work simpler, we add one more feture for you</p>
                    <p>Just link your facebook account with few click</p>
                    <RegulerButton
                        className="primary-button"
                        type="primary"
                        text={"Link With Facebook"}
                        onClick={(e) => { nextStepClick(e) }}
                    />
                </Card>
                <Card style={{ width: 500 }}>
                    <p>Don't Have Facebook Account</p>
                    <p>Not an Issue</p>
                    <RegulerButton
                        className="primary-button"
                        type="secondary"
                        text={"CONTINUE WITHOUT FACEBOOK"}
                        onClick={(e) => { nextStepClick(e) }}
                    />
                </Card>
            </div>
        </css.IntegrateFacebookStyled>
    )
}

export default IntegrateFacebook