import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Service = ({ service }) => {
    console.log(service)
    const { user } = useContext(AuthContext)
    const { title, images, short_des, price, id } = service
    return (
        <div>
            <div  className="card w-full bg-base-100 shadow-xl">
            {/* <div data-aos="fade-down"></div> */}
                <figure><img className="w-full h-72 " src={images} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title border-l-2 border-sky-500 mr-5">{title}</h2>
                    <p>{short_des}</p>
                    <p className="font-bold text-2xl"><span className="text-info">$</span> {price}</p>
                    <img src="" alt="" />
                    <div className="card-actions justify-end">
                        <Link className="btn btn-info hover:bg-sky-700 hover:border-none  text-white  " to={`/cardDetails/${id}`}>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;