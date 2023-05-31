import { React, useState } from "react";
import * as css from "./style";
import { Steps, Radio, Divider } from "antd";
import RegulerButton from "../../../component/button";

const ChooseDesign = () => {

    const { Step } = Steps;
    const [radioBtn, setRadioBtn] = useState()
    const [nextStep, setNextStep] = useState(false)
    const description = 'This is a description.';
    const onRadioChange = (e) => {
        setRadioBtn(e.target.value)
    }
    const onNextStepClick = () => {
        setNextStep(true)
    }
    return (<css.ChooseDesignStyled>
        <Steps current={2}>
            <Step title="Create Card" description="Enter detail for card" />
            <Step title="Customization" description="Link with social media" />
            <Step title="Choose design" description="Select card design" />
        </Steps>
        <br />
        <br />
        {nextStep == false ? <div>
            <h3>Choose your design</h3>
            <br />
            <Radio.Group >
                <div className="iphoneimage-container">

                    <div>
                        <div className="inner-content">
                            <p className="username">Rohan</p>
                            <img className="inner-image" src="images/i3.png" alt="alternative" />
                        </div>
                        <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                        <br />
                        <Radio value={"white"} onChange={(e) => { onRadioChange(e) }}>White</Radio>
                    </div>
                    <div>
                        <div className="inner-content">
                            <p className="username black">Rohan</p>
                            <img className="inner-image" src="images/i1.jpg" alt="alternative" />
                        </div>
                        <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                        <br />
                        <Radio value={"black"} onChange={(e) => { onRadioChange(e) }}>Black</Radio>
                    </div>
                    <div>
                        <div className="inner-content">
                            <p className="username cream">Rohan</p>
                            <img className="inner-image-3" src="images/i2.png" alt="alternative" />
                        </div>
                        <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                        <br />
                        <Radio value={"cream"} onChange={(e) => { onRadioChange(e) }}>Cream</Radio>

                    </div>

                </div>

            </Radio.Group>
            {
                radioBtn != undefined ? <div className="next-btn">
                    <RegulerButton onClick={() => onNextStepClick()} text={"Next Step"} />
                </div> : ''
            }:''
        </div> : <div>
            <h3>Second Part</h3>
            <Steps
                current={0}
                // onChange={onChange}
                direction="vertical"
                items={[
                    {
                        title: 'Step 1',
                        description,
                    },
                    {
                        title: 'Step 2',
                        description,
                    },
                    {
                        title: 'Step 3',
                        description,
                    },
                ]}
            />


        </div>
        }

        {/* <div className="iphoneimage-container">
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
            </div> */}


    </css.ChooseDesignStyled >)
}

export default ChooseDesign