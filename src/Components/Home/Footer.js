import React from "react"
import Logo from "../../assets/mwares-logo.svg"

const Footer = () => {
  return (
    <footer className="container">
      <div className="row py-5 text-urls">
        <div className="col-12 col-sm-4 text-center text-sm- d-none d-sm-block">
          <img src={Logo} alt="" className="text-icon text-muted display-34" />
        </div>
        <aside className="col-12 col-sm">
          <p className="small font-weight-bolder text-muted">MOTIONWARES</p>
          <a aria-current="page" className href="/academy/">
            Our Academy
          </a>
          <br />
          <a className href="//hire.motionwares.com">
            Hire a Pro
          </a>
          <a className="d-none" href="//mentor.motionwares.com">
            Volunteer as a Mentor
          </a>
          <br />
          <a className href="//pro.motionwares.com/home">
            Get Hired
          </a>
        </aside>
        <div className="col-12 col-sm">
          <p className="small font-weight-bolder text-muted mt-4 mt-sm-0">
            COMPANY
          </p>
          <article className="pb-3">
            <a className href="/faq">
              Our Academy FAQ's
            </a>
            <br />
            <a
              href="//blog.motionwares.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </article>
        </div>
        <div className="w-100 py-3 py-lg-4" />
        <div className="col-12 col-sm offset-sm-4 text-muted text-sm-right font-weight-bold pt-5">
          <small className="font-weight-bold">Disclaimers</small>
          <p className="small">
            Motionwares, MDS and the Motionwares logo are trademarks of
            Motionwaress Digital Solutions, Ltd.
            <br /> Motionwares Digital Solutions Ltd, a company duly registered
            with the Corporate Affairs Commission, Nigeria.
          </p>
          <p className="mb-5 small">
            ©COPYRIGHT {/* */}2020{/* */}. ALL RIGHTS RESERVED ツ
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
