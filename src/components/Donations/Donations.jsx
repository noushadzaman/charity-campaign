import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";
import './Donations.css';

const Donations = () => {
    const donations = useLoaderData();

    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-[100px] mb-[182px] lg:w-[1318px] gap-[24px] mx-auto">
                {
                    donations.map(donation => <DonationCard
                        key={donation.id}
                        donation={donation}
                    ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donations;