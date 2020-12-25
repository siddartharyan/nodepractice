import React,{useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import {STUDENTS} from './studentsList.js';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {

  const [error,setError]=useState(false);
  const [verified,setVerified]=useState(false);
  const [studentname,setStudentname]=useState('');


// `joiningDate` && `validityDate` format "yyyy-mm-dd"
function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}


function handleClick(name,date){
  let k=STUDENTS.filter((student)=>student.name===name);
  if(k.length===0){
    setVerified(true);
    return;
  }
  k=checkValidity(date,k['validityDate']);
  if(!k){
    setError(true);
    return;
  }
  setError(false);
  setVerified(false);
  setStudentname(name);
}
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search handleClick={handleClick}/>
        <Error verified={verified} error={error} name={studentname} />
        <ResidentsList verified={verified} error={error} studentname={studentname}/>
      </div>
    </div>
  );
}

export default App;
