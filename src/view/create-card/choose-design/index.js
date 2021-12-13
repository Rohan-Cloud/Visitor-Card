import { React } from "react";
import * as css from "./style";
import { Steps, Radio } from "antd";

const ChooseDesign = () => {

    const { Step } = Steps;
    return (<css.ChooseDesignStyled>
        <Steps current={2}>
            <Step title="Create Card" description="Enter detail for card" />
            <Step title="Customization" description="Link with social media" />
            <Step title="Choose design" description="Select card design" />
        </Steps>
        <br />
        <br />
        <h3>
            Choose your design
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
                        <Radio value={1}>Blue</Radio>
                    </div>
                    <div>
                        <div className="inner-content">
                            <img className="inner-image" src="images/i1.jpg" alt="alternative" />
                        </div>
                        <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                        <br />
                        <Radio value={2}>Blue</Radio>
                    </div>
                    <div>
                        <div className="inner-content">
                            <img className="inner-image-3" src="images/i2.png" alt="alternative" />
                        </div>
                        <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                        <br />
                        <Radio value={3}>Blue</Radio>
                    
                </div>

                </div>
            </Radio.Group>
            {/* <div className="iphoneimage-container">
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
                <img className="iphone-img" src="images/iphone.png" alt="alternative" />
            </div> */}

        </h3>
    </css.ChooseDesignStyled>)
}

export default ChooseDesign