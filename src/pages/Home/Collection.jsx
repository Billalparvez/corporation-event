import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Collection = () => {
    return (
        <div className="my-32 ">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                <h1 data-aos="flip-right" className="text-3xl font-bold">See Our Another <br />
                    <span className="text-info">Greatest </span>Collection</h1>
                <p>Thanking to Blue, you can  both full width and left-right columned pages as you wish. One of the other major difference of this theme is to make you able to create unlimitless one page using different menu and different contents as well.</p>
            </div>
            <Marquee pauseOnClick>
                <div className="flex gap-3">
                    <div className="card w-full bg-base-100 shadow-xl text-center">
                        <figure><img className="h-64 w-80" src="https://i.postimg.cc/hPJz26Df/vintage-antique-reminder-down-wood.jpg" alt="Shoes" /></figure>
                        <div className="card-body border">
                            <h2 className="card-title">Most Unique Product !!!</h2>
                            <p className="font-bold">prices: $ 200</p>
                            <div className="card-actions  justify-center">
                                <Link className=" text-white btn btn-info" to={"/login"}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl text-center">
                        <figure><img className="h-64 w-80" src="https://i.postimg.cc/Lss36vkf/smartwatch-screen-digital-device.jpg" alt="Shoes" /></figure>
                        <div className="card-body border">
                            <h2 className="card-title">Most Unique Product !!!</h2>
                            <p className="font-bold">prices: $ 200</p>
                            <div className="card-actions  justify-center">
                                <Link className=" text-white btn btn-info" to={"/login"}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl text-center">
                        <figure><img className="h-64 w-80" src="https://i.postimg.cc/zGbmQw6z/gallery3.jpg" alt="Shoes" /></figure>
                        <div className="card-body border">
                            <h2 className="card-title">Most Unique Product !!!</h2>
                            <p className="font-bold">price: $ 200</p>
                            <div className="card-actions  justify-center">
                                <Link className=" text-white btn btn-info" to={"/login"}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl text-center">
                        <figure><img className="h-64 w-80" src="https://i.postimg.cc/QtWHxWFh/time-management-poster-1284-13492.jpg" alt="Shoes" /></figure>
                        <div className="card-body border">
                            <h2 className="card-title">Most Unique Product !!!</h2>
                            <p className="font-bold">prices: $ 200</p>
                            <div className="card-actions  justify-center">
                                <Link className=" text-white btn btn-info" to={"/login"}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Marquee>



        </div>
    );
};

export default Collection;