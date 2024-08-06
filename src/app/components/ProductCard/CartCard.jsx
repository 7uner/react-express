function CartCard({ img, name, des, price, shipping }) {
    return (
        <div className="card"> 
            <div className="container"> 
                <div className="card"> 
                    <div className="row"> 
                        <div className="col-4 border border-3"> 
                            <img 
                                src={img} // Dynamic image source
                                alt="broken"
                                className="w-100"
                            /> 
                        </div> 

                        <div className="col-6 d-flex flex-column justify-content-center border border-3"> 
                            <h1 className="mx-auto"> {name} </h1> 
                            <h3 className="mx-auto"> {des} </h3> 
                            <h1> Macbook Pro </h1> 
                            <div className="mx-auto"> 
                                <a className="btn btn-primary"> Delete </a>
                                <a className="btn btn-primary m-3"> Save for later </a>
                                <a className="btn btn-primary"> Details </a>
                            </div> 
                        </div> 

                        <div className="col-2 d-flex flex-column justify-content-center border border-3"> 
                            <h1 className="mx-auto"> ${price} </h1> 
                            <h3 className=""> 
                                {shipping === 0 ? 'Free shipping' : `$${shipping} Shipping`} 
                            </h3> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    );
}

export default CartCard;