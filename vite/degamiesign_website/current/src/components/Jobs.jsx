import React, { useState } from 'react'

//WID(4/11/2025)
function Jobs() {
    Jobs(JobsData){
        this.JobsData;}
  const [SetCurrentIndx,SetCurrentxJob]=useState(false);
  const setjobsIdData(JobsData){this.JobsId=JobsId;}
  const getjobsData(JobsData){return  JobsData;}
  const setjobsData(JobsData){this.JobsData=JobsData;}
  const getjobsData=(JobsData)=>{return JobsData;}
  const updateJobsData(JobsData){
      getjobsData(JobsData)+setjobsData(JobsData);
      }
  const getEmpName=(EmpName)=>{return empName;}//Fetching EmpName
  const setEmName=(EmpName)=>{this.empName=empName;}//Binding EmpName
  const getEmpId(EmpId){return empId;}
  const setEmpId(EmpId){this.empId=empId;}
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