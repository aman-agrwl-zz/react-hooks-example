import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

const App = () => {
  const message = "This is my first variable rendered in JSX!";
  const handleClick = () => {
    alert("You clicked the message!")
  }
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  // fetch("https://randomuser.me/api/?results=3")
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   setContacts(data.results);
  // });
//   const contacts = [
//     { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
//     { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
//     { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 }
// ];
  return (
    <>
      {contacts.map(contact => (
       <ContactCard
       avatar={contact.picture.large}
       name={contact.name.first + " " + contact.name.last}
       email={contact.email}
       age={contact.dob.age}
     />
      ))}
    
    </>
  );
}

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={props.avatar}  alt="profile" />
      <div className="user-details">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
      {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  )
}

export default App;