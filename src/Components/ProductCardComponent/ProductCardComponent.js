import classes from "./ProductCardComponent.module.css";

function ProductCardComponent() {
  return (
    <>
      <div className={classes["card-container"]}>
        <h2 className={classes["card-header"]}>
          converse chuck taylor all star low top
        </h2>

        <img
          src="./product-card-converse-chuck-taylor.png"
          className={classes["product-image"]}
          alt="Product Image"
          width={250}
          height={250}
        ></img>

        <div className={classes["basic-info"]}>
          <div className={classes["purchase-info"]}>
            <strong className={classes["price"]}>$66.00</strong>
            <div className={classes["shipping"]}>free shipping</div>
          </div>
          <div className={classes["intro"]}>
            Ready to dress up or down, these classic canvas Chucks are an
            everyday wardrobe staple.
          </div>
          <a href="#" className={classes["more-info"]}>
            More information &rarr;
          </a>
          <div className={classes["colors"]}>
            <div className={`${classes["box"]} ${classes["box-black"]}`}></div>
            <div className={`${classes["box"]} ${classes["box-blue"]}`}></div>
            <div className={`${classes["box"]} ${classes["box-red"]}`}></div>
            <div className={`${classes["box"]} ${classes["box-yellow"]}`}></div>
            <div className={`${classes["box"]} ${classes["box-green"]}`}></div>
            <div className={`${classes["box"]} ${classes["box-brown"]}`}></div>
          </div>
        </div>

        <div className={classes["details"]}>
          <p className={classes["details-header"]}>product details</p>
          <ul className={classes["details-list"]}>
            <li>
              <p>Lightweight, durable canvas sneaker.</p>
            </li>
            <li>
              <p>Lightly padded footbed for added comfort.</p>
            </li>
            <li>
              <p>Iconic Chuck Taylor ankle patch.</p>
            </li>
          </ul>
        </div>

        <div className={classes["cart-button"]}>
          <p className={classes["p-no-margin"]}>add to cart</p>
        </div>
      </div>
    </>
  );
}

export default ProductCardComponent;
