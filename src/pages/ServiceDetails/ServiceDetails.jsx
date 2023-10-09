import { useLoaderData, useParams } from "react-router-dom";
import Right from "../Shard/Right";

const ServiceDetails = () => {

    const datas = useLoaderData()
    const { id } = useParams()
    const parseId = parseInt(id)
    const details = datas.find(data => data.id === parseId)
    console.log(details)
    return (
        <div className="grid md:grid-cols-4 gap-5 p-3">
            <div className="md:col-span-3">
                <img className="w-full h-[550px]" src={details.images} alt="" />
                <div className="card mt-3 p-3 ">
                    <h1>{details.description}</h1>
                    {/* <button className="btn btn-info text-white mt-3">$ {details.price}</button> */}
                </div>
            </div>
            <Right></Right>
        </div>
    );
};

export default ServiceDetails;