import React from "react";
import { useState } from "react";


const Form = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validarFormilario = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSumbmitForm = (e) => {
    e.preventDefault();
    if (validarFormilario(name) && /\S+@\S+.\S+/.test(email)) {
      setMessage("Gracias, te contactaremos vía mail")

    } else {
      setErrorMessage("Por favor, vuelva a verificar su información. Gracias") 
    }
  };
  return (
    <>
       <form onSubmit={onSumbmitForm}>
      <input style={{display: "flex", marginBottom:"15px", marginTop: "10px",borderColor: "#ff69b4"}}
          id="inputEmail1"
          placeholder="Full name"
          value={name}
          onChange={onChangeName}
        />
        <input style={{display: "flex", marginBottom:"15px", borderColor: "#ff69b4"}}
          id="inputEmail2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <button style={{ backgroundColor:"#90EE90", borderColor: "#ff69b4"}} type="submit">Send</button> 
      </form>
      <p style={{ textAlign: "center" }}> {errorMessage}</p>
      <p style={{ textAlign: "center" }}> {message} </p>
    </>
  );
};

export default Form;
