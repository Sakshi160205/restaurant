import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Royal Rasoi, we’re passionate about delivering exceptional dining experiences. 
            Using fresh, locally sourced ingredients, our talented chefs create delicious dishes that blend tradition with innovation.
             Whether you’re here for a casual meal or a special occasion, we promise a warm atmosphere, impeccable service, 
             and flavors that will keep you coming back for more.
             
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
