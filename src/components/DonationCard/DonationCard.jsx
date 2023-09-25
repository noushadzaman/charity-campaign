import PropTypes from 'prop-types';
import './DonationCard.css';
import { Link, useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, imageUrl, category, title, colors } = donation;
    const [first, second, third] = colors;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/donationdetail/${id}`)
    }

    return (
        <div
        onClick={handleShowDetail} className={`rounded-lg h-[320px] w-[312px] justify-self-center bg-[${first}]`}>

            <img className='w-[100%] h-[200px] rounded-t-lg' src={imageUrl} alt="" />

            <div className='mt-[16px] mx-[16px]'>
                <span className={`rounded px-[10px] py-[4px] text-[14px] bg-[${second}] text-[${third}]`}>{category}</span>
                <p className={`text-[${third}] mt-[8px] text-[20px] font-semibold`}>{title}</p>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DonationCard;