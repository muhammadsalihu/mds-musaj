import React from "react"

const Comments = (props) => {
  return (
    <React.Fragment>
      {/*COMMENTS START */}
      <div className="col-12 col-sm-4 px-sm-3 pb-4">
        <article className="card h-100 testmonial__card p-4">
          <div className="d-flex flex-row pb-3">
            <span style={{ width: "60px" }} className="mr-3">
              <img
                src={props.avatar}
                alt=""
                width="60px"
                height="60px"
                className="mr-3 rounded-circle"
              />
            </span>
            <div className="my-auto">
              <p className="lead font-weight-medium m-0">{props.name}</p>
              <p className="text-caption m-0">{props.course}</p>
            </div>
          </div>
          <p className="lead-paragraph font-weight-lighter">{props.comment}</p>
        </article>
      </div>
      {/*COMMENTS END */}
    </React.Fragment>
  )
}

export default Comments
