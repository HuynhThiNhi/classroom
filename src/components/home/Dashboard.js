import React from "react";
import "./Dashboard.css";

import ClassCard from "../class/ClassCard";

function Dashboard({createdClasses}) {


  return (
    <div className="dashboard">
      <div className="dashboard__classContainer">
          {createdClasses.map((individualClass) => (
            <ClassCard key = {individualClass.id} classData={individualClass} />
          ))}
        </div>
    
    </div>
  );
}

export default Dashboard;
