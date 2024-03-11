import classes from "./ProductCardComponent.module.css";
import classNames from "classnames/bind";
const ctx = classNames.bind(classes);

function ProductCardComponent({ name, price, intro, details, colors }) {
  return (
    <>
      <div className={ctx("card-container")}>
        <h1 className={ctx("card-header")}>{name}</h1>

        <img
          src="./product-card-converse-chuck-taylor.png"
          className={ctx("product-image")}
          alt="Product Image"
        ></img>

        <div className={ctx("basic-info")}>
          <div className={ctx("purchase-info")}>
            <strong className={ctx("price")}>${price}.00</strong>
            <div className={ctx("shipping")}>free shipping</div>
          </div>
          <div className={ctx("intro")}>{intro}</div>
          <a href="#" className={ctx("more-info")}>
            More information &rarr;
          </a>
          <div className={ctx("colors")}>
            {colors.map((color) => (
              <div
                key={color}
                className={ctx("box")}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        <div className={ctx("details")}>
          <h2 className={ctx("details-header")}>product details</h2>
          <ul className={ctx("details-list")}>
            {details.map((detail) => (
              <li key={detail} className={`${ctx("details-list-item")}`}>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className={ctx("cart-button")}>
          <p className={ctx("p-no-margin")}>add to cart</p>
        </div>
      </div>
    </>
  );
}

export default ProductCardComponent;
