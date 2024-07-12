function CartCard({ img, name, des, price, shipping }) {
  console.log(img);
  return (
    <div>
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src={img}
                alt="cart card image broken"
                className="card-img-top"
              ></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h1 className="mx-auto">{name}</h1>
              <h3 className="mx-auto">{des}</h3>
              <div className="mx-auto">
                <a className="btn btn-primary">Delete</a>
                <a className="btn btn-primary m-3">Save for Later</a>
                <a className="btn btn-primary">Details</a>
              </div>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center">
              <h1 className="">${price}</h1>
              <h3 className="">
                {shipping == 0 ? 'Free Shipping' : '$' + shipping + ' Shipping'}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
