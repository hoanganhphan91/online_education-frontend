import React, { Fragment } from "react";
import Company from "../components/Company-section/Company";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourses from "../components/Free-course-section/FreeCourses";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer";
const Home =() => {
    return <Fragment>
        <Header/>
        <HeroSection/>
        <Company/>
        <AboutUs/>
        <Courses/>
        <ChooseUs></ChooseUs>
        <Features/>
        <FreeCourses></FreeCourses>
        <Testimonials></Testimonials>
        <Newsletter/>
        <Footer></Footer>
    </Fragment>
};
export default Home;