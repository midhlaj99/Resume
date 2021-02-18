import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setResData } from "../../Redux/action/Resumeaction";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

import style from "./resumeadd.module.css"

function Experience() {
  const dispatch = useDispatch();

  const Exparray = useSelector((state) =>state.ResVal.Exparray ? state.ResVal.Exparray : []);



  const handlechange=(event,index)=>{
    let arr=[...Exparray]
    arr[index][event.target.name]=event.target.value
    dispatch(setResData("Exparray", arr));

  }

  const Addmore=()=>{
    let arr=[...Exparray]
    let obj = {};
    obj.company = "";
    obj.year = "";
    obj.designation = "";
    arr.push(obj)
    dispatch(setResData("Exparray", arr));

  }

  const Remove=(index)=>{
    let arr=[...Exparray]
    arr.splice(index,1)
    dispatch(setResData("Exparray", arr));
  }
  return (
    <Container style={{marginTop:'10px'}}>
      
      {Exparray.map((val, ky) => {
        return (
          <Row key={ky}>
            <Col xs={4}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Company"
                  name='company'
                  aria-describedby="basic-addon1"
                  value={val.company ? val.company : ""}
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
                  name='designation'
                  placeholder="Designation"
                  aria-describedby="basic-addon1"
                  value={val.designation ? val.designation : ""}
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
                <span className={style.addmore} onClick={Addmore}>Add More Exprience</span>
            </Col>
        </Row>
    </Container>
  );
}
export default Experience;
