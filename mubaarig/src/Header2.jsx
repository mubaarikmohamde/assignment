import React from "react";
function Qof(props){
return(
<>
<div style={{backgroundColor:"white",color:"black",width:"200px",height:"200px",border:"1px solid black",margin:"13px",display:"inline-block"}}>
<p> {props.name}</p>
<h2> {props.product}</h2>

<h3>{props.value}</h3>
<button style={{color:"white",backgroundColor:"blue", width:"120px",paddingLeft:"20px"}}> view</button>

</div>


</>


)


}
export default Qof;