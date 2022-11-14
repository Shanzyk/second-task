import { useState } from 'react';

function App() {
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [errorr, setErrorr] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Please provide a valid e-mail address');
    } else {
      setError(null);
    }

    if (event.target.value.trim().length === 0) {
      message.classList.add('error');
      setErrorr('Email address is required');
    } else {
      setErrorr(null);
    }
    setMessage(event.target.value);
  }

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
          <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
        </div>
        <form class="form">
          <div class="emailpad">
            <input class="emailinput" type="email" name="email" id="email-field" placeholder="Type your email address here…" value={message} onChange={handleChange}></input>
            <input type="submit" class="icon" value="" ></input>
          </div>
          <span id="email-error" class="error">{error, errorr}</span>
          <div class="checkbox">
            <label>
              <input type="checkbox" class="large" name="checkbox" id="checkbox" required />
              <span>I agree to <a href="#">terms of service</a></span></label>
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
  )
}

export default App;
