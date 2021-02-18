import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setResData } from "../../Redux/action/Resumeaction";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

import style from "./resumeadd.module.css"

function Education() {
  const dispatch = useDispatch();

  const Edcarray = useSelector((state) =>state.ResVal.Edcarray ? state.ResVal.Edcarray : []);

 
  const handlechange=(event,index)=>{
    let arr=[...Edcarray]
    arr[index][event.target.name]=event.target.value
    dispatch(setResData("Edcarray", arr));

  }

  const Addmore=()=>{
    let arr=[...Edcarray]
    let obj = {};
    obj.degree = "";
    obj.year = "";
    obj.institute = "";
    arr.push(obj)
    dispatch(setResData("Edcarray", arr));

  }
  const Remove=(index)=>{
    let arr=[...Edcarray]
    arr.splice(index,1)
    dispatch(setResData("Edcarray", arr));
  }
  return (
    <Container style={{marginTop:'10px'}}>
      
      {Edcarray.map((val, ky) => {
        return (
          <Row key={ky}>
            <Col xs={4}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Degree"
                  name='degree'
                  aria-describedby="basic-addon1"
                  value={val.degree ? val.degree : ""}
                  onChange={(event)=>{handlechange(event,ky)}}
                />
              </InputGroup>
            </Col>
            <Col xs={3}>
              <InputGroup className="mb-3">
                <FormControl
                  name='year'
                  placeholder="Year"
                  aria-describedby="basic-addon1"
                  value={val.year ? val.year : ""}
                  onChange={(event)=>{handlechange(event,ky)}}

                />
              </InputGroup>
            </Col>
            <Col xs={4}>
              <InputGroup className="mb-3">
                <FormControl
                  name='institute'
                  placeholder="Institute"
                  aria-describedby="basic-addon1"
                  value={val.institute ? val.institute : ""}
                  onChange={(event)=>{handlechange(event,ky)}}

                />
              </InputGroup>
            </Col>
            <Col xs={1}>
            {
                ky!==0 ?
                <span className={style.remove} onClick={()=>{Remove(ky)}}>remove</span>
                :null
            }  
            </Col>
        </Row>
        
        );
      })}
        <Row>
            <Col style={{textAlign:'right'}}>
                <span className={style.addmore} onClick={Addmore}>Add More Education</span>
            </Col>
        </Row>
    </Container>
  );
}
export default Education;
