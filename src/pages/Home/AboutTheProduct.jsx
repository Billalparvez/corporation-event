import { GiSpotedFlower } from 'react-icons/gi';
// GiSpotedFlower
const AboutTheProduct = () => {
    return (
        <div className="my-32 ">
            <h1 className="text-center text-3xl font-bold">Few Bright <span className='text-info'> Key Features</span><br />
                About The Product</h1>
            <div className="grid md:grid-cols-3 gap-10 my-10 items-center" >

                <div className="md:col-span-2 ">
                    <p className="mb-5  md:text-3xl  ">Marketing Agency WordPress theme.
                        You’ll be able to get all the other pages,
                        blogroll and elements that you might <br /></p>
                    <div className='flex items-center gap-3 text-2xl font-bold'>
                        <a className='text-sky-500' href=""> <GiSpotedFlower></GiSpotedFlower></a>
                        <p>Quad core 2.3GHz Processor</p>
                    </div>
                    <div className='flex items-center gap-3 text-2xl font-bold'>
                        <a className='text-sky-500' href=""> <GiSpotedFlower></GiSpotedFlower></a>
                        <p>Smart listening experience by Adaptive Sound Control</p>
                    </div>
                    <div className='flex items-center gap-3 text-2xl font-bold'>
                        <a className='text-sky-500' href=""> <GiSpotedFlower></GiSpotedFlower></a>
                        <p>Ergonomic, enfolding design earpads</p>
                    </div>
                    <div className='flex items-center gap-3 text-2xl font-bold'>
                        <a className='text-sky-500' href=""> <GiSpotedFlower></GiSpotedFlower></a>
                        <p>Silver-coated oxygen-free copper</p>
                    </div>

                </div>
                <div>
                    <img className=" w-full " src="https://i.postimg.cc/ydnQPgf0/17017.jpg" alt="Shoes" />

                </div>
            </div>

        </div>
    );
};

export default AboutTheProduct;