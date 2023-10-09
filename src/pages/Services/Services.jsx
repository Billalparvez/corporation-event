import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div data-aos="fade-zoom-in" className="text-center max-w-3xl mx-auto my-10 space-y-3">
                <h1 className="text-3xl font-bold" data-aos="fade-right">Our <span className="text-info">Services</span> </h1>
                <p data-aos="fade-right" data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">Thanking to Blue, you can  both full width and left-right columned pages as you wish. One of the other major difference of this theme is to make you able to create unlimitless one page using different menu and different contents as well.</p>
            </div>
            <div className="my-16 grid md:grid-cols-2 gap-4 lg:grid-cols-3 ">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;