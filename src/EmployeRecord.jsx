
import React from "react";
function EmployeRecord() {
const List= [
    {id: 1, Salary:9000,Position:'SeniorSDE' , Company:'Amazon'},
    {id: 2, Salary:12000 ,Position:'JuniorSDE' , Company:'Google'},
    {id: 3, Salary:10000 ,Position:'ProjectManeger' , Company:'Netflix'},
    

]
  const listItems = List.map(
List => <div key={List.id}> 
<b style={{color:'red'}}>{'Salary: '}</b>{List.Salary}: &nbsp; {'-'}<b style={{color:'red'}}>{'Position: '}</b>{List.Position} {'-'}<b style={{color:'red'}}>{'Company: '}</b>{List.Company}
</div>)

return (
  <div style={{ margin: 0, padding: 0, alignSelf: "flex-start", textAlign: "left" }}>
    {listItems}
  </div>
);



};

export default EmployeRecord;
