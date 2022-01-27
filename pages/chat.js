import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background, ChatContent } from '../styles/chatStyles';
import { CardList } from '../src/components/cardList/index';
import { AnimationBox } from '../src/components/Animations/index';
import { queryUser } from '../services/apiGitHub';

export default function Chat() {
    const router = useRouter();
    const user = router.query.username;
    const [userData, setUserData] = useState({});
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [indexTab, setIndexTab] = useState(0);
    const [mobileOpenChat, setMobileOpenChat] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [currentUserData, setCurrentUserData] = useState([]);
    queryUser(user).then(data => {
        setUserData(data);
    });
    useEffect(() => {
        // async function queryUser() {
        //     const response = await fetch(`https://api.github.com/users/${user}`);
        //     // const response = await fetch(`https://api.github.com/users/peas`);
        //     const data = await response.json();
        // }
        // queryUser();

    
        

    }, [router.query.username]);

    useEffect(() => {
        async function queryFollowing() {
            const response = await fetch(`https://api.github.com/users/wesleyferreira97/following`);
            const data = await response.json();
            
            setFollowing(data);
        }

        queryFollowing();

    }, [userData]);

    useEffect(() => {
        async function queryFollowers() {
            const response = await fetch(`https://api.github.com/users/wesleyferreira97/followers`);
            const data = await response.json();
            
            setFollowers(data);
        }

        queryFollowers();

    }, [userData]);

    useEffect(() => {
        async function queryUser() {
            if(currentUser) {
                const response = await fetch(`https://api.github.com/users/${currentUser}`);
                const data = await response.json();
                
                setCurrentUserData(data);
            }
        }

        queryUser();
    }, [currentUser]);

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
                            <div className='container-wrap' style={{transform: `translateY(-${indexTab * 100}%)`}}>
                                <div className='container-contacts'>
                                    <CardList ListItems={following} stateChat={setMobileOpenChat} setUser={setCurrentUser} />
                                </div>
                                <div className='container-settings'>
                                    <CardList ListItems={followers} stateChat={setMobileOpenChat} setUser={setCurrentUser} />
                                </div>
                                <div className='container-other'>
                                    <CardList ListItems={followers} stateChat={setMobileOpenChat} setUser={setCurrentUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat__content' style={{position: mobileOpenChat ? 'absolute' : ''}}>
                        <div className='chat__content-wrap' 
                        style={{transform: mobileOpenChat ? 'translateY(0)' : ''}}
                        >⠀
                            
                            {console.log(currentUserData)}
                            {currentUserData.login}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{Background}</style>
        <style jsx>{ChatContent}</style>
        </>

    );
}



