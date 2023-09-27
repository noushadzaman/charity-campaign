import { useLoaderData } from "react-router-dom";
import { getDonations } from "../../utilities/fakeDb";
import PerformedDonation from "../PerformedDonation/PerformedDonation";
import { useState } from "react";

const Donation = () => {

    const donations = getDonations();
    const allDonation = useLoaderData();
    const [lengthState, setLengthState] = useState(4);

    const seeMore = () => {
        setLengthState(performedDonations.length);
    }

    let performedDonations = [];
    for (const id in donations) {
        const performedDonation = allDonation.find(donation => donation.id == donations[id]);
        performedDonations.push(performedDonation)
    }
    return (
        <div className="flex flex-col items-center pb-[105px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mx-auto max-w-[1300px] pt-[100px] mx-[20px]">
                {
                    performedDonations.slice(0, lengthState).map(donation => <PerformedDonation
                        key={donation.id}
                        donation={donation}
                    ></PerformedDonation>)
                }
            </div>
            {
                (lengthState === 4 && performedDonations.length > 4 ) && <button className="btn bg-[#009444] mt-[50px] text-[white]" onClick={seeMore}> See All</button>
            }
        </div>
    );
};

export default Donation;
