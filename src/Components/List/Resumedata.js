import React from "react";
import "./resumedata.css";
import { Badge } from "react-bootstrap";

function Resumedata(props) {
  return (
    <div className="data">
      <div style={{ width: "100%", textAlign: "center" }}>
        <span className="name">{props.name}</span>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{ width: "50%", wordWrap: "break-word", textAlign: "center" }}
        >
          <span>{props.email}</span>
        </div>
        <div
          style={{ width: "50%", wordWrap: "break-word", textAlign: "center" }}
        >
          <span>{props.phone}</span>
        </div>
      </div>
      <div
        style={{ width: "100%", wordWrap: "break-word", margin: "10px 0px" }}
      >
        <span className="head">Adddress:</span> <br />
        <span>{props.address}</span>
      </div>

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <span className="head">Experience List:</span>
        </div>
        <div style={{ width: "50%" }}>
          <span className="head">Education List:</span>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {props.experience.map((val, ky) => {
            return (
              <div key={ky} className="exp">
                <span>{val.company}</span>
                <span>{val.year}</span>
                <span>{val.designation}</span>
              </div>
            );
          })}
        </div>
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {props.education.map((val, ky) => {
            return (
              <div key={ky} className="edc">
                <span>{val.degree}</span>
                <span>{val.year}</span>
                <span>{val.institute}</span>
              </div>
            );
          })}
        </div>
      </div>

      {props.skills.length > 0 ? (
        <>
          <div style={{ marginTop: "10px" }}>
            <span className="head">Skills:</span>
          </div>
          <div className="skill">
            {props.skills.map((val, ky) => {
              return (
                <Badge
                  pill
                  variant="primary"
                  key={ky}
                  style={{ marginRight: "3px" }}
                >
                  {val}
                </Badge>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default Resumedata;
