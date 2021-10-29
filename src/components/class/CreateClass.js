import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const CreateClass = ({ createDialog, setCreateDialog, setCreatedClasses }) => {
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [room, setRoom] = useState("");
  const [subject, setSubject] = useState("");

  const handleClose = () => {
    setCreateDialog(false);
  };

  const creatClass = async () => {
    if (className == null || className.trim().length == 0) {
      alert("Class Name isn't empty");
      return;
    }

    try {
      const newClass = {
        className: className,
        section: section,
        subject: subject,
        room: room,
        owner: "Nguyen Huy Khanh",
      };

      const res = await fetch("http://localhost:3000/classes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(newClass),
      });

      handleClose();
      alert("Classroom created successfully!");
      
      const newClasses = await fetch("https://classroom-api-1712636.herokuapp.com/classes");
      const data = await newClasses.json();

      setCreatedClasses(data);

      setClassName = ""
      setRoom = ""
      setSection = ""
      setSubject = ""
      
    } catch (error) {
      alert(`Cannot create class - ${error.message}`);
    }
  };

  return (
    <div>
      <Dialog
        open={createDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create class</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Class Name"
            type="text"
            fullWidth
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Section"
            type="text"
            fullWidth
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Subject"
            type="text"
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Room"
            type="text"
            fullWidth
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={creatClass} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CreateClass;
