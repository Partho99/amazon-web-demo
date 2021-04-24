import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
        />

        <div className="home__row">
          <Product
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price={29.99}
            productImage="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
            rating={5}
          />
          <Product
            title="Duracell Optimum AA Batteries | 18 Count Pack | Lasting Power Double A Battery | Resealable Package for Storage | Alkaline AA Battery Ideal for Household and Office Devices"
            price={29.99}
            productImage="https://m.media-amazon.com/images/I/81rQOqg6S3L._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
            price={82.99}
            productImage="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            price={299.0}
            productImage="https://images-na.ssl-images-amazon.com/images/I/31MPSDnQmUL.jpg"
            rating={3}
          />
          <Product
            title="Samsung Galaxy Tab S6 Lite 10.4, 128GB WiFi Tablet Angora Blue - SM-P610NZBEXAR - S Pen Included"
            price={439.99}
            productImage="https://m.media-amazon.com/images/I/61EobGaoeaL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Mickey Mouse 7-Piece Figure Set, Easter Basket Stuffers, Toys for 3 Year Old Boys, Amazon Exclusive"
            price={14.99}
            productImage="https://m.media-amazon.com/images/I/819m8pZ+hjL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
export default Home;
