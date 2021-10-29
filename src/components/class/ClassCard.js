import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./ClassCard.css";

function ClassCard({ classData }) {
  const history = useHistory();

  const goToClass = () => {
    history.push(`/`);
  };

  return (
    <div className="classCard" style={{ marginRight: 30, marginBottom: 30 }} onClick={goToClass}>
      <div className="classCard__upper">
        <div className="classCard__className">{classData.className}</div>
        <div className="classCard__creatorName">{classData.owner}</div>
        <img src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg" className="classCard__creatorPhoto" />
      </div>
      <div className="classCard__middle"></div>
      <div className="classCard__lower">
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default ClassCard;   