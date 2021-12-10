import { React } from "react";
import * as constant from "../../../src/constant";
import {
    useHistory, Link
} from "react-router-dom";
const HomeLayout = () => {
    const history = useHistory();

    return (<>
        {/* <div class="spinner-wrapper">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div> */}

        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <Link class="navbar-brand logo-image" to={constant.BASE_URL + "/home"} onClick={() => { history.push(constant.BASE_URL + '/home') }}><img src="images/logo.svg" alt="alternative" /></Link>
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
                        <a class="nav-link page-scroll" href="#description">DETAILS</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" href="#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">DATE</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="article-details.html"><span class="item-text">ARTICLE DETAILS</span></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="terms-conditions.html"><span class="item-text">TERMS CONDITIONS</span></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="privacy-policy.html"><span class="item-text">PRIVACY POLICY</span></a>
                        </div>
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
                                <img class="img-fluid" src="images/details-slide-1.jpg" alt="alternative" />
                            </div>



                            <div class="swiper-slide">
                                <img class="img-fluid" src="images/details-slide-2.jpg" alt="alternative" />
                            </div>



                            <div class="swiper-slide">
                                <img class="img-fluid" src="images/details-slide-3.jpg" alt="alternative" />
                            </div>
                        </div>


                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>


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
                            <p>It's easy to register for the course, just fill out the form and click submit. Then you will be registered for one of the best SEO training courses in the industry</p>
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
                                    <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />I've read and agree to Corso's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
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

        <div class="slider-1">
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
        </div>




        <div id="instructor" class="basic-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-fluid" src="images/instructor.jpg" alt="alternative" />
                    </div>
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>I’m Garry Your Trainer</h2>
                            <p>Hi everybody! I am Garry and I will be your main instructor durnig the SEO training course. I have more than 10 years experience in SEO and I am very passionate about this field. Register for the course and let's meet.</p>
                            <p>Teaching students all about the beste SEO techniques is something I love to do as a full-time job</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="description" class="basic-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>What Will You Learn In Our SEO Focused Training Course</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="list-unstyled li-space-lg first">
                            <li class="media">
                                <i class="bullet">1</i>
                                <div class="media-body">
                                    <h4>Optimizing your site for mobile devices</h4>
                                    <p>One of the keys of great SEO is having a mobile friendly website which works smoothly on all devices</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">2</i>
                                <div class="media-body">
                                    <h4>Understand how users search</h4>
                                    <p>It's not enough anymore to find relevant industry keywords and write huge amounts of content </p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">3</i>
                                <div class="media-body">
                                    <h4>Write for humans optimize for engines</h4>
                                    <p>Write well structured and understandable articles not just a mix of paragraphs that contain keywords</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-unstyled li-space-lg second">
                            <li class="media">
                                <i class="bullet">4</i>
                                <div class="media-body">
                                    <h4>Analyse your existing search traffic</h4>
                                    <p>A good action plan comes out of understanding where your current position is and the environment</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">5</i>
                                <div class="media-body">
                                    <h4>Keep updated with the latest changes</h4>
                                    <p>Google changes it's search indexing algorithm twice a year so it's important to stay updated with news</p>
                                </div>
                            </li>
                            <li class="media">
                                <i class="bullet">6</i>
                                <div class="media-body">
                                    <h4>Learn the most important ranking factors</h4>
                                    <p>Learn which are the most important search engine ranking factors and optimize your website accordnigly</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>




        <div class="basic-3">
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




        <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
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




        <div class="cards">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Key Takeaways</h2>
                        <p class="p-heading">Here are the main topics that will be covered in the SEO training course. They cover all the basics of SEO and even some advanced techniques that will help you along the way</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">


                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-atom"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Position Analysis</h4>
                                <p>Understand where your website is currently positioned in search engine queries</p>
                            </div>
                        </div>



                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-key"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Keyword Planning</h4>
                                <p>Find the best relevant keywords that fit your website SEO strategy in the long run</p>
                            </div>
                        </div>




                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-newspaper"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Writing Articles</h4>
                                <p>How to plan your content strategy and write articles that are optimized for SEO</p>
                            </div>
                        </div>



                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-link"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Gathering Backlinks</h4>
                                <p>Backlinks are vital for SEO and we'll teach you everything there is to know about them</p>
                            </div>
                        </div>



                        <div class="card">
                            <div class="card-image">
                                <i class="far fa-handshake"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Build Partnerships</h4>
                                <p>Partnerships will help you establish your website or blog as an authority in your field</p>
                            </div>
                        </div>




                        <div class="card">
                            <div class="card-image">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Evaluate Actions</h4>
                                <p>Learn how to use the right analytics tools to evaluate your SEO actions and improve them</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>




        <div class="slider-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Check out our attendees testimonials from previous editions of the SEO Training</h3>


                        <div class="slider-container">
                            <div class="swiper-container text-slider">
                                <div class="swiper-wrapper">


                                    <div class="swiper-slide">
                                        <div class="image-wrapper">
                                            <img class="img-fluid" src="images/testimonial-1.jpg" alt="alternative" />
                                        </div>
                                        <div class="text-wrapper">
                                            <div class="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                                            <div class="testimonial-author">Jude Thorn - Online Marketer</div>
                                        </div>
                                    </div>



                                    <div class="swiper-slide">
                                        <div class="image-wrapper">
                                            <img class="img-fluid" src="images/testimonial-2.jpg" alt="alternative" />
                                        </div>
                                        <div class="text-wrapper">
                                            <div class="testimonial-text">Awesome course for the money. I never thought I could learn so much about search engine optimization in such a short amount of time. Highly recommend.</div>
                                            <div class="testimonial-author">Roy Smith - Developer</div>
                                        </div>
                                    </div>



                                    <div class="swiper-slide">
                                        <div class="image-wrapper">
                                            <img class="img-fluid" src="images/testimonial-3.jpg" alt="alternative" />
                                        </div>
                                        <div class="text-wrapper">
                                            <div class="testimonial-text">Corso is the best SEO training course in the market. It teaches you all the basics but it also adds value with some advanced tips & tricks the are great.</div>
                                            <div class="testimonial-author">Martin Singer - Online Marketer</div>
                                        </div>
                                    </div>



                                    <div class="swiper-slide">
                                        <div class="image-wrapper">
                                            <img class="img-fluid" src="images/testimonial-4.jpg" alt="alternative" />
                                        </div>
                                        <div class="text-wrapper">
                                            <div class="testimonial-text">Learning SEO can actually be fun. I attended Corso SEO training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                                            <div class="testimonial-author">Ronda Louis - Business Owner</div>
                                        </div>
                                    </div>


                                </div>


                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>




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
        </div>

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
                                <input type="checkbox" id="nterms" value="Agreed-to-Terms" required />I've read and agree to Corso's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
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
                                    <div class="media-body">+44 68 554 332, &nbsp;&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp; +44 31 276 112</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-envelope"></i>
                                    <div class="media-body"><a class="light-gray" href="mailto:contact@zigo.com">contact@zigo.com</a> <i class="fas fa-globe"></i><a class="light-gray" href="#your-link">www.zigo.com</a></div>
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
                                <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to Corso's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
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




        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-col first">
                            <h5>About Corso</h5>
                            <p class="p-small">We're passionate about teaching people how to do better SEO for their online presence</p>
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
                        <p class="p-small">Copyright © 2020 <a href="https://inovatik.com">Inovatik</a> - All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>


    </>)
}
export default HomeLayout