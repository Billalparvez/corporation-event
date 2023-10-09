import Marquee from "react-fast-marquee";

const Right = () => {
    return (
        <div className="">
                <h1 className="text-2xl text-center text-info">Coming Soon...</h1>
                <Marquee direction="rigth">
                <div className="mt-5 shadow-2xl">
                    <img className="h-[500px] w-80" src="https://i.postimg.cc/hPJz26Df/vintage-antique-reminder-down-wood.jpg" alt="" />
                </div>              
        </Marquee>
            </div>
    );
};

export default Right;