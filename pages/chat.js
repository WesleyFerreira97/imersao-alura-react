import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background, ChatContent } from '../styles/chatStyles';
import { CardList } from '../src/components/cardList/index';
import { AnimationBox } from '../src/components/Animations/index';
import { queryUser } from '../services/apiGitHub';

export default function Chat() {
    const router = useRouter();
    const user = router.query.username;
    const [indexTab, setIndexTab] = useState(0);

    const [userData, setUserData] = useState({});
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [mobileOpenChat, setMobileOpenChat] = useState(false);

    const [currentContact, setCurrentContact] = useState('');
    const [currentUserData, setCurrentUserData] = useState([]);

    useEffect(() => {

        queryUser(user).then(data => {
            setUserData(data);
        });
    }, [user]);

    useEffect(() => {

        queryUser(user, 'following').then(data => {
            setFollowing(data);
        });
    }, [userData]);

    useEffect(() => {

        queryUser(user, 'followers').then(data => {
            setFollowers(data);
        });
    }, [userData]);

    useEffect(() => {

        queryUser(currentContact).then(data => {
            setCurrentUserData(data);
        });
    }, [currentContact]);

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
                                    <CardList ListItems={following} stateChat={setMobileOpenChat} setUser={setCurrentContact} />
                                </div>
                                <div className='container-settings'>
                                    <CardList ListItems={followers} stateChat={setMobileOpenChat} setUser={setCurrentContact} />
                                </div>
                                <div className='container-other'>
                                    <CardList ListItems={followers} stateChat={setMobileOpenChat} setUser={setCurrentContact} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat__content' style={{position: mobileOpenChat ? 'absolute' : ''}}>
                        <div className='chat__content-wrap' 
                        style={{transform: mobileOpenChat ? 'translateY(0)' : ''}}
                        >⠀
                            
                            {/* {console.log(currentUserData)} */}
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



