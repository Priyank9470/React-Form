import React from "react";

function ViewButton(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
      >
        View
      </button>
      <div
        className="modal"
        id="formModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                Your details in form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3>Hello {props.newname}</h3>
              <h6 style={{ textAlign: "left" }}>
                Your name: {props.newname} <br />
                your email-id: {props.newemail} <br />
                Your mobile no.: {props.newmobile} <br />
                your city: {props.newcity} <br />
                your gender: {props.newradio} <br />
              </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewButton;
