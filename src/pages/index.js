"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";

const Home = () => {

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleOnchange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send formData to the backend for processing and sending email
    const response = await fetch("http://localhost:3001/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    if (response.ok) {
      // Handle success, e.g., show a success message to the user
      console.log("Email sent successfully");
    } else {
      // Handle error, e.g., show an error message to the user
      console.error("Error sending email");
    }
  };

  return (

    <>
      <Head>
              <title>Shivani Chouksey Portfolio</title>

      
      </Head>

    <div className=" bg-dark  text-white" style={{ fontFamily: "gilroy" }}>
      <Navbar/>
      <div
        className="container py-1 py-md-5 text-center mb-5 position-relative d-none d-md-block "
        style={{ height: "100%" }}
      >
        <p className="fs-4" style={{textTransform:'capitalize'}}>
          👋 , My Name Is Shivani Chouksey & I am A Full Stack Developer (MERN)
        </p>
        <h1
          className=" fw-bold heading2"
          style={{ fontSize: "11vw", letterSpacing: "-.5vw" }}
        >
          Front-End <span className="text-info">&</span>
        </h1>
        {/* <h1 style={{fontSize:"11vw"  ,letterSpacing:"-6px", }} className="fw-bold ">Front-End & </h1> */}
        <h1
          style={{
            fontSize: "10vw",
            whiteSpace: "nowrap",
            letterSpacing: "-.5vw",
          }}
          className="fw-bold text-stroked"
        >
          Back-End Developer
        </h1>
        <div
          className="photo-part position-absolute top-50 start-50 translate-middle d-none d-md-block"
          style={{ width: "600px", zIndex: "9" }}
        >
          <div
            className="top"
            style={{ width: "100%", height: "100%", marginTop: "90px" }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/myImage.png"
              alt="mg"
            />
          </div>
          <div className="d-flex justify-between px-5 mt-4 w-75 mx-auto">
            <Link className="btn btn-outline-light px-3 me-3" href="#contact">
              Say Hi <i className="bi bi-send-arrow-down ms-2 fw-bold"></i>{" "}
            </Link>
            <Link
              className="btn btn-outline-light px-3"
              href="/RESUME.pdf"
              target="_blank"
              download={"Shivani Chouksey Resume"}
            >
              Download My CV<i className="bi bi-download ms-2 fw-bold"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container py-5 text-center my-5 position-relative d-md-none row"
        style={{ height: "100%" }}
      >
        <div className="col-12">
          <p className="fs-4 text-center" style={{textTransform:"capitalize"}}>
            👋 , my name is Shivani Chouksey and Iam a Full Stack Developer (
            MERN )
          </p>
          <h1
            className=" fw-bold heading2 text-center"
            style={{ fontSize: "11vw", letterSpacing: "-.5vw" }}
          >
            Front-End <span className="text-info">&</span>
          </h1>
          {/* <h1 style={{fontSize:"11vw"  ,letterSpacing:"-6px", }} className="fw-bold ">Front-End & </h1> */}
          <h1
            style={{
              fontSize: "10vw",
              whiteSpace: "nowrap",
              letterSpacing: "-.5vw",
            }}
            className="fw-bold text-stroked text-center"
          >
            Back-End Developer
          </h1>
        </div>

        <div
          className="photo-part mx-auto   d-md-none col-12"
          style={{ width: "600px", zIndex: "9" }}
        >
          <div className="top " style={{ width: "100%", height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/myImage.png"
              alt="mg"
            />
          </div>
          <div className="d-flex justify-between px-5  mt-4  mx-auto">
            <button className="btn btn-outline-light px-3 me-1">
              Say Hi <i className="bi bi-send-arrow-down ms-2 fw-bold"></i>{" "}
            </button>
            <button className="btn btn-outline-light px-3 ms-1" href="">
              Download My CV<i className="bi bi-download ms-2 fw-bold"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="about" className=" container mt-32 ">
        <div className="row ">
          <p className="text-center mt-5" style={{ color: "#FFC83D" }}>
            LET'S GET TO KNOW EACH OTHER
          </p>

          <h1
            style={{
              fontSize: "6vw",
              whiteSpace: "nowrap",
              letterSpacing: "-.1vw",
            }}
            className="fw-bold text-stroked text-center d-none d-md-block"
          >
            About
          </h1>
          <h1
            style={{
              fontSize: "11vw",
              whiteSpace: "nowrap",
              letterSpacing: "-.1vw",
            }}
            className="fw-bold text-stroked text-center d-md-none"
          >
            About
          </h1>
          <div className="col-md-6 col-12 d-none d-md-block">
            <div style={{ width: "80%", height: "500px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="/about.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 p-3 p-md-5  col-12">
            <h1>I'm A MERN Stack Developer</h1>
            <p>I have dedicated myself to becoming a Full Stack Developer, driven
              by my passion, for creating web experiences. Over the 9 months I
              have gained hands on experience in JavaScript , React.js, Next.js
              ,Node.js and MongoDb for development allowing me to build robust
              and responsive applications.</p>
            <p>
               My expertise also extends to HTML,
              CSS ,TailwindCSS and Bootstrap enabling me to design appealing
              interfaces that're user friendly. Additionally I have experience
              with MongoDB for database solutions which adds scalability to
              projects. To add a layer of interactivity and bring websites to
              life I utilize GSAP. A library specifically designed for
              animations. In addition, to these skills I am well versed in
              WordPress for Project Development. 
            </p>
            <p>If you are seeking a developer
              who can elevate your web projects to heights of success lets
              connect and explore how I can contribute.</p>

            <h1>Education</h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <i className="bi bi-caret-right-fill"></i> Master of
                    Computer Application
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Barkatullah University <br /> 2021 - 2023 - 88%
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <i className="bi bi-caret-right-fill"></i> Bachelor of
                    Science in Computer Science
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    PG Autonomas Govt. Geetanjli Girls College <br /> 2021 - 64
                    %
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <i className="bi bi-caret-right-fill"></i> Higher Secondary
                    - PCM
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Saraswati Vidhya Mandir Vidhya Vihar <br /> 2017 - 84.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skill" className=" container " style={{ marginTop: "25px" }}>
        <h1
          className=" fw-bold heading2 d-none d-md-block"
          style={{ fontSize: "6vw", letterSpacing: "-4px" }}
        >
          I'm <span className="text-info">Good</span> at
        </h1>
        <h1
          className=" fw-bold heading2 d-md-none"
          style={{ fontSize: "11vw" }}
        >
          Thinks I'am <span className="text-info">Good</span> at
        </h1>

        <h2>skills, interests, passion and hobbies</h2>

        <div className="my-5">
          <button className="btn btn-outline-light px-3 fw-bold cursor-none" href="">
            Development<i className="bi bi-code ms-1  my-auto fw-bold"></i>
          </button>
          <div className="row my-5 gap-2">
            <div className="col-md-1 col-2 bg-white d-flex justify-center align-middle p-1">
              <img width={70} style={{objectPosition:"center"}} src="/Skill/React-icon.svg.webp" alt="" />
            </div>
            <div className="col-md-1 col-2 bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/next-js.svg" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/node-min.webp" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/js-min.webp" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/mongodb-min.webp" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/html-min.webp" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/css-min.webp" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/bootstrap.png" alt="" />
            </div>
            <div className="col-md-1 col-2  bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/wordpress.png" alt="" />
            </div>
          </div>
        </div>

        <div className="my-5">
          <button className="btn btn-outline-light px-3 fw-bold cursor-none" href="">
            Designing<i className="bi bi-palette ms-1  my-auto fw-bold"></i>
          </button>
          <div className="row my-5 gap-2">
            <div className="col-md-1 col-2 bg-white d-flex justify-center align-middle p-1">
              <img width={70} src="/Skill/figma-min.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="project" className=" container mt-md-32 ">
        <div className="row ">
          <p className="text-center mt-5" style={{ color: "#FFC83D" }}>
            {" "}
            RECENT PROJETS
          </p>

          <h1
            style={{
              fontSize: "6vw",
              whiteSpace: "nowrap",
              letterSpacing: "-5px",
            }}
            className="fw-bold text-stroked text-center d-none d-md-block"
          >
            Look Book
          </h1>
          <h1
            style={{
              fontSize: "11vw",
              whiteSpace: "nowrap",
              letterSpacing: "",
            }}
            className="fw-bold text-stroked text-center d-md-none"
          >
            Look Book
          </h1>
          <Link
            className="btn btn-info text-white py-2 mx-auto col-md-2 col-8 mb-5"
            href="#contact"
          >
            Let's create project together{" "}
            <i className="bi bi-chat-left-text ms-2 fw-bold"></i>
          </Link>

          <ul
            className="nav nav-pills  pro-tab mb-3 my-3 px-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active  text-white"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All{" "}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-white"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                MERN - Full Stack
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  text-white"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                React
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link  text-white"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Bootstrap
              </button>
            </li> */}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  text-white"
                id="pills-word-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-word"
                type="button"
                role="tab"
                aria-controls="pills-word"
                aria-selected="false"
              >
                Wordpress
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link  text-white"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Figma
              </button>
            </li> */}
          </ul>
          <div className="tab-content my-5" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <div className="row mt-5">
                <Link
                  href="http://ptf.billingsathi.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/MERN/ptf.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Property Search Engine
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb ,HTML ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://gethealthydiet.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/MERN/gethealthydiet.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Get HealthyDiet
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb ,HTML ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.perfecttours.travel/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/MERN/perfectTravel.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Travelling Website - Perfect Travel
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb ,HTML ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://beyorg.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/MERN/Beyorg.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      E-commerce - Organice product
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://react-website-bay.vercel.app/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/React/Furniture React App.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Furniture E-commerce UI
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React,Bootstrap ,javaScript ,HTML
                      ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://shivani-chouksey.github.io/CoffeeProject/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/React/cafe.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Coffee Cafe UI
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React,Bootstrap, javaScript ,HTML
                      ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://kasturibuilders.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/Kashturi builders.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Kasturi Builders
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                {/* <Link
                  href="https://shivani-chouksey.github.io/Modern-portfolio-Landing-page-/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/LandingPages/LandingPage1.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                     
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Modern Portfolio Landing Page
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- HTML ,CSS ,javaScript .Shery.js
                    </p>
                  </div>
                </Link> */}
                <Link
                  href="https://crownace.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/Wordpress/Crawnac.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold"> Crownace </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://swastikcater.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/Swastikcaters.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Swastik Caters
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://studioarun.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/arun studio.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Arun Photgraphy Studio
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://saharasakshrta.org/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/saharasakshrta.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      NGO- saharasakshrta
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://shivani.saharasakshrta.org/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/Wordpress/demo.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      Movie website - Demo
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <div className="row mt-5">
                <Link
                  href="http://ptf.billingsathi.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/MERN/ptf.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Property Search Engine
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://gethealthydiet.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/MERN/gethealthydiet.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Get HealthyDiet
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.perfecttours.travel/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/MERN/perfectTravel.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Travelling Website - Perfect Travel
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://beyorg.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/MERN/Beyorg.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      E-commerce - Organice product
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React ,Node,Redux,Bootstrap
                      ,Mongodb
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <div className="row mt-5">
                <Link
                  href="https://react-website-bay.vercel.app/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/React/Furniture React App.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover" 

                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                    
                      Furniture E-commerce UI
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React,Bootstrap,HTML ,CSS
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://shivani-chouksey.github.io/CoffeeProject/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/React/cafe.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Coffee Cafe UI
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- React,Bootstrap .javaScript ,HTML
                      ,CSS
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-word"
              role="tabpanel"
              aria-labelledby="pills-word-tab"
              tabIndex="0"
            >
              <div className="row mt-5">
                <Link
                  href="https://kasturibuilders.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/Wordpress/Kashturi builders.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                      
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Kasturi Builders
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://shivani-chouksey.github.io/Modern-portfolio-Landing-page-/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/LandingPages/LandingPage1.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover" 

                      }} />
                      
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Modern Portfolio Landing Page
                    </h2>

                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://crownace.in/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/Wordpress/Crawnac.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                     
                    </div>

                    <h2 className="  mt-2  text-center fw-bold"> Crownace </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://swastikcater.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/Swastikcaters.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Swastik Caters
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://studioarun.com/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                       <img   src="/Projects/Wordpress/arun studio.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                     
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      Arun Photgraphy Studio
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://saharasakshrta.org/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                        <img   src="/Projects/Wordpress/saharasakshrta.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      {" "}
                      NGO- saharasakshrta
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://shivani.saharasakshrta.org/"
                  target="_blank"
                  className="text-decoration-none text-white col-md-3 col-12 mb-4   rounded p-3"
                >
                  <div className="">
                    <div
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "180px",
                        border: "7px solid #fff",
                      }}
                    >
                      <img   src="/Projects/Wordpress/demo.png"  style={{
                        width: "100%",
                        height: "100%",
                        objectFit:"cover"
                      }} />
                      {/* <video
                        width="640"
                        style={{ height: "100%" }}
                        controls
                        autoPlay
                        loop
                        muted
                      >
                        <source
                          src="/Projects/Wordpress/demo.png"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video> */}
                    </div>

                    <h2 className="  mt-2  text-center fw-bold">
                      Movie website - Demo
                    </h2>
                    <p className="text-center m-0 ">
                      Skill used in project- WordPress
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className=" container">
        <h1
          className=" fw-bold heading2 d-none d-md-block"
          style={{ fontSize: "6vw", letterSpacing: "-2px" }}
        >
          you can get in touch with me either through{" "}
          {/* <span className="text-info"><a href="mailto:shivanichouksey1702@gmail.com">Mail</a></span> */}
          <span className="text-info">Mail</span> or{" "}
          <span style={{ color: "#FFC83D" }}>Linkedin. </span> Alternatively,
          you can use the <span className="text-info">contact form </span>
        </h1>
        <h1
          className="fw-bold heading2 d-md-none px-3"
          style={{ fontSize: "8vw", letterSpacing: "" }}
        >
          You can get in touch with me either through{" "}
          <span className="text-info">
            <a href="mailto:shivanichouksey1702@gmail.com">Mail</a>
          </span>{" "}
          or <span style={{ color: "#FFC83D" }}>Linkedin.</span> Alternatively,
          you can use the <span className="text-info">contact form</span>.
        </h1>

        <div className="row my-5 border-bottom">
          <div className="col-md-6 col-12 p-md-5  px-4">
            <h1
              className="fw-bold d-none d-md-block"
              style={{ fontSize: "4vw", letterSpacing: "-2px" }}
            >
              Lets , <span className="text-info">Connect</span> 👋
            </h1>
            <h1 className="fw-bold d-md-none" style={{ fontSize: "6vw" }}>
              Lets , <span className="text-info">Connect</span> 👋
            </h1>
            <p className="pe-5">
              "I'm actively seeking opportunities. For inquiries or connections,
              my open inbox ensures prompt and thoughtful responses. I value
              your communication."
            </p>
            <p className="my-4 pe-5">
              <Link href="" className="text-decoration-none  text-white">
                {" "}
                <i className="bi bi-geo-alt-fill me-2 fw-bold fs-md-3 text-info cursor-none "></i>{" "}
                B-Wing Omnagar Near Jeena House Andheri East
              </Link>
            </p>
            <p className="my-4">
              <Link
                href="mailto:shivanichouksey1702@gmail.com"
                className="text-decoration-none text-white"
              >
                <i className="bi bi-envelope me-2 fw-bold fs-md-3 text-info"></i>
                shivanichouksey1702@gmail.com
              </Link>
            </p>

            <p className="my-4">
              <Link
                href="tel:+917440477473"
                className="text-decoration-none  text-white"
              >
                <i className="bi bi-headset me-2 fw-bold fs-md-3 text-info"></i>{" "}
                7440477473
              </Link>
            </p>
          </div>
          <div className="col-md-6 col-12  p-md-5 px-auto px-md-2 ">
            <form className="row g-3 " onSubmit={handleSubmit}>
              <div className="col-md-6 col-10 mx-auto">
                <label htmlFor="inputname" className="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleOnchange}
                  value={inputData.name}
                />
              </div>
              <div className="col-md-6 col-10 mx-auto">
                <label htmlFor="inputnumber" className="form-label">
                  Enter Your Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputnumber"
                  placeholder="Enter Number"
                />
              </div>
              <div className="col-md-12 col-10 mx-auto">
                <label htmlFor="inputemail" className="form-label">
                  Enter Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder="abc@gmail.com"
                  name="email"
                  onChange={handleOnchange}
                  value={inputData.email}
                />
              </div>
              <div className="col-md-12 col-10 mx-auto">
                <label htmlFor="inputsubject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputsubject"
                  placeholder="Enter Subject "
                  name="subject"
                />
              </div>
              <div className="col-md-12 col-10 mx-auto">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Type Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Your Message"
                  name="message"
                  onChange={handleOnchange}
                  value={inputData.message}
                ></textarea>
              </div>

              <div className="col-md-12  col-10 mb-3 mx-auto">
                <button
                  type="submit"
                  className="btn btn-info fw-bold text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            {" "}
            <p className="m-0">
              Designed by{" "}
              <span className="fw-bold text-info">Shivani Chouksey</span>
            </p>
            <p className="m-0">copyright © 2023 </p>
          </div>
          <div className="col-md-6 col-12 text-md-end">
            <Link
              href="https://www.instagram.com/__nix__photography/"
              className="text-decoration-none text-white me-3 fs-3"
            >
              <i className="bi bi-instagram"></i>
            </Link>
            <Link
              href="https://github.com/Shivani-Chouksey"
              target="_blank"
              className="text-decoration-none text-white me-3 fs-3"
            >
              <i className="bi bi-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shivani-chouksey-07b794220/"
              className="text-decoration-none text-white me-3 fs-3"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link href="" className="text-decoration-none text-white me-3 fs-3">
              <i className="bi bi-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
