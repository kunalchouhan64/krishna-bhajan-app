
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IndreshJiList from '../CatogorySongComp/IndreshJiList';

const IndreshJiBhajanList = () => {
    const [bhajan, SetBhajan] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Access Redux store directly within the component
    const items = useSelector((store) => store?.indreshji_bhajan?.items?.audios);
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
        return <div>Loading....</div>;
    }
    return (
        <>
            <div className='p-3 text-white font-Raleway h-1/2'>
                <h2 className='font-Montserrat text-lg'>All Bhajans - Indresh Ji 🙏</h2>
                <div className='overflow-y-scroll'>
                    {
                        bhajan.map((item) => (
                            <IndreshJiList item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default IndreshJiBhajanList
