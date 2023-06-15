import React, { useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  const checkInclusiveWords = async (event) => {
    event.preventDefault();

    const inputString = document.getElementById("prompt").value;

    try {
      const response = await fetch("http://localhost:8080/check-inclusive-words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputString),
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Croud</title>
      <header>
        <div className="navbar">
          <div className="logo">
            <h2>Croud</h2>
          </div>
        </div>
      </header>
      <main className="form-section">
        <h1>The inclusive language checker, by Croud</h1>
        <p>
          At Croud, we prioritize inclusivity across all aspects of our work,
          embracing diversity in race, gender, age, religion, identity, and
          experience. This commitment extends to the content we create.
          Introducing Casey, our language analysis tool inspired by feminist
          author and advocate for non-sexist language, Casey Miller. Casey helps
          detect potentially offensive language choices, promoting
          gender-neutral, non-polarizing, race-aware, religion-sensitive, and
          equal phrasing. Casey is free to use, empowering you to enhance
          inclusivity in your day-to-day writing.
        </p>
        <form id="image-form" onSubmit={checkInclusiveWords}>
          <input
            type="text"
            placeholder="Enter Text"
            id="prompt"
            name="prompt"
          />
          <div>
            <button type="submit" className="btn">
              Check In
            </button>
            <button type="reset" className="btn">
              Reset
            </button>
          </div>
        </form>
        <div className="display">
          {results.length === 0 ? (
            <p>No inclusive words found.</p>
          ) : (
            <table>
              {/* <thead>
                <tr>
                  <th>Inclusive Word</th>
                  <th>Description</th>
                  <th>Alternate Words</th>
                </tr>
              </thead> */}
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td><span className="inclusive-word bold">{result.inclusiveWord}</span></td>
                    <td><span className="description">{result.description}</span></td>
                    <td><span className="alternate-word">{result.alternateWords}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
