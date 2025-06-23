import React from "react";
import Card from "./card"
import Contacts from "../contacts"
console.log(Contacts);

function App() {
  return (
    <div>
      <h1 className="heading">Indian Cricketers</h1>
      <Card
        name={Contacts[0].name}
        imgURL={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        imgURL={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        imgURL={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;