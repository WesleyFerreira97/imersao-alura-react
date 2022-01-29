import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Background, ChatContent, ChatStyles } from '../styles/chatStyles';
import { CardList } from '../src/components/cardList/index';
import { AnimationBox } from '../src/components/Animations/index';
import { queryUser } from '../services/apiGitHub';
import { ChatContainer } from '../src/components/chatContainer/index';
import Particles from "react-tsparticles";
import particlesConfig  from '../src/particles/particlesConfig'

export default function Chat() {
    const router = useRouter();
    const user = router.query.username;
    const [indexTab, setIndexTab] = useState(0);
    const [mobileOpenChat, setMobileOpenChat] = useState(false);
    
    const [userData, setUserData] = useState({});
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);

    const [currentContact, setCurrentContact] = useState('');
    const [currentContactData, setCurrentContactData] = useState([]);

    useEffect(() => {
        // Search current user
        queryUser(user).then(data => {
            setUserData(data);
        });
    }, [user]);

    useEffect(() => {
        // Current user following
        queryUser(user, 'following').then(data => {
            setFollowing(data);
        });
    }, [userData]);

    // useEffect(() => {
    //         // Current user followers
    //     queryUser(user, 'followers').then(data => {
    //         setFollowers(data);
    //     });
    // }, [userData]);

    useEffect(() => {
        // Get current contact data
        queryUser(currentContact).then(data => {
            setCurrentContactData(data);
        });
    }, [currentContact]);

    return (
        <>
        <div className='container'>
        <Particles options={particlesConfig} style={{position: 'absolute'}} />
            <div className='chat'>
                <div className='chat__wrap'>
                    <div className='chat__sidebar'>
                        <div className='chat__sidebar-header'>
                            <div className='header__wrap' onClick={() => setIndexTab(2)}>
                                
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
                                    <CardList listItems={following} stateChat={setMobileOpenChat} setUser={setCurrentContact} />
                                </div>
                                <div className='container-settings'>
                                    <CardList listItems={followers} stateChat={setMobileOpenChat} setUser={setCurrentContact} />
                                </div>
                                <div className='container-other'>
                                    <span className='bio'>Bio:  {userData.bio}</span>
                                    <span className='company'>Company: {userData.company}</span>
                                    <span className='location'>Location: {userData.location}</span>
                                    <h3> Meu layout é perfeito, se bugar a culpa é da sua máquina</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat__content' style={{position: mobileOpenChat ? 'absolute' : ''}}>
                        <div className='chat__content-wrap' 
                        style={{transform: mobileOpenChat ? 'translateY(0)' : ''}}
                        >
                            <ChatContainer contactData={currentContactData} toggleChat={setMobileOpenChat} />
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



