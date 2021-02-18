import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Resumedata from "./Resumedata";

import { Container, Row, Col } from "react-bootstrap";

function List() {
  const dispatch = useDispatch();

  const Resumearr = useSelector((state) =>
    state.ResVal.Resumearr ? state.ResVal.Resumearr : []
  );

  return (
    <div style={{ marginTop: "60px" }}>
      {Resumearr.length < 1 ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <span>There is no data!</span>
        </div>
      ) : (
        <Container>
          <Row>
            <Col xs={12} sm={3}></Col>
            <Col xs={12} sm={6}>
              {Resumearr.map((val, ky) => {
                return (
                  <Resumedata
                    name={val.name}
                    email={val.email}
                    address={val.address}
                    phone={val.phone}
                    experience={val.experience}
                    education={val.education}
                    skills={val.skills}
                  />
                );
              })}
            </Col>
            <Col xs={12} sm={3}></Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default List;
