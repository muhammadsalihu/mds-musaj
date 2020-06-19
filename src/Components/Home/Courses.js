import React from "react"
import WebDevLogo from "../../assets/webDevLogo.svg"

const Courses = (props) => {
  return (
    <React.Fragment>
      {/* CARD 1 START */}
      <div className="col-12 col-sm-6  px-sm-1 px-sm-1 py-1">
        <div className="card w-100  p-5 text-center text-sm-left">
          <img
            src={WebDevLogo}
            alt=""
            className="mb-3 mb-sm-auto mx-auto mx-sm-0"
            width={150}
          />
          <p className="h4">Web Development</p>
          <p className="lead">
            We teach our students how to build basic websites from scratch to
            designing and developing an enterprise web-based application with
            React.js, Node.js APIs, MongoDB/SQL and, deploying to cloud services
            like AWS, GCP, and MS Azure.
          </p>
          <a
            href="//learn.motionwares.com/signup?course=5e305328728542001f2c9314"
            className="lead text-dark font-weight-medium"
          >
            <span className>Get started</span>
            <svg className="text-icon">
              <use xlinkHref="../symbol-defs.svg#arrow-up-right" />
            </svg>
          </a>
        </div>
      </div>
    </React.Fragment>
    /* CARD 1 END */
  )
}

export default Courses
