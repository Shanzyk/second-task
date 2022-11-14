import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isInvalidValidEmail(email) {
    return /\S+@\S+\.co/.test(email);
  }

  const handleChange = (event) => {
    if (event.target.value.trim().length === 0) {
      setError("Email address is required");
    } else {
      if (!isValidEmail(event.target.value)) {
        setError("Please provide a valid e-mail address");
      } else {
        if (isInvalidValidEmail(event.target.value)) {
          setError("We are not accepting subscribtions from Colombia emails");
        } else {
          setError(null);
        }
      }
    }
    setMessage(event.target.value);
  };

  const checkboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (!isChecked) {
      setError(null);
    }
  };

  const buttonClick = (event) => {
    if (!isChecked) {
      setError("You must accept the terms and conditions");
    }
  };

  return (
    <body>
      <aside class="side">
        <img class="logo" src="pineapple.png"></img>

        <nav class="nav">
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Contact</a>
        </nav>
        <div class="subs">
          <h1>Subscribe to newsletter</h1>
          <p>
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </p>
        </div>
        <form class="form">
          <div class="emailpad">
            <input
              class="emailinput"
              type="email"
              name="email"
              id="email-field"
              placeholder="Type your email address here…"
              value={message}
              onChange={handleChange}
              required
            ></input>
            <input
              type="submit"
              class="icon"
              value=""
              onClick={buttonClick}
            ></input>
            <span id="email-error" class="error">
            {error}
          </span>
          </div>
          <div class="checkbox">
            <label>
              <input
                type="checkbox"
                class="large"
                name="checkbox"
                id="checkbox"
                onChange={checkboxChange}
                required
              />
              <span>
                I agree to <a href="#">terms of service</a>
              </span>
            </label>
          </div>
        </form>
        <hr class="line"></hr>
        <nav class="links">
          <a href="#" class="face"></a>
          <a href="#" class="inst"></a>
          <a href="#" class="twit"></a>
          <a href="#" class="yout"></a>
        </nav>
      </aside>
      <img class="img" src="image.png"></img>
    </body>
  );
}

export default App;
