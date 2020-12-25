import React,{useState} from 'react';

function Search({handleClick}) {


  const [name,setName]=useState('');
  const [date,setDate]=useState('');

  function handleName(evnt){
    setName(()=>evnt.target.value);
  }

  function handleDate(evnt){
    setDate(()=>evnt.target.value);
  }



	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input onChange={(evnt)=>handleName()} value={name} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input onChange={(evnt)=>handleDate()} value={date} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={()=>handleClick(name,date)}>Add</button>
		</div>
	);
}

export default Search;
