import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <div>
                    <h2 className='text-6xl font-bold'>Build Your Ideal <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] font-extrabold text-5xl'>Development Stack</span></h2>
                    <p className='text-[#475569] mt-5'>Explore frontend, backend, database, and tooling options, <br />compare them side by side, and put together the stack that fits your <br /> next project.</p>
                    <div className='flex items-center gap-4 mt-5'>
                        <button className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] w-[200px] h-[40px] cursor-pointer rounded-md text-white font-semibold'>Explore Technologies</button>
                        <button className='font-semibold border w-[150px] h-[40px] cursor-pointer border-gray-300 rounded-md'>Learn More</button>
                    </div>
                </div>
                <div>
                    <img className='w-2xl h-auto' src={banner} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;