import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@mui/material";
import { ModalContext } from "./context";
import Modal from "./Modal";
import ReactModal from 'react-modal';
import  {useEffect} from "react";

 

export default function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
      if(props.name === props.newName){
        setIsOpen(true)
      }
},[props.newName])

    const [isEditing, setEditing] = useState(false);
     const [open, setOpen] = React.useState(false);
     const [message, setMessage] = useState();

     const [showModal, updateShowModal] = React.useState(false);

     const toggleModal = () => updateShowModal(state => !state);
    
    
    
      const handleClick = (message) => {
        setOpen(true);
        setMessage(message)
      };
    
      const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
      
     
    


      const action = (
        <React.Fragment>
         
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

      function handleChange(e) {        
        props.setNewName(e.target.value);
      }
    

     function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, props.newName);
        console.log(props.newName);
        props.setNewName("");
        setEditing(false);
      }
      
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input
  id={props.id}
  className="todo-text"
  type="text"
  value={props.newName}
  onChange={handleChange}
/>
          </div>
          <div className="btn-group">
          <button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}
>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>

      <button >  
        Save
<span className="visually-hidden">new name for {props.name}</span></button>  
<ReactModal
        style={{ backgroundColor: 'grey', width: '70px', height: '100px' }}
isOpen={isOpen}
style={customStyles}
contentLabel="Example Modal"
onRequestClose={() => setIsOpen(false)}
><div >
  Same name
      </div>
      </ReactModal>   
       <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}>
          <Alert>
            {message}
            </Alert>
          </Snackbar>
          </div>
        </form>
      );
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input              
                id={props.id}
                type="checkbox"
                message ={message}
                defaultChecked={props.completed}
                
                onChange={() => {
                  props.toggleTaskCompleted(props.id)
                   handleClick("Task completed")
                  }}
              />
              <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}>
          <Alert>
            {message}
            </Alert>
          </Snackbar>
              <label className="todo-label" htmlFor={props.id}>
                {props.name} 
              </label>
            </div>
            <div className="btn-group">
            <button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <div>
      <ModalContext.Provider value={{ showModal, toggleModal }}>
      <div>
        <button onClick={toggleModal}>Delete <span className="visually-hidden">{props.name}</span></button>
        <Modal id={props.id} deleteTask={props.deleteTask} canShow={showModal} updateModalState={toggleModal} />
      </div>
    </ModalContext.Provider>


              <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}>
          <Alert>
            {message}
            </Alert>
          </Snackbar>
          
          </div>
            </div>
        </div>
      );
      

      return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

  }