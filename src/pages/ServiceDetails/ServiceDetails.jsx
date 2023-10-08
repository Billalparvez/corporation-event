import { useLoaderData, useParams } from "react-router-dom";
import Left from "../Shard/Left";
import Collection from "../Home/Collection";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

const ServiceDetails = () => {
    // const { user } = useContext(AuthContext)
    const datas = useLoaderData()
    const { id } = useParams()
    const parseId = parseInt(id)
    const details = datas.find(data => data.id === parseId)
    console.log(details)
    return (
        <div className="grid grid-cols-3 gap-5 p-5">
            <div className="col-span-2">
                <img className="w-full h-[550px]" src={details.images} alt="" />
                <div className="card-body">
                    <h1>{details.description}</h1>
                    <button className="btn btn-info">Prices: {details.price}</button>
                </div>
            </div>
            {/* <Collection></Collection> */}
        </div>
    );
};

export default ServiceDetails;