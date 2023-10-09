import { Link } from "react-router-dom";


const Bannar = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/qBSHKSWQ/two-young-businessman-having-successful-meeting-restaurant.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" text-white max-w-3xl">
                        <h1  className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold font_popis">Welcome To LaunchPage</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi   exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <input  data-aos="fade-right" className="input rounded-3xl text-black mb-3 md:mb-0 lg:mb-0 " type="text" placeholder="Your Email " />
                            <Link to={'/login'} data-aos="fade-left"  className="btn bg-info border-none rounded-3xl ml-3  text-white  hover:bg-sky-500">Get Started</Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Bannar;


// const Carousel = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen " style={{ backgroundImage: 'urdl(https://i.postimg.cc/Zqx0LwrD/Rectangle-1.png)' }}>
//                 <div className="hero-overlay bg-opacity-60"></div>
//                 {/* <div className="hero-content text-center text-neutral-content flex gap-10 grid-cols-5"> */}
//                 <div className="max-w-md ">
//                     <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//                     <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <button className="btn btn-primary">Get Started</button>
//                 </div>
//                 {/* slider */}
//                 <div>
//                     <div className="carousel w-full h-[500px] relative">
//                         <div id="slide1" className="carousel-item relative w-full">
//                             <img className="w-full" src="https://i.postimg.cc/Zqx0LwrD/Rectangle-1.png" />
//                             <div className="absolute flex justify-center transform -translate-y-1/2 left-14 right-5 bottom-0">
//                                 <a href="#slide1" className="btn btn-circle">❮</a>
//                                 <a href="#slide2" className="btn btn-circle">❯</a>
//                             </div>
//                         </div>
//                         <div id="slide2" className="carousel-item relative w-full">
//                             <img src="https://i.postimg.cc/rFHh8JRb/Rectangle-28.png" className="w-full" />
//                             <div className="absolute flex justify-center transform -translate-y-1/2 left-14 right-5 bottom-0">
//                                 <a href="#slide1" className="btn btn-circle">❮</a>
//                                 <a href="#slide3" className="btn btn-circle">❯</a>
//                             </div>
//                         </div>
//                         <div id="slide3" className="carousel-item relative w-full">
//                             <div className="absolute flex justify-center transform -translate-y-1/2 left-14 right-5 bottom-0">
//                                 <a href="#slide2" className="btn btn-circle">❮</a>
//                                 <a href="#slide4" className="btn btn-circle">❯</a>
//                             </div>
//                         </div>
//                         <div id="slide4" className="carousel-item relative w-full">
//                             <div className="absolute flex justify-center transform -translate-y-1/2 left-14 right-5 bottom-0">
//                                 <a href="#slide3" className="btn btn-circle">❮</a>
//                                 <a href="#slide1" className="btn btn-circle">❯</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         // </div>
//     );
// };

// export default Carousel;