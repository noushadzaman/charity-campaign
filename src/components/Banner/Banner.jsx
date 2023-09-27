import { useEffect, useState } from 'react';
import Donations from '../Donations/Donations';
import './Banner.css'

const Banner = () => {
    const [search, setSearch] = useState();
    const [donations, setDonations] = useState([]);
    const [searchDonations, setSearchDonations] = useState([]);


    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    useEffect(() => {
        const searchedDonations = donations.filter(donation => donation.category == search);
        setSearchDonations(searchedDonations);
    }, [search])

    const takeSearchValue = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        const firstLetter = searchValue.slice(0, 1).toUpperCase();
        const rest = searchValue.slice(1, searchValue.length);
        const searchText = firstLetter + rest;
        setSearch(searchText);
    }

    return (
        <div>
            <form className='banner' onSubmit={takeSearchValue}>
                <div className="form-control">
                    <div className="input-group flex flex-col items-center">
                        <h1 className="text-[48px] font-bold pb-[40px] pt-[120px]">We Grow By Helping People In Need</h1>
                        <div className="flex items-center pb-[210px]">
                            <input type="text" name='search' placeholder="Search by category" className="input input-bordered" />
                            <input type="submit" value="submit" className="form-control btn ml-[-12px] bg-[#FF444A]"></input>
                        </div>
                    </div>
                </div>
            </form>
            <Donations
                search={search}
                donations={donations}
                searchDonations={searchDonations}
            ></Donations>
        </div>
    );
};

export default Banner;