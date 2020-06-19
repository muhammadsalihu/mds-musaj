import React from "react"
import { Row, Col, Container } from "reactstrap"

//Assets
import HomeIllustration from "../assets/HomeIllustration.png"
import Mubaraq from "../assets/Mubaraq.jpg"
import WebDevLogo from "../assets/webDevLogo.svg"
import boyIllustration from "../assets/boyIlustration.png"
import Logo from "../assets/mwares-logo.svg"

//Components
import Header from "../Components/Home/Header.js"
import Steps from "../Components/Home/Steps.js"
import Structure from "../Components/Home/Structure.js"
import Comments from "../Components/Home/Comments.js"
import CoursesAvailable from "../Components/Home/CoursesAvailable.js"
import Courses from "../Components/Home/Courses.js"
import Footer from "../Components/Home/Footer.js"

//Data
import students from "../data/students.json"

const Dashboard = () => {
  return (
    <div className="m-4">
      <Header />
      <div className="container" style={{ marginTop: "81px" }}>
        <div className="row" style={{ minHeight: "90vh" }}>
          <div className="col-12 col-sm-10 col-xl-6 py-5 m-auto">
            <h1 className="font-weight-bolder display-34">
              Start your digital career with us and get hired on completion
            </h1>
            <p className="lead-paragraph font-weight-normal">
              A flexible approach to learning employable tech skills using our
              adaptive and interactive virtual platform.
            </p>
          </div>
          <div className="col-12 col-sm-8 m-sm-auto col-xl-6 learn__hero py-4">
            <img src={HomeIllustration} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <Steps />
      {/* End of Steps Section */}

      {/* Next Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-10 pb-4">
            <h1 className="font-weight-bold">How our training is structured</h1>
            <p className="lead-paragraph">
              Our training is 95% virtual which includes online guides, webinar
              sessions, group meetups, online hackathons, and 5% physical
              hackathon.
            </p>
          </div>
        </div>
        <Structure />
      </section>

      {/* Next Section */}
      <section className="container py-5">
        <hr className="border-0 py-sm-5 m-0"></hr>
        <div className="row">
          <div className="col-12 col-sm-6 pb-4">
            <h1 className="font-weight-bolder">What our students are saying</h1>
          </div>
          <div className="row px-sm-3">
            {/* Student's comments START here*/}
            {students.map((student, index) => {
              return (
                <Comments
                  name={student.name}
                  comment={student.comment}
                  course={student.course}
                  avatar={student.avatar}
                />
              )
            })}
            {/* Student's comments END here*/}
          </div>
        </div>
      </section>
      {/* SECTION  ENDS */}

      {/* COURSES AVAILABLE SECTION START */}
      <CoursesAvailable />
      {/* COURSES AVAILABLE SECTION END */}

      {/* COURSES  SECTION START */}
      <div className="container d-flex row px-1 py-5  ">
        <Courses />
        <Courses />
        <Courses />
        <Courses />
      </div>
      {/* COURSES  SECTION END */}

      {/* BOY  SECTION START */}
      <section className="container py-sm-5">
        <div className="row">
          <div className="col-12 col-sm-5 p-5 mb-4 mb-sm-0">
            <img
              src={boyIllustration}
              className="img-fluid w-90 mx-auto d-block mt-4"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-5 m-auto pt-lg-5">
            <h1 className="font-weight-bold mb-3">Who can take our courses?</h1>
            <p>
              Unemployed individuals, curious to learn employable/self
              sufficient skills.
            </p>
            <p>Individuals who wish to change to a digital career.</p>
            <p>
              Individuals who are keen to design, build, develop or market
              digital products and services.
            </p>
            <p>Digital technology and tools enthusiasts.</p>
            <p>Anyone that wants to learn high income skills.</p>
            <p>Anyone that wants to start a digital career.</p>
          </div>
        </div>
      </section>
      {/* BOY  SECTION END */}

      {/* Questions anyone section START*/}
      <section className="container py-5">
        <div className="row">
          <a className="col-12 text-dark" href="/faq">
            <hr className="w-100 borderx2 m-0 pb-5" />
            <h2 className="font-weight-bold d-flex flex-row">
              <span className="pr-4">Questions anyone? Find answers here</span>
              <svg className="text-icon ml-auto">
                <use xlinkHref="../symbol-defs.svg#arrow-right" />
              </svg>
            </h2>
          </a>
          <div className="col-12 col-sm-12 col-lg-8 mx-auto pt-4" />
        </div>
      </section>
      {/* Questions anyone section END*/}
      {/* FOOTER START*/}
      <Footer />
      {/* FOOTER END*/}
    </div>
  )
}

export default Dashboard
