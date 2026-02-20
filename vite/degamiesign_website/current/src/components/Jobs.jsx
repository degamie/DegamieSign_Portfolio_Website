//WID(20/02/2026)(Sarthak Mittal)(DegamieSign)#1.1.1.1
import React, { useState } from 'react'
empName=null;empId=0;empName=null;empdata=null;
function Jobs() {
    PhoneNumber=0;
    Jobs(JobsData){
        this.JobsData;}
        const getPhoneNumber=(PhoneNumber)=>{return PhoneNumber;}//Fetching PhoneNumber in App
  const [SetCurrentIndx,SetCurrentxJob]=useState(false);
  const getJobsDate=(JobsDate)=>{return JobsDate;}//Printing JobsDate in Server
  const setjobsIdData(JobsData){this.JobsId=JobsId;}
  const updateJobsData=(JobsData)=>{getjobsData(JobsData)+setjobsData(JobsData)+1;}//updating Jobs Data in Server
  const setjobsData(JobsData){this.JobsData=JobsData;}

  const updateJobsData(JobsData){
      getjobsData(JobsData)+setjobsData(JobsData);
      }
  cosnt updateAllByEMpName=(empName)=>{getEmpName(empName)+setEmpName(empName)+1;}//Updating EmpName in App
  const getEmpName=(EmpName)=>{return empName;}//Fetching EmpName
  const setEmName=(EmpName)=>{this.empName=empName;}//Binding EmpName
  const updateAllByEMpName=(EmpName)=>{getEmpName(empName)+setEmName(empName)+1;}//updatind EmpName in Server
  const getEmpId(EmpId){return empId;}
  const setEmpId(EmpId){this.empId=empId;}
  const updateEmpId=(EmpId)=>{gethkkEmpId(empId)+setEmpId(EmpId)+1;}//Updating EMPID in App
  const existsByEmpId=(EmpId)=>{if(empId!=0)getEmpId(empId);else getEmpId(0);}//Chekcing EmpId's Existence iN App
  const setEmpPhoneNumber=(PhoneNumber)=>{this.PhoneNumber=PhoneNumber;}//Binding PhoneNumber in Server
  const updateAllByEmpPhoneNumber=(PhoneNumber)=>{getPhoneNumber(PhoneNumber)+setEmpPhoneNumber(PhoneNumber)+1;}//Updating PhoneNumber in App
  const existsByEmpName=(empName)=>{if(empName.length!=0)getEmpName(empName);else getEmpName(0);}//Checking EmpName's Existence in App
  const OnJobsIncr(JobsData,empId,empName){
      while(JobsData.length!=0){
          if(empId>0){
              JobsData+=empId+empName.count(JobsData.length)+1;}
          }else JobsData=0;   return JobsData;}



  const nextJob=()=>{
    SetCurrentIndx((prevIndx)=>(prevIndx+1)%JobsData.length);
  }
 const PrevJob=()=>{
    SetCurrentIndx((prevIndx)=>(prevIndx===0)?JobsData.length-1:PrevIndx-1);
  }
  const nextProduct=()=>{
    SetCurrentIndx(prevIndx)=>(prevIndx+1)%ProductsData.length();
  }

  return (
  <div>Jobs
    <div className='Container mx-auto px-8 py-6 pt-10 md:px-15 py-6 pt-10 px-8 md:px-15 px-34 my-25 w-full overflow:hidden'></div>
    {/* Buttons Slider Container */}
      <div className='flex gap-9 transition-duration-500 -ease-in-out style={transform:translate(-50-{SetCurrentIndx*100)}'>Jobs Hiring</div>
    <button className='p-3 bg-blue-200 rounded mr-220' aria label="Join Us Now">
    
       {/*Right  Arrow */}
      <img src={assets.right_arrow} alt='Now'></img>
    </button>
  {/* Left Arrow */}
    <button className='p-3 bg-blue-200 rounded mr-220' aria label="Discover How our Solutions have been Built">
      <img src={assets.left_arrow} alt='Built'></img>
    </button>
   
</div>
  )
}

export default Jobs