import React,{useState} from 'react';

function ResidentsList({verified,error,studentname}) {
  const [list,setList]=useState([]);
  function call(){
  let dup=[...list];
  dup.push(studentname);
  setList(list);
  }
  if(!verified && !error){
    call();
  }
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {
          (!verified && !error)?list.map((student,index)=>{
            return(
              <li key={`item${index+1}`} className="slide-up-fade-in">{student}</li>
            )
          }):''
        }
			</ul>
		</div>
	);
}

export default ResidentsList;
