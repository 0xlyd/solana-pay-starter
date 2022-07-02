import React from "react";
import HeadComponent from "../components/Head";

// Constants
const TWITTER_HANDLE = "aguadulcehq";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header">0xShop</p>
          <p className="sub-text">
            Crypto T-shirts and gadgets for the next generation
          </p>
        </header>

        <main>
          <img
            src="https://media4.giphy.com/media/Vi4MRwWi9sYpi/giphy.gif?cid=ecf05e47wqc3kpewoeijtd6hoi9zq38c3wjb78eagmi8h87u&rid=giphy.gif"
            alt="emoji"
          />
        </main>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE} with ❤️`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
