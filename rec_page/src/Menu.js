import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, price, desc, rate, catogory, vegetarian} = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">Category: {catogory}</p>
              <p className="item-text">Zone: {desc}</p>
              <p className="item-text">Rating: {rate}</p>
              <p className="item-text">Price: {price}</p>
              <p className="item-text">{vegetarian}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
