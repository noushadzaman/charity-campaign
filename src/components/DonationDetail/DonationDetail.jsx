import { useLoaderData, useParams } from "react-router-dom";
import { addToDonations, getDonations } from "../../utilities/fakeDb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetail = () => {
    const allDonations = useLoaderData();
    const id = useParams();
    const donation = allDonations.find(donation => donation.id == id.id);
    const { imageUrl, amount, title, description } = donation;

    const handleDonation = (id) => {
        const donations = getDonations();
        console.log(donations);
        console.log(id);
        const exist = donations.find(donation => donation == id);
        console.log(exist);
        if (!exist) {
            addToDonations(id);
            console.log(id)
            toast.success(`Donated $${amount}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error(`Already donated here`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <div className="relative">
                    <img className="max-h-[700px] rounded" src={imageUrl} alt="" />
                    <div className="rounded-b h-[130px] absolute bottom-0 bg-gray-600 opacity-50 w-[100%]">
                    </div>
                </div>
                <button onClick={() => handleDonation(id.id)} className="text-[#fff] absolute bottom-0 m-[37px] font-semibold px-[26px] py-[16px] rounded opacity-100 overlay bg-[#FF444A]">
                    <p>Donate ${amount}</p>
                </button>
            </div>
            <div className="max-w-[1200px]">
                <h2 className="mt-[56px] mb-[24px] text-[24px] font-bold">{title}</h2>
                <p className="text-[#545454]">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetail;