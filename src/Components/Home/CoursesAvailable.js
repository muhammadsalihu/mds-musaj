import React from "react"

const CoursesAvailable = (params) => {
  return (
    <section className="container pt-5">
      <div className="row">
        <div className="col-12 col-sm-5 pb-4">
          <h1 className="font-weight-bold">Courses Available</h1>
          <p className="lead-paragraph">
            You're required to put in weekly effort in order to complete any of
            the courses.
          </p>
        </div>
        <div className="col-12 col-sm">
          <p className="h3 text-danger m-0">
            2hrs/
            <sup
              className="font-weight-bold text-dark"
              style={{ fontSize: "14px" }}
            >
              Per Day
            </sup>
          </p>
          <p className="mb-1">Online Guides</p>
        </div>
        <div className="col-12 col-sm">
          <p className="h3 text-danger m-0">
            2hrs/
            <sup
              className="font-weight-bold text-dark"
              style={{ fontSize: "14px" }}
            >
              Per Week
            </sup>
          </p>
          <p className="mb-1">Group Meetups</p>
        </div>
        <div className="col-12 col-sm">
          <p className="h3 text-danger m-0">
            3hrs/
            <sup
              className="font-weight-bold text-dark"
              style={{ fontSize: "14px" }}
            >
              Per Week
            </sup>
          </p>
          <p className="m-0">Webinar Sessions</p>
        </div>
      </div>
    </section>
  )
}

export default CoursesAvailable
