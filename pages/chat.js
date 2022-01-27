import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background } from '../styles/chatStyles';
export default function Chat(props) {
    const router = useRouter();
    const user = router.query.username;
    const [userData, setUserData] = useState({});
    const [flowers, setFlowers] = useState([]);

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
                            <div className='chat__sidebar-header--wrap'>
                                <img className='header__image' src={userData.avatar_url} alt={userData.login} />
                                <h3 className='header__username'>{userData.name}</h3>
                            </div>
                            <div className='header__search'>
                            </div>
                        </div>
                        <div className="chat__sidebar-list">
                            {flowers.map(flower => {
                                return (
                                    <div className='card-list' key={flower.id}>
                                        <div>{flower.login}</div>
                                        <div>{flower.location}</div>
                                    </div>
                                )
                            } )}
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