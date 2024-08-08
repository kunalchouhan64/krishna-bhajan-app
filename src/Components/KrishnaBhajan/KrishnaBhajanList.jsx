
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import KrishnaList from '../CatogorySongComp/KrishnaList';

const KrishnaBhajanList = () => {
    const [bhajan, SetBhajan] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Access Redux store directly within the component
    const items = useSelector((store) => store?.kanha_bhajan?.items[0]?.audios);
    const FetchBhajan = async () => {
        try {
            if (items) {
                SetBhajan(items);
            }
        } catch (err) {
            console.log(err);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        FetchBhajan();
    }, [items]);

    console.log(bhajan);


    if (isLoading) {
        return <div className='text-white text-center font-Raleway'>Loading....</div>;
    }
    return (
        <>
            <div className='p-3 text-white font-Raleway'>
                <h2 className='font-Montserrat text-lg'>All Bhajans - Krishna 🙏</h2>
                <div className='overflow-y-scroll'>
                    {
                        bhajan.map((item) => (
                            <KrishnaList item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default KrishnaBhajanList
