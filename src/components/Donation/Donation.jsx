import { useLoaderData } from "react-router-dom";
import { getDonations } from "../../utilities/fakeDb";
import PerformedDonation from "../PerformedDonation/PerformedDonation";

const Donation = () => {
    const donations = getDonations();
    const allDonation = useLoaderData();

    let performedDonations = [];
    for (const id in donations) {
        const performedDonation = allDonation.find(donation => donation.id == donations[id]);
        performedDonations.push(performedDonation)
    }
    console.log(performedDonations)
    return (
        <div className="grid grid-cols-2 gap-[24px] mx-auto max-w-[1300px]">
            {
                performedDonations.map(donation => <PerformedDonation
                    key={donation.id}
                    donation={donation}
                ></PerformedDonation>)
            }
        </div>
    );
};

export default Donation;