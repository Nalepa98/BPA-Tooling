import './App.css';
import React,{useState} from 'react'
import pageOne from './/pg01.jpg'
import pageTwo from './/pg02.jpg'
import pageThree from './/pg03.jpg'
import pageFour from './/pg04.jpg'
import pageFive from './/pg05.jpg'
import pageSix from './/pg06.jpg'
import pageSeven from './/pg07.jpg'
import pageEight from './/pg08.jpg'

function App() {

  const [one,setOne]=useState(true)
  const [two,setTwo]=useState(false)
  const [three,setThree]=useState(false)
  const [four,setFour]=useState(false)
  const [five,setFive]=useState(false)
  const [six,setSix]=useState(false)
  const [seven,setSeven]=useState(false)
  const [eight,setEight]=useState(false)

  const clickLoginEBC = () => {
    setOne(false);
    setTwo(true);
    document.getElementById("LoginEBC").id = "LoginEBC_disabled"
    document.getElementById("LoginInsurer").id = "LoginInsurer_disabled"
    document.getElementById("SubmitNewRFQ_disabled").id = "SubmitNewRFQ"
    document.getElementById("EBCLogout_disabled").id = "EBCLogout"
  }
  const clickLoginInsurer = () => {
    setOne(false);
    setFive(true);
    document.getElementById("ProjectA_disabled").id = "ProjectA"
    document.getElementById("ProjectC_disabled").id = "ProjectC"
    document.getElementById("InsurerLogout_disabled").id = "InsurerLogout"
    document.getElementById("LoginEBC").id = "LoginEBC_disabled"
    document.getElementById("LoginInsurer").id = "LoginInsurer_disabled"
  }

  const clickEBCLogout = () => {
    setTwo(false)
    setOne(true)
    document.getElementById("LoginEBC_disabled").id = "LoginEBC"
    document.getElementById("LoginInsurer_disabled").id = "LoginInsurer"
    document.getElementById("EBCLogout").id = "EBCLogout_disabled"
    document.getElementById("SubmitNewRFQ").id = "SubmitNewRFQ_disabled"
  }
  const clickSubmitRFQ = () => {
    setTwo(false);
    setThree(true);
    document.getElementById("SubmitNewRFQ").id = "SubmitNewRFQ_disabled"
    document.getElementById("EBCLogout").id = "EBCLogout_disabled"
    document.getElementById("Submit_disabled").id = "Submit"
    document.getElementById("backSubmit_disabled").id = "backSubmit"
  }


  const clickSubmit = () => {
    setThree(false);
    setFour(true);
    document.getElementById("Submit").id = "Submit_disabled"
    document.getElementById("backSubmit").id = "backSubmit_disabled"
    document.getElementById("Home_disabled").id = "Home"
  }
  const clickBackSubmit = () => {
    setThree(false);
    setTwo(true);
    document.getElementById("Submit").id = "Submit_disabled"
    document.getElementById("backSubmit").id = "backSubmit_disabled"
    document.getElementById("SubmitNewRFQ_disabled").id = "SubmitNewRFQ"
    document.getElementById("EBCLogout_disabled").id = "EBCLogout"
  }

  const clickHome = () => {
    setFour(false);
    setTwo(true);
    document.getElementById("Home").id = "Home_disabled"
    document.getElementById("SubmitNewRFQ_disabled").id = "SubmitNewRFQ"
    document.getElementById("EBCLogout_disabled").id = "EBCLogout"
  }

  const clickProjectA = () => {
    setFive(false);
    setSix(true);
    document.getElementById("ProjectA").id = "ProjectA_disabled"
    document.getElementById("ProjectC").id = "ProjectC_disabled"
    document.getElementById("InsurerLogout").id = "InsurerLogout_disabled"
    document.getElementById("backProjectA_disabled").id = "backProjectA"
  }
  const clickProjectC = () => {
    setFive(false);
    setSeven(true);
    document.getElementById("ProjectA").id = "ProjectA_disabled"
    document.getElementById("ProjectC").id = "ProjectC_disabled"
    document.getElementById("InsurerLogout").id = "InsurerLogout_disabled"
    document.getElementById("backProjectC_disabled").id = "backProjectC"
  }
  const clickInsurerLogout = () => {
    setFive(false)
    setOne(true)
    document.getElementById("ProjectA").id = "ProjectA_disabled"
    document.getElementById("ProjectC").id = "ProjectC_disabled"
    document.getElementById("InsurerLogout").id = "InsurerLogout_disabled"
    document.getElementById("LoginEBC_disabled").id = "LoginEBC"
    document.getElementById("LoginInsurer_disabled").id = "LoginInsurer"
  }

  const clickbackProjectA = () => {
    setSix(false);
    setFive(true);
    document.getElementById("ProjectA_disabled").id = "ProjectA"
    document.getElementById("ProjectC_disabled").id = "ProjectC"
    document.getElementById("InsurerLogout_disabled").id = "InsurerLogout"
    document.getElementById("backProjectA").id = "backProjectA_disabled"
  }

  const clickbackProjectC = () => {
    setSeven(false);
    setFive(true);
    document.getElementById("ProjectA_disabled").id = "ProjectA"
    document.getElementById("ProjectC_disabled").id = "ProjectC"
    document.getElementById("InsurerLogout_disabled").id = "InsurerLogout"
    document.getElementById("backProjectC").id = "backProjectC_disabled"
  }


  return (
    <div className="App">
      {
      one?<img src={pageOne} alt="" className="page"/>:null
      }
      {
      two?<img src={pageTwo} alt="" className="page"/>:null
      }
      {
      three?<img src={pageThree} alt="" className="page"/>:null
      }
      {
      four?<img src={pageFour} alt="" className="page"/>:null
      }
      {
      five?<img src={pageFive} alt="" className="page"/>:null
      }
      {
      six?<img src={pageSix} alt="" className="page"/>:null
      }
      {
      seven?<img src={pageSeven} alt="" className="page"/>:null
      }
      {
      eight?<img src={pageEight} alt="" className="page"/>:null
      }


      <div id="LoginEBC" onClick={clickLoginEBC}>

      </div>

      <div id="LoginInsurer" onClick={clickLoginInsurer}>

      </div>

      <div id="SubmitNewRFQ_disabled" onClick={clickSubmitRFQ}>

      </div>

      <div id="Submit_disabled" onClick={clickSubmit}>

      </div>

      <div id="backSubmit_disabled" onClick={clickBackSubmit}>

      </div>

      <div id="EBCLogout_disabled" onClick={clickEBCLogout}>

      </div>

      <div id="ProjectA_disabled" onClick={clickProjectA}>

      </div>

      <div id="ProjectC_disabled" onClick={clickProjectC}>

      </div>

      <div id="InsurerLogout_disabled" onClick={clickInsurerLogout}>

      </div>

      <div id="backProjectA_disabled" onClick={clickbackProjectA}>

      </div>

      <div id="backProjectC_disabled" onClick={clickbackProjectC}>

      </div>
      
      <div id="Home_disabled" onClick={clickHome}>

      </div>
    </div>
  );
}

export default App;
