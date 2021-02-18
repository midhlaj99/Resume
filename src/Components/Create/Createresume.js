import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setResData } from "../../Redux/action/Resumeaction";

import Education from "./Education"
import Experience from "./Experience"
import { Container, Row, Col,InputGroup,FormControl,Button } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const language=['c','c++','java','python','Javascript','PHP']

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function Createresume() {

  const [skills,setSkill]=useState([])
  const dispatch = useDispatch();

  const name = useSelector((state) =>state.ResVal.name ? state.ResVal.name : '');
  const email = useSelector((state) =>state.ResVal.email ? state.ResVal.email : '');
  const address = useSelector((state) =>state.ResVal.address ? state.ResVal.address : '');
  const phone = useSelector((state) =>state.ResVal.phone ? state.ResVal.phone : '');
  const status = useSelector((state) =>state.ResVal.status ? state.ResVal.status : '');
  const message = useSelector((state) =>state.ResVal.message ? state.ResVal.message : '');
  const Resumearr = useSelector((state) =>state.ResVal.Resumearr ? state.ResVal.Resumearr :[]);
  const Exparray = useSelector((state) =>state.ResVal.Exparray ? state.ResVal.Exparray : []);
  const Edcarray = useSelector((state) =>state.ResVal.Edcarray ? state.ResVal.Edcarray : []);

  useEffect(()=>{
    Clear()
  },[])

  const Clear=()=>{
    dispatch(setResData('name',''))
    dispatch(setResData('email',''))
    dispatch(setResData('address',''))
    dispatch(setResData('phone',''))
    dispatch(setResData('status',''))
    dispatch(setResData('message',''))
    setSkill([])
    let exparr = [];
    let obj = {};
    obj.company = "";
    obj.year = "";
    obj.designation = "";
    exparr.push(obj);
    dispatch(setResData("Exparray", exparr));

    let edcarr = [];
    obj = {};
    obj.degree = "";
    obj.year = "";
    obj.institute = "";
    edcarr.push(obj);
    dispatch(setResData("Edcarray", edcarr));
  }
  const Createresume=()=>{
    let emailval=validEmailRegex.test(email)
    let valid=false

    const checkdegree = Edcarray.every(Edcarray => Edcarray.degree!=='');
    const checkyear = Edcarray.every(Edcarray => Edcarray.year!=='');
    const checkinstitute = Edcarray.every(Edcarray => Edcarray.institute!=='');

    const checkcompany= Exparray.every(Edcarray => Edcarray.company!=='');
    const checkexpyear = Exparray.every(Edcarray => Edcarray.year!=='');
    const designation = Exparray.every(Edcarray => Edcarray.designation!=='');
    
    if(name && phone && address && email && checkdegree && checkyear && checkinstitute && checkcompany && checkexpyear && designation){
      if(emailval){
        valid=true
        dispatch(setResData('status',''))
        dispatch(setResData('message',''))
      }
      else{
        dispatch(setResData('status','error'))
        dispatch(setResData('message','Email is invalid'))
      }
     
      
      if(valid){
        let data=[...Resumearr]
        let obj={}
        obj.name=name
        obj.email=email
        obj.address=address
        obj.phone=phone
        obj.skills=skills
        obj.experience=Exparray
        obj.education=Edcarray
  
        data.push(obj)
        dispatch(setResData('Resumearr',data))
        dispatch(setResData('status','success'))
        dispatch(setResData('message','Created Successfully'))
      }
    }
    else{
      dispatch(setResData('status','error'))
      dispatch(setResData('message','Fill all fields'))
    }
    
  }
  const handlechange=(event)=>{
    dispatch(setResData(event.target.name,event.target.value))
  }
  return (
    <div style={{ marginTop: "60px" }}>
      <Container>
        <Row>
          <Col xs={12} style={{textAlign:'center',margin:'10px 0px'}}>
            <span style={{fontSize:'20px'}}>Create Resume</span>
          </Col>
          </Row>
        <Row>
          <Col xs={12} sm={1}></Col>
          <Col xs={12} sm={10}>
            
            <InputGroup className="mb-3">
              <FormControl
                name='name'
                placeholder="Name"
                aria-describedby="basic-addon1"
                value={name}
                onChange={handlechange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                name='email'
                placeholder="Email"
                aria-describedby="basic-addon1"
                value={email}
                onChange={handlechange}
              />
            </InputGroup>

            <InputGroup>
              <FormControl  className="mb-3" 
                name='address'
                as="textarea" 
                aria-label="With textarea" 
                placeholder='Address'
                value={address}
                onChange={handlechange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                name='phone'
                placeholder="Phone"
                aria-describedby="basic-addon1"
                value={phone}
                onChange={handlechange}
              />
            </InputGroup>

            <span>Education:</span>
            <Education/>
            
            <span>Experience:</span>
            <Experience/>

            <Typeahead
              multiple
              id="basic-typeahead-multiple"
              labelKey="name"
              onChange={setSkill}
              options={language}
              selected={skills}
              style={{marginTop:'15px'}}
              />
          </Col>
          <Col xs={12} sm={1}></Col>
        </Row>

        <Row style={{margin:'15px 0px'}}>
          <Col xs={12} style={{textAlign:'center'}}>
            {
              status==='error' ?
              <span style={{color:'red'}}>{message}</span>:''
            }
            {
              status==='success' ?
              <span style={{color:'green'}}>{message}</span>:''
            }
          </Col>
        </Row>

        <Row style={{margin:'15px 0px'}}>
          <Col xs={12} style={{textAlign:'center'}}>
            <Button variant="primary" onClick={Createresume}>Create</Button>
            <Button variant="outline-secondary" onClick={Clear} style={{marginLeft:'5px'}}>Clear</Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Createresume;
