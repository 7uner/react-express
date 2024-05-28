function CartCard(img, names, des, price, shipping) {
  return (
    <div>
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src="src\app\Assets\MacBookPro.jpg">
                alt = "cart card image broken" className = "w-100"
              </img>
            </div>
            <div className="col-6 border border-3">
              <h1>Mac Book Pro</h1>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center border border-3">
              <h1>Mac Book Pro</h1>
              <div className="">
                <a className="btn btn-primary">Delete</a>
                <a className="btn btn-primary">Save For Later</a>
                <a className="btn btn-primary">Details</a>
              </div>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center border border-3">
              <h1 className="">{price}</h1>
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
