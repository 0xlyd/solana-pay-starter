import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HeadComponent from "../components/Head";
import Product from "../components/Product";

// Constants
const TWITTER_HANDLE = "aguadulcehq";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

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

          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
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
