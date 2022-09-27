import React from "react";


const withClass = (props)=>{
    <div props={props.classes} > {props.children}</div>
}

export default withClass;