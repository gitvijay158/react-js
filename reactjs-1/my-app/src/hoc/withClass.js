import React from 'react';

const withClass = (ComponentWrapper,className) => {

   
    return  props => ( 
    <div className={className.App}>
        <ComponentWrapper {...props}   ></ComponentWrapper>
    </div>
    )
           
    
}

export default withClass;




