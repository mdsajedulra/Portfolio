import React from 'react';
import me from '../../../assets/me.png'
import Contact from '../Contact/Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <header class="header-section sticky-header d-none d-lg-block">
                <div class="header-wrapper">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col">

                                <a href="index.html" class="header-logo">
                                    <h1 >SAJEDUL</h1>
                                </a>

                            </div>
                            <div class="col-auto">

                                <ul class="header-nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="has-dropdown">
                                        <a href="#projects"><span>Projects</span></a>

                                    </li>
                                    <li class="has-dropdown">
                                        <a href="blog-list.html">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="blog-list.html">Blog List Full Width</a></li>
                                            <li><a href="blog-list-sidebar-left.html">Blog List Left Sidebar</a></li>
                                            <li><a href="blog-list-sidebar-right.html">Blog List Right Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details Full Width</a></li>
                                            <li><a href="blog-details-sidebar-left.html">Blog Details Left Sidebar</a></li>
                                            <li><a href="blog-details-sidebar-right.html">Blog Details Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="project-list.html">Project</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="404-page.html">404 Page</a></li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                            <div class="col">
                                <div class="header-btn-link text-end">
                                    <a href="#contact" class="btn btn-sm btn-outline-one icon-space-left">Contact Me <i class="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>




            <div class="mobile-header d-block d-lg-none">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col">
                            <div class="mobile-logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="mobile-action-link text-end">
                                <a href="#mobile-menu-offcanvas" class="offcanvas-toggle offside-menu"><i
                                    class="icofont-navigation-menu"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/* <!--  Start Offcanvas Mobile Menu Section --> */}
            <div id="mobile-menu-offcanvas" class="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
                {/* <!-- Start Offcanvas Header --> */}
                <div class="offcanvas-header text-end">
                    <button class="offcanvas-close"><i class="icofont-close-line"></i></button>
                </div>
                {/* <!-- End Offcanvas Header --> */}
                {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
                <div class="offcanvas-mobile-menu-wrapper">
                    {/* <!-- Start Mobile Menu  --> */}
                    <div class="mobile-menu-bottom">
                        {/* <!-- Start Mobile Menu Nav --> */}
                        <div class="offcanvas-menu">
                            <ul>
                                <li>
                                    <a href="index.html"><span>Home</span></a>
                                </li>
                                <li>
                                    <a href="#projects"><span>Projects</span></a>

                                </li>
                                <li>
                                    <a href="#"><span>Blog</span></a>
                                    <ul class="mobile-sub-menu">
                                        <li><a href="blog-list.html">Blog List Full Width</a></li>
                                        <li><a href="blog-list-sidebar-left.html">Blog List Left Sidebar</a></li>
                                        <li><a href="blog-list-sidebar-right.html">Blog List Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Details Full Width</a></li>
                                        <li><a href="blog-details-sidebar-left.html">Blog Details Left Sidebar</a></li>
                                        <li><a href="blog-details-sidebar-right.html">Blog Details Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span>Pages</span></a>
                                    <ul class="mobile-sub-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="project-list.html">Project</a></li>
                                        <li><a href="project-details.html">Project Details</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="404-page.html">404 Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html"><span>Contact</span></a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Mobile Menu Nav --> */}
                    </div>
                    {/* <!-- End Mobile Menu --> */}

                    {/* <!-- Start Mobile contact Info --> */}
                    <div class="mobile-contact-info text-center">
                        <ul class="social-link">
                            <li><a target="_blank" href="https://example.com"><i class="icofont-facebook"></i></a>
                            </li>
                            <li><a target="_blank" href="https://example.com"><i class="icofont-twitter"></i></a>
                            </li>
                            <li><a target="_blank" href="https://example.com"><i class="icofont-skype"></i></a></li>
                        </ul>
                    </div>
                    {/* <!-- End Mobile contact Info --> */}

                </div>
                {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
            </div>
            {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

            {/* <!-- Offcanvas Overlay --> */}
            <div class="offcanvas-overlay"></div>

            {/* <!-- ...::: Start Hero Section :::... --> */}
            <div class="hero-section section-dark-blue-bg">
                <div class="hero-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-7">
                                <div class="hero-content">
                                    <h3 class="title-big">Hello! I’m</h3>
                                    <h2 class="title-large"><span class="shape-mark"> Sajedul </span></h2>
                                    <p>Web Developer</p>

                                    <a href="https://drive.google.com/file/d/1EM72PbirbWuSfHB4UMkN95p4DfCZjPns/view?usp=share_link" class="btn btn-xl btn-outline-one icon-space-left">Get Resume <i
                                        class="icofont-download"></i></a>

                                    {/* <div class="video-link">
                                        <a class="wave-btn" href="https://youtu.be/MKjhBO2xQzg" data-autoplay="true"
                                            data-vbtype="video">

                                            <div class="ripple"><i class="icofont-ui-play"></i></div>
                                        </a>

                                        <span class="video-text"> Watch Video</span>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hero-shape hero-top-shape">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="hero-shape hero-bottom-shape">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="hero-portrait">
                        <div class="image">
                            <img class="img-fluid" src={me} alt="" />

                            <div class="image-half-round-shape"></div>
                            <div class="social-link">
                                <a href="https://www.linkedin.com/in/mdsajedulra/" target="_blank"><i class="icofont-linkedin"></i></a>
                                <a href="https://www.facebook.com/mdsajedulra" target="_blank"><i class="icofont-facebook"></i></a>
                                <a href="https://github.com/mdsajedulra" target="_blank"><i class="icofont-github"></i></a>
                                <a href="https://www.example.com" target="_blank"><i class="icofont-behance"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- ...::: End Hero Section :::... --> */}


            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;