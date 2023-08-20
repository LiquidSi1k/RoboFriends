import React, { useState } from "react";

function AddEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entries, setEntries] = useState([]);

  const List = () => {
    return (
      <div className="card-top">
        <h3>New Robofriends</h3>
        {entries.map((entry, index) => (
          <div
            className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
            key={index}
          >
            <img src={`https://robohash.org/${index}?200x200`} alt="random" />
            <p>{entry.name}</p>
            <p>{entry.email}</p>
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, { name, email }]);
    setEmail("");
    setName("");
  };

  return (
    <>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pa3 ba b--green bg-lightest-blue pointer br3"
        />
        <input
          placeholder="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pa3 ba b--green bg-lightest-blue pointer br3"
        />
        <button
          className="pa3 ba b--green bg-lightest-blue pointer br3"
          type="submit"
        >
          Submit
        </button>
      </form>
      <br />
      <List />
    </>
  );
}

export default AddEmail;
