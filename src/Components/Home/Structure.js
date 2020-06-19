import React from "react"
import helpIllustration from "../../assets/help.svg"

const Structure = (props) => {
  return (
    <div className="row pt-4 pb-5">
      <div className="col-12 col-sm-4">
        <div className="sticky-top" style={{ top: "100px" }}>
          <h4 className="d-block border-left borderx2 border-dark px-4 pt-1">
            1<sup>st</sup> - 6<sup>th</sup> Month
          </h4>
          <p className="d-block pl-4 pb-4">First &amp; Second Semester</p>
        </div>
      </div>
      <div className="col-12 col-sm">
        <article
          id="stage-one"
          className="d-flex flex-row flex-wrap pb-5 mb-sm-5"
        >
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Online Guide</p>
            <p>
              Students follow personalized, adaptive and interactive online
              guides from their dashboard.
            </p>
          </div>
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Weekly Webinars</p>
            <p>
              We host webinar sessions to help students explain further and
              answer questions.
            </p>
          </div>
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Group Meetups</p>
            <p>
              Students are grouped to encourage teamwork, collaboration and
              peer-to-peer learning.
            </p>
          </div>
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Hackathons</p>
            <p>
              We have monthly hackathons to encourage students to work on
              real-life projects and get a portfolio.
            </p>
          </div>
        </article>
      </div>
      <hr className="w-100 border-0 m-0" />
      <div className="col-12 col-sm-4">
        <div className="sticky-top" style={{ top: "100px" }}>
          <h4 className="d-block border-left borderx2 border-dark px-4 pt-1">
            7<sup>th</sup> - 10<sup>th</sup> Month
          </h4>
          <p className="d-block pl-4">Internship Placement</p>
        </div>
      </div>
      <div className="col-12 col-sm">
        <article id="stage-three" className="d-flex flex-row flex-wrap">
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Internship</p>
            <p>
              Students that meet our completion criteria get an internship place
              to further gain hands-on experience.
            </p>
          </div>
          <div className="col-12 col-sm-6 pb-4">
            <img src={helpIllustration} alt="" className="w-25" />
            <p className="lead mb-1 font-weight-bold">Job Placement</p>
            <p>
              We help students that complete their internship successfully hunt
              down jobs.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Structure
