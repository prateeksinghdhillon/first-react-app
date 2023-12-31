import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
        style={{ zIndex: "5" }}
        role="alert"
      >
        <strong>{props.alert.type}: </strong>
        {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}

export default Alert;
