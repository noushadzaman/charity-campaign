import PropTypes from 'prop-types';
import DonationCard from "../DonationCard/DonationCard";

const Donations = ({ donations, searchDonations }) => {


    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-[100px] mb-[182px] lg:w-[1318px] gap-[24px] mx-auto">
                {
                    searchDonations.length != 0 ?

                        searchDonations.map(donation => <DonationCard
                            key={donation.id}
                            donation={donation}
                        ></DonationCard>) :
                        donations.map(donation => <DonationCard
                            key={donation.id}
                            donation={donation}
                        ></DonationCard>)
                }
            </div>
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array.isRequired,
    searchDonations: PropTypes.array.isRequired,
};

export default Donations;