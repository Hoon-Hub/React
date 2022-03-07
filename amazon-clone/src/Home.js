import React from "react";
import "./Home.css";
import Product from "./Product.js";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home_image"
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="2323"
            title="제품번호1"
            price={3500}
            image="https://dreamfarm.pro:58287/shop/upload_file/goods_img/1565599260_1.jpg"
            rating={4.8}
          />
        </div>
        <div className="home_row">
          <Product
            id="2528"
            title="제품번호2"
            price={8500}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtR0YRhLV8cRmUFIMIsnour07UGrXX1TyZA&usqp=CAU"
            rating={4.7}
          />
          <Product
            id="1832"
            title="제품번호3"
            price={8000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGK4xkrAaOmdK7g_i_1GJROwRwaxo-t2Ljw&usqp=CAU"
            rating={4.8}
          />
          <Product
            id="9042"
            title="제품번호4"
            price={10500}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oLlJoLrQIVqW4oy8QLWjVv7Xtq5QaviVUw&usqp=CAU"
            rating={4.9}
          />
        </div>
        <div className="home_row">
          <Product
            id="2442"
            title="제품번호5"
            price={13890}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Bbirid9qZG1turPzHhrjxvxCdgkookomXw&usqp=CAU"
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
