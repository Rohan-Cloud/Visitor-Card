import { React, useEffect } from "react";
import * as constant from "../../../src/constant";
import {
    useHistory, Link
} from "react-router-dom";
import * as css from "./style";
const HomeLayout = () => {
    const history = useHistory();
    useEffect(() => {
        history.push(['/home'])
    }, [])
    return (<css.HomeStyled>
        {/* <div class="spinner-wrapper">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div> */}

        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <Link class="navbar-brand logo-image" to={constant.BASE_URL + "/home"} onClick={() => { history.push(constant.BASE_URL + '/home') }}><p className="logoname">MY.IDENTITY</p></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-awesome fas fa-bars"></span>
                <span class="navbar-toggler-awesome fas fa-times"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#register">REGISTER <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#aboutus">ABOUT US</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#contact">CONTACT</a>
                    </li>
                </ul>
                <span class="nav-item social-icons">
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
            </div>
        </nav>
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <div class="countdown">
                                <span id="clock"></span>
                            </div>
                            <h1>Virtual Buisness Card</h1>
                            <p class="p-large">Design your business card in 2 minutes - it's easy, elegant and free.</p>
                            <Link class="btn-solid-lg page-scroll" to={constant.BASE_URL + "/create-your-own"} onClick={() => { history.push(constant.BASE_URL + '/create-your-own') }}>Create Your Own</Link>
                            <a class="btn-outline-lg page-scroll" href="#instructor">DISCOVER</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outer-container">
                <div class="slider-container">
                    <div class="swiper-container image-slider-1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" >
                                <img class="img-fluid1" src="images/front-image.jpg" alt="alternative" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </header>

        <div id="register" class="form-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Register Using The Form</h2>
                            <p>It's easy to register for the course, just fill out the form and click submit</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Your information</strong> is required to complete the registration</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>It's safe with us</strong> and will not be used for marketing</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>You will receive</strong> a confirmation email in less than 24h</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-container">
                            <form id="registrationForm" data-toggle="validator" data-focus="false">
                                <div class="form-group">
                                    <input type="text" class="form-control-input" id="rname" name="rname" required />
                                    <label class="label-control" for="rname">Complete name</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control-input" id="remail" name="remail" required />
                                    <label class="label-control" for="remail">Email address</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                    <label class="label-control" for="rphone">Phone number</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group checkbox">
                                    <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />I've read and agree to MY.IDENTITY written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control-submit-button">REGISTER</button>
                                </div>
                                <div class="form-message">
                                    <div id="rmsgSubmit" class="h3 text-center hidden"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="slider-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="p-small">FEATURED IN</p>


                        <div class="slider-container">
                            <div class="swiper-container image-slider-2">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-1.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-2.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-4.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-5.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="images/customer-logo-6.png" alt="alternative" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div> */}
        <div id="instructor" class="basic-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="images/virtul-card-image.jpg" alt="alternative" />
                    </div>
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Leading Industrialists Prefer</h2>
                            <p>The contemporary business environment demands only bold new ideas for running a business. Our virtual business card maker app marks the initial step for making networking much more feasible and convenient as per the business requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="description" class="basic-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Reasons You Need a Virtual Business Card</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="list-unstyled li-space-lg first">
                            <li class="media">
                                <i class="bullet">1</i>
                                <div class="media-body">
                                    <h4>Networking Events</h4>
                                    <p>Luncheons and happy hours are popular among networkers. Sharing your contact information with attendees at these events is an important part of successful networking. A virtual business card lives on your smartphone so you don’t have to worry about grabbing or running out of your paper business cards. Don’t be the one to stand out because you don’t have a business card.</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">2</i>
                                <div class="media-body">
                                    <h4>Job Fairs</h4>
                                    <p>A great way to introduce yourself to companies for which you’d like to work is by going to job fairs. Invite company representatives to get your personal virtual business card and share your contact info and a direct link to your resume.</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">3</i>
                                <div class="media-body">
                                    <h4>Social gatherings</h4>
                                    <p>A networking opportunity can occur at any time. Don’t get caught off guard at your next party, family gathering, or event. A virtual business card will allow you to quickly connect with new contacts, even at the most unexpected time.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-unstyled li-space-lg second">
                            <li class="media">
                                <i class="bullet">4</i>
                                <div class="media-body">
                                    <h4>Present Yourself as a True Professional</h4>
                                    <p>It doesn’t matter if you are searching for a job, are self-employed or work for a larger corporation. Having a business card will help you to stand out and be remembered. Successful networking occurs when one or more of the parties see a value in the other’s offerings. With a virtual business card, you can share your contact info as well as links to valuable content.</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">5</i>
                                <div class="media-body">
                                    <h4>Create New Opportunities</h4>
                                    <p>Not everyone will visit your website or watch your promotional video right when they receive the link. Many people will go back and sort through materials and cards they received and further research the ones they are interested in.</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">6</i>
                                <div class="media-body">
                                    <h4>Create a Call to Action</h4>
                                    <p>With 90% of business card recipients tossing paper cards within the first week, virtual business cards make even more sense. The virtual business card allows you to use SMS to quickly share your personal information with new contacts while allowing them to quickly save your information as a new contact. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>




        {/* <div class="basic-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Who Should Attend The SEO Training Course</h2>
                            <p>This course is for anyone passionate about the web and especially fit for those seeking to improve their online presence for company websites and blogs </p>
                            <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox">LIGHTBOX</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid" src="images/students.jpg" alt="alternative" />
                    </div>
                </div>
            </div>
        </div>
 */}



        {/* <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
            <div class="container">
                <div class="row">
                    <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                    <div class="col-lg-8">
                        <div class="image-container">
                            <img class="img-fluid" src="images/details-lightbox.jpg" alt="alternative" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h3>SEO Training Course</h3>
                        <hr />
                        <h5>For everybody</h5>
                        <p>The training course is dedicates to anyone passionate about the web and in need of improving their current online presence.</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Link building framework</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Know your current position</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Partnering with blogs</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Naming your images</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Creating good sitemaps</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body">Writing for humans</div>
                            </li>
                        </ul>
                        <a class="btn-solid-reg mfp-close page-scroll" href="#register">SIGN UP</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                    </div>
                </div>
            </div>
        </div>




        <div class="basic-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Course Video Presentation</h2>


                        <div class="image-container">
                            <div class="video-wrapper">
                                <a class="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                                    <img class="img-fluid" src="images/video.jpg" alt="alternative" />
                                    <span class="video-play-button">
                                        <span></span>
                                    </span>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

 */}


        <div class="cards">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Key Takeaways</h2>
                        <p class="p-heading">Here are the main advantages of using digital buisness card</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">


                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-atom"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Savvy marketing tool.</h4>
                                <p>MyIdentity works as a clever marketing tool by driving traffic to your website, social media and key company links.</p>
                            </div>
                        </div>



                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-key"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">0% paper,100% sustainable.</h4>
                                <p>2 million trees are cut down every year to print business cards. By switching to digital cards, you’re keeping trees in the ground.</p>
                            </div>
                        </div>




                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-newspaper"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Contactless</h4>
                                <p>Hand shakes and paper business cards are no longer acceptable in the world post COVID19. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* 
        <div id="date" class="basic-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h2>December 22nd 2020 at Innovation Hub Space</h2>
                            <p>Our mission is to help people do better SEO. The team is excited to invite you to the next SEO Training Course session which undoubtedly will provide you with the necessary skills to improve your online presence. Fill out the form to register and we'll contact you in less than 24h</p>
                            <a class="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div class="form-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Stay updated with news by subscribing to our newsletter and our social channels</h3>

                        <form id="newsletterForm" data-toggle="validator" data-focus="false">
                            <div class="form-group">
                                <input type="email" class="form-control-input" id="nemail" required />
                                <label class="label-control" for="nemail">Email</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group checkbox">
                                <input type="checkbox" id="nterms" value="Agreed-to-Terms" required />I've read and agree to MY.IDENTITY written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">SIGN UP</button>
                            </div>
                            <div class="form-message">
                                <div id="nmsgSubmit" class="h3 text-center hidden"></div>
                            </div>
                        </form>

                        <div class="icon-container">
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-pinterest-p fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </div>




        <div id="contact" class="form-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Contact Details</h2>
                            <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                            <h3>Main Office Location</h3>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="media-body">22 Innovative, San Francisco, CA 94043, US</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-mobile-alt"></i>
                                    <div class="media-body">+91 - 9998669006, &nbsp;&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp; +91 - 9998669006</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-envelope"></i>
                                    <div class="media-body"><a class="light-gray" href="mailto:contact@zigo.com">rohan@gmail.com</a> <i class="fas fa-globe"></i><a class="light-gray" href="#your-link">www.MyIdentity.com</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">


                        <form id="contactForm" data-toggle="validator" data-focus="false">
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="cname" required />
                                <label class="label-control" for="cname">Name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input" id="cemail" required />
                                <label class="label-control" for="cemail">Email</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control-textarea" id="cmessage" required></textarea>
                                <label class="label-control" for="cmessage">Your message</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group checkbox">
                                <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to MY.IDENTITY stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">SUBMIT</button>
                            </div>
                            <div class="form-message">
                                <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>




        <div class="footer" id="aboutus">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-col first">
                            <h5>About MY.IDENTITY</h5>
                            <p class="p-small">MyIdentity is the most advanced electronic business card management app on the market. It is loaded with cutting-edge features, including the ultimate Digital Business Card Design Suite,</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-col second">
                            <h5>Links</h5>
                            <ul class="list-unstyled li-space-lg p-small">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="terms-conditions.html">Terms & Conditions</a></div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="privacy-policy.html">Privacy Policy</a></div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="article-details.html">Article Details</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-col third">
                            <h5>Links</h5>
                            <ul class="list-unstyled li-space-lg p-small">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="article-details.html">Article Details</a></div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="terms-conditions.html">Terms & Conditions</a></div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><a href="privacy-policy.html">Privacy Policy</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-col fourth">
                            <h5>Social Media</h5>
                            <p class="p-small">For news & updates follow us</p>
                            <a href="#your-link">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#your-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#your-link">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#your-link">
                                <i class="fab fa-instagram "></i>
                            </a>
                            <a href="#your-link">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#your-link">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="p-small">Copyright © 2023 <a href="https://inovatik.com">Inovatik</a> - All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>


    </css.HomeStyled>)
}
export default HomeLayout