import React from "react"

const Steps = (params) => {
  return (
    <section className="container py-5">
      <div
        className="row align-content-start align-items-start py-5"
        style={{ minHeight: "70vh" }}
      >
        <div className="col-12 col-sm-8 pb-5">
          <h1 className="font-weight-bold">Getting started is easy</h1>
        </div>
        <div className="w-100" />
        <div className="col-12 col-sm-4 pb-4">
          <h4 className="text-secondary border-top borderx2 pt-4">Step One</h4>
          <p className="lead-paragraph">
            Sign Up to see registration dashboard
          </p>
        </div>
        <div className="col-12 col-sm-4 pb-4">
          <h4 className="text-secondary border-top borderx2 pt-4">Step Two</h4>
          <p className="lead-paragraph">Make payment</p>
          <a
            href="//learn.motionwares.com/reserve-spot/payments"
            className="lead text-dark font-weight-medium"
          >
            <span className="border-bottom borderx2 border-dark pb-1">
              See Payment Plans
            </span>
            <svg className="text-icon">
              <use xlinkHref="../symbol-defs.svg#arrow-up-right" />
            </svg>
          </a>
        </div>
        <div className="col-12 col-sm-4 pb-4">
          <h4 className="text-secondary border-top borderx2 pt-4">
            Step Three
          </h4>
          <p className="lead-paragraph">
            Join our WhatsApp Q &amp; A Group for inquiries
          </p>
          <a
            href="//bit.ly/mds-qa"
            className="lead text-dark font-weight-medium"
          >
            <span className="border-bottom borderx2 border-dark pb-1">
              Join Group
            </span>
            <svg className="text-icon">
              <use xlinkHref="../symbol-defs.svg#arrow-up-right" />
            </svg>
          </a>
        </div>
        <div className="col-12 py-4">
          <article className="alert bg-dark rounded- d-flex flex-column flex-sm-row justify-content-center p-4 py-sm-3">
            <p className="lead my-sm-auto text-center text-white font-weight-semibold">
              Cohort 2 registration closes 6th July and classes start on 6th May
              2020
            </p>
            <a
              className="btn btn-outline-light btn-lg ml-sm-auto my-auto py-2"
              href="//learn.motionwares.com/signup"
            >
              Sign Up Now
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Steps
