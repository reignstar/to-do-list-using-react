import React, {useState} from "react";
import  {useEffect} from "react";
import { DATA } from "../data";
import ReactModal from 'react-modal';


function Form(props) {
    const [name, setName] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
      DATA.filter((element) => {
        if(element.name === name){
          setIsOpen(true)
        }
    });
  },[name])

    function handleChange(e) {
        setName(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
       props.addTask(name);
        setName("");
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

 
 
  return (
    <form >
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
     
        <button type="submit" onClick={handleSubmit} className="btn btn__primary btn__lg"> Add</button>
        <ReactModal
        style={{ backgroundColor: 'grey', width: '70px', height: '100px' }}
isOpen={isOpen}
style={customStyles}
contentLabel="Example Modal"
onRequestClose={() => setIsOpen(false)}
><div >
  This is in the list
      </div>
      </ReactModal>
       
    </form>
  );
}    

export default Form;