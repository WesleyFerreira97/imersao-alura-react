import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background } from '../styles/chatStyles';
export default function Chat(props) {
    const router = useRouter();
    const user = router.query.username;
    const [userData, setUserData] = useState({});
    const [flowers, setFlowers] = useState([]);
    const [indexTab, setIndexTab] = useState(0);

    useEffect(() => {
        async function queryUser() {
            // const response = await fetch(`https://api.github.com/users/${user}`);
            const response = await fetch(`https://api.github.com/users/peas`);
            const data = await response.json();
            setUserData(data);
        }
        queryUser();
    }, [router.query.username]);

    useEffect(() => {
        async function queryFlowers() {
            const response = await fetch(`https://api.github.com/users/peas/following`);
            const data = await response.json();
            
            setFlowers(data);
        }

        queryFlowers();

    }, [userData]);
    console.log(userData);
    return (
        <>
        <div className='background'>
            <div className='chat'>
                <div className='chat__wrap'>
                    <div className='chat__sidebar'>
                        <div className='chat__sidebar-header'>
                            <div className='header__wrap'>
                                <img className='header__image' src={userData.avatar_url} alt={userData.login} />
                                <h3 className='header__username'>{userData.name}</h3>
                            </div>
                            {/* <div className='header__search'>
                                <input type={'text'} placeholder={'Search'} />
                            </div> */}
                            <div className='header__tabs'>
                                <li className='tabs__item' onClick={() => setIndexTab(0)}><span>Followers</span></li>
                                <li className='tabs__item' onClick={() => setIndexTab(1)}><span>Following</span></li>
                                <li className='tabs__item' onClick={() => setIndexTab(2)}><span>Info</span></li>
                            </div>
                        </div>
                        <div className="chat__sidebar-tabs">
                            <div className='container-wrap' style={{transform: `translateX(-${indexTab * 100}%)`}}>
                                <div className='container-contacts'>
                                    {flowers.map(flower => {
                                        return (
                                            <div className='card-list' key={flower.id}>
                                                <div>{flower.login}</div>
                                                <div>{flower.location}</div>
                                            </div>
                                        )
                                    } )}
                                </div>
                                <div className='container-settings'>a
                                </div>
                                <div className='container-other'>w
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat__content'>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{Background}</style>
        </>

    );
}