import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/spinner.css" />
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
        <form id="image-form">
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
            <button type="submit" className="btn">
              Reset
            </button>
          </div>
        </form>
        <div classname="display">
          <p>
            <span id="error-word" classname="error">
              abc
            </span>
            <span id="reason" classname="reason">
              def
            </span>
            <span id="correct-word" classname="correct">
              ghi
            </span>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
