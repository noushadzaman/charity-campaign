import PropTypes from 'prop-types';
import './DonationCard.css';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, imageUrl, category, title } = donation;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/donationdetail/${id}`);
    }

    return (
        <div
            onClick={handleShowDetail}
            className={`
            rounded-lg h-[320px] w-[312px] justify-self-center
            ${category == 'Health' && "bg-[#d9e5ff]"}
            ${category == 'Education' && "bg-[#ffe3e4]"}
            ${category == 'Clothing' && "bg-[#ebf6e2]"}
            ${category == 'Food' && "bg-[#feeae3]"}
            `}>
            <img className='w-[100%] h-[200px] rounded-t-lg' src={imageUrl} alt="" />
            <div className='mt-[16px] mx-[16px]'>
                <span className={`rounded px-[10px] py-[4px] text-[14px] 
                ${category == 'Health' && "bg-[#aec8ff]"}
                ${category == 'Education' && "bg-[#ffc3c5]"}
                ${category == 'Clothing' && "bg-[#d4ecc1]"}
                ${category == 'Food' && "bg-[#fdd2c4]"}

                ${category == 'Health' && "text-[#0052FF]"}
                ${category == 'Education' && "text-[#FF444A]"}
                ${category == 'Clothing' && "text-[#79C23F]"}
                ${category == 'Food' && "text-[#F87147]"}
                `}>{category}</span>
                <p className={`
                ${category == 'Health' && "text-[#0052FF]"}
                ${category == 'Education' && "text-[#FF444A]"}
                ${category == 'Clothing' && "text-[#79C23F]"}
                ${category == 'Food' && "text-[#F87147]"}
                 mt-[8px] text-[20px] font-semibold`}>{title}</p>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DonationCard;

