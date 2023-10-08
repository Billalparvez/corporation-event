import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Service = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { title, images, short_des, price, id } = service
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl ">
                <figure><img className="w-full h-72 " src={images} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_des}</p>
                    <p>prices:{price}</p>
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