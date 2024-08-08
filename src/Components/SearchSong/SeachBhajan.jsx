import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BhajanListKrishna from './BhajanListKrishna';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BhajanListIndreshji from './BhajanListIndreshji';
import FooterNav from '../Footer/FooterNav';

const SearchBhajan = () => {
    const [searchtext, setSearchedText] = useState('');
    const [allBhajanskrishna, setAllBhajansKrishna] = useState([]);
    const [allBhajansIndresh, setAllBhajansIndresh] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const bhajans_krishna = useSelector((store) => store?.kanha_bhajan?.items[0]?.audios);
    const bhajans_indreshji = useSelector((store) => store?.kanha_bhajan?.items[1]?.audios);

    const fetchAllBhajans = async () => {
        try {
            if (bhajans_krishna && bhajans_indreshji) {
                setAllBhajansKrishna(bhajans_krishna);
                setAllBhajansIndresh(bhajans_indreshji)
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllBhajans();
    }, [bhajans_krishna]);

    // Filtering the bhajans based on the search text
    const filteredBhajanskrishna = allBhajanskrishna.filter((bhajan) =>
        bhajan.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    const filteredBhajansIndreshji = allBhajansIndresh.filter((bhajan) =>
        bhajan.name.toLowerCase().includes(searchtext.toLowerCase())
    );

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <>
            <div className='bg-gradient-to-b from-zinc-900 via-violet-900 to-zinc-900 text-white p-4 font-Raleway space-y-5 min-h-screen'>
                <div className='py-4 px-3 flex items-center justify-evenly w-full'>
                    <input
                        value={searchtext}
                        onChange={(e) => setSearchedText(e.target.value)}
                        type="text"
                        placeholder='Search Bhajan '
                        className='bg-transparent py-2 px-3 border-fuchsia-500 border text-white placeholder-white font-Raleway text-sm w-4/5 rounded-lg focus:outline-none'
                    />
                    <div>
                        <FontAwesomeIcon className='text-xl px-3 text-cyan-500 font-semibold' icon={faSearch} />
                    </div>
                </div>
                {
                    filteredBhajanskrishna.map((item) => (
                        <BhajanListKrishna key={item.id} item={item} />
                    ))
                }
                {
                    filteredBhajansIndreshji.map((item) => (
                        <BhajanListIndreshji key={item.id} item={item} />
                    ))
                }
            </div>
            <FooterNav/>
        </>

    );
};

export default SearchBhajan;
