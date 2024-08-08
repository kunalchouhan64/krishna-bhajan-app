import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const KrishnaCategoryComponent = () => {
    const [avatar, setAvatar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Access Redux store directly within the component
    const items = useSelector((store) => store?.kanha_bhajan?.items[0]?.audios);

    useEffect(() => {
        const fetchKrishnaAvatar = async () => {
            try {
                if (items) {
                    setAvatar(items);
                }
            } catch (err) {
                console.log(err);

            } finally {
                setIsLoading(false);
            }
        };

        fetchKrishnaAvatar();
    }, [items]);

    // console.log(avatar); 


    if (isLoading) {
        return <div className='text-white font-Raleway text-center'>Loading....</div>;
    }


    return (
        <>
            <div className='h-auto py-5 overflow-x-auto w-full flex justify-start items-center space-x-4'>
                {
                    avatar.map((item) => {
                        return (
                            <Link to={`/now-playing-kanha/${item.id}`} key={item.id} className='w-auto flex-shrink-0'>
                                <img className='object-center object-cover h-20 rounded-full w-20' src={item.avatar} alt={item.name || 'Avatar'} />
                            </Link>
                        )
                    })
                }
            </div>

        </>
    )
}

export default KrishnaCategoryComponent;
