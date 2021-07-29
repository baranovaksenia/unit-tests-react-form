import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [age, setAge] = useState("");
  const [animal, setAnimal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!submitted) {
    return (
      <div className="container">
        <h1 data-testId="h1tag">Welcome {name}!!</h1>
        <form data-testId="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <label htmlFor="age">Enter your age:</label>
          <input
            type="number"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <br></br>
          <label htmlFor="animal">Favorite Animal</label>
          <input type="text" onChange={(e) => setAnimal(e.target.value)} />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Welcome {name}</h1>
        <h2> Your age is {age}</h2>
        <h2>Your favorite animal is {animal}</h2>
      </div>
    );
  }
}
