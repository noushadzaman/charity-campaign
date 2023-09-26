
const PerformedDonation = ({ donation }) => {
    const { id, imageUrl, amount, category, title, colors } = donation;
    const [first, second, third] = colors;

    return (
        <div className={`flex bg-[${first}]`}>
            <img className="w-[312px] h-[100%] rounded-l-lg" src={imageUrl} alt="" />
            <div>
                <div className='mt-[16px] mx-[16px]'>
                    <span className={`rounded px-[10px] py-[4px] text-[14px] bg-[${second}] text-[${third}]`}>{category}</span>
                    <p className={`text-[black] mt-[8px] text-[20px] font-semibold`}>{title}</p>
                    <p className={`text-[${third}] mt-[8px] text-[20px] font-semibold`}>${amount}</p>
                    <button className={`btn bg-[${third}] text-[white] mt-[10px] mb-[20px] decoration-gray-800`}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PerformedDonation;