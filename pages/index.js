import { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';
import WaveBottom from '../assets/svg/waveSvg';
import WaveTop from '../assets/svg/waveTopSvg';
import { Background, Logo, LoginWrap } from '../styles/homeStyles';
import { useRouter } from 'next/router';


function HomePage() {
    const [username, setUsername] = useState('wesleyferreira97');
    const [isValid, setIsValid] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [route, setRoute] = useState(false);
    const roteamento = useRouter();

    async function validateRoute(user) {
        await fetch(`https://api.github.com/users/${user}`)
            .then(response => {
                if (response.status === 404) {
                    // console.log('Usuário não encontrado');
                    setIsValid(false);
                    return isValid;
                }
                setIsValid(true);
                return isValid;
            }) .catch (err => {
                    alert('Erro na requisição');
            });

            return console.log('retorno do validate');
    }

    useEffect(() => {
        // console.log('useeffect', isValid);
        // setIsValid(oldValue => !oldValue);
        if(isValid) {
            roteamento.push(`/chat?username=${username}`);
            setIsValid(false);
        }
    }, [isValid]);

    return (
        <>
            <Box
            styleSheet={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                color: '#fff',
                position: 'relative',
                // zIndex: '1',
            }}
            >
                <Box 
                styleSheet={{   
                    width: {
                        xs: '100%',
                        // md: '30%',
                    },
                    height: {
                        xs: '17vh',
                        md: '22%',
                    },
                    backgroundColor: appConfig.theme.colors.primary['500'],
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: '1',
                }} >
                    <div className='logo-wrap'>
                        <h1 className='logo'>Aluracord</h1>
                        {/* <h1 className='logo'>Navegue </h1> */}
                    </div>
                    <WaveTop styleSheet={{
                        position: 'absolute', bottom: '0',
                        zIndex: '-1',
                    }} />
                    
                </Box>

                <Box 
                as="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    validateRoute(username)
                }}
                styleSheet={{
                    height: '100vh', width: '100vw',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    position: 'absolute',
                    zIndex: '1',
                }} >
                    <div className='login'>
                        <div className='login-wrap'>
                            <div className='login-form'>
                                <h1 className='login-form__title'>{username}</h1>
                                {isValid == false && <p className='login-form__error'>Usuário não encontrado</p>}
                                <TextField
                                label="Login"
                                fullWidth
                                onChange={function noRefCheck(event){
                                    setUsername(event.target.value);
                                }}
                                styleSheet={{
                                    margin: '1rem 0',
                                }}
                                placeholder="Usuário"
                                textFieldColors={{
                                    neutral: {
                                    textColor: appConfig.theme.colors.neutrals[100],
                                    mainColor: appConfig.theme.colors.primary[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.primary[900],
                                    },
                                }}
                                value={username}
                                />
                                <Button
                                type='submit'
                                label='Entrar'
                                fullWidth
                                buttonColors={{
                                    contrastColor: appConfig.theme.colors.neutrals["000"],
                                    mainColor: appConfig.theme.colors.primary[500],
                                    mainColorLight: appConfig.theme.colors.primary[400],
                                    mainColorStrong: appConfig.theme.colors.primary[600],
                                }}
                                />
                            </div>
                            <div className='login-image'>
                                <img src={`https://github.com/${username}.png`} alt='user' />
                            </div>
                        </div>
                    </div>
                </Box>

            </Box>



            <div className='footer-wave'>
                <WaveBottom styleSheet={{
                    position: 'absolute', bottom: '0',
                }} />
            </div>
            <style jsx>{Background}</style>
            <style jsx>{Logo}</style>
            <style jsx>{LoginWrap}</style>
        </>
    )
}

export default HomePage 