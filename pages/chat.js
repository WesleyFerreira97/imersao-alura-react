import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background, ChatContent, ChatStyles } from '../styles/chatStyles';
import { CardList } from '../src/components/cardList/index';
import { queryUser } from '../services/apiGitHub';
import { ChatContainer } from '../src/components/chatContainer/index';

import Particles from "react-tsparticles";
import particlesConfig  from '../src/particles/particlesConfig'

export default function Chat() {
    const router = useRouter();
    const user = router.query.username;
    const [userData, setUserData] = useState();

    const [indexTab, setIndexTab] = useState(0);
    const [mobileOpenChat, setMobileOpenChat] = useState(false);
    
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        // Search current user
        queryUser(user).then(data => {
            setUserData(data);
        });
    }, [user]);

    useEffect(() => {
        queryUser(user, 'following').then(data => {
            setFollowing(data);
        });

        queryUser(user, 'followers').then(data => {
            setFollowers(data);
        });
    }, [userData]);

    return (
        <>
        <div className='container'>
        <div className='background-particles'>
            <Particles options={particlesConfig} style={{position: 'absolute'}} />
        </div>
            <div className='chat'>
                <div className='chat__wrap'>
                    <div className='chat__sidebar'>
                        <div className='chat__sidebar-header'>
                            <div className='header__wrap' onClick={() => setIndexTab(2)}>
                                <img className='header__image' src={userData && userData.avatar_url} />
                                <h3 className='header__username'>{userData && userData.login}</h3>
                            </div>
                            <div className='header__tabs'>
                                <li className='tabs__item' onClick={() => setIndexTab(0)}><span>Followers</span></li>
                                <li className='tabs__item' onClick={() => setIndexTab(1)}><span>Following</span></li>
                                <li className='tabs__item' onClick={() => setIndexTab(2)}><span>Info</span></li>
                            </div>
                        </div>
                        <div className="chat__sidebar-tabs">
                            <div className='container-wrap' style={{transform: `translateY(-${indexTab * 100}%)`}}>
                                <div className='container-contacts'>
                                    <CardList listItems={following} stateChat={setMobileOpenChat} />
                                </div>
                                <div className='container-settings'>
                                    <CardList listItems={followers} stateChat={setMobileOpenChat} />
                                </div>
                                <div className='container-other'>
                                    <h3 className='bio'><span>Bio:</span>  {userData && userData.bio}</h3>
                                    <h3 className='company'><span>Company:</span> {userData && userData.company}</h3>
                                    <h3 className='location'><span>Location:</span> {userData && userData.location}</h3>
                                    <div className='container-other__disclaimer'>
                                        <h3>Meu layout é perfeito, se bugar a culpa é da sua máquina!</h3>
                                        <h3><a href="https://www.linkedin.com/in/wesleyferreira97/">#OpenToWork</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat__content' style={{position: mobileOpenChat ? 'absolute' : ''}}>
                        <div className='chat__content-wrap' 
                        style={{transform: mobileOpenChat ? 'translateY(0)' : ''}}
                        >
                           {userData && <ChatContainer currentUser={userData} toggleChat={setMobileOpenChat} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{Background}</style>
        <style jsx>{ChatContent}</style>
        <style jsx>{ChatStyles}</style>
        </>

    );
}



