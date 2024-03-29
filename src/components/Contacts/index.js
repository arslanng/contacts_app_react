import {useState, useEffect} from 'react'

import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { 
      fullname: "Murat", 
      phone_number: "507" 
    }, 
    { 
      fullname: "Necati", 
      phone_number: "554" 
    },
    { 
      fullname: "Mustafa", 
      phone_number: "542" 
    }
  ]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts])
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts