import React from "react";

function Form(props) {
  return (
    <>
      <form onSubmit={props.hendleSubmit}>
        <label htmlFor='userName'>
          Name: <input 
          type="text" 
          name="name" 
          id='userName'
          value={props.data.name}
          placeholder="Name" 
          onChange={props.handleChange}/>
        </label>
        <label htmlFor='userEmail'>
          Email: <input 
          type="text" 
          name="email" 
          id='userEmail'
          placeholder="Email" 
          onChange={props.handleChange}/>
        </label>
        <label htmlFor='userRole'>
          Role: <input 
          type="text" 
          name="role" 
          id='userRole'
          placeholder="Role" 
          onChange={props.handleChange}/>
        </label>
        <button type='submit'>Save</button>
      </form>
    </>
  );
}


export default Form