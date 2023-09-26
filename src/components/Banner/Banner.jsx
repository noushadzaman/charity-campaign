import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'> 
            <div className="form-control">
                <div className="input-group flex flex-col items-center">
                    <h1 className="text-[48px] font-bold pb-[40px] pt-[120px]">We Grow By Helping People In Need</h1>
                    <div className="flex items-center pb-[210px]">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn ml-[-12px] bg-[#FF444A]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;