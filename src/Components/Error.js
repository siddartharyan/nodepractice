import React from 'react';

function Error({verified,error,name}) {
  let msg='';
  if(!verified && error){
    msg=`Sorry, ${name}'s validity has Expired!`;
  }
  else if(verified && !error){
    msg=`Sorry, ${name} is not a verified student!`;
  }
	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{msg}</div>
}

export default Error;
