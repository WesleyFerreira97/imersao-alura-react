import { useState, useEffect } from 'react';
import { Box, TextField, Button} from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/Animations/index';
import appConfig from '../config.json';
import WaveBottom from '../assets/svg/waveSvg';
import WaveTop from '../assets/svg/waveTopSvg';
import { Background, Logo, LoginWrap } from '../styles/homeStyles';
import { useRouter } from 'next/router';
import { FaUserCircle } from "react-icons/fa";
import Particles from 'react-particles-js';


// Impedir submit com 2 caracteres apenas
// Criar um clone do whatsapp web na pagina de chat

function HomePage() {
    const [username, setUsername] = useState('wesleyferreira97');
    const [isValid, setIsValid] = useState();
    const [submitted, setSubmitted] = useState(false);
    const roteamento = useRouter();

    async function validateRoute(user) {
        await fetch(`https://api.github.com/users/${user}`)
        // await fetch(`https://swapi.dev/api/${user}`)
            .then(response => {
                if (response.status == 200) {
                    setIsValid(true);
                    return;
                }
                setIsValid(false);
            }).catch(err => {
                console.log('Erro na requisição');
            });
        return
    }

    useEffect(() => {
        if (isValid == true && submitted == true) {
            return roteamento.push(`/chat?username=${username}`);
        }

    }, [isValid, submitted]);


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
                <Particles height="100vh" width="100vw" params={configParticles} />
                <Box
                    styleSheet={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: appConfig.theme.colors.primary['400'],
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: '1',
                    }} >
                    <div className='logo-wrap'>
                        <h1 className='logo'>Aluracord</h1>
                        {/* <h1 className='logo'>Navegue </h1> */}
                    </div>
                </Box>

                <Box
                    as="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        validateRoute(username)
                        setSubmitted(true);
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
                                <h1 className='login-form__title'> {username.length > 2 ? username : ""}</h1>
                                <TextField
                                    label="Login"
                                    fullWidth
                                    onChange={function noRefCheck(event) {
                                        setUsername(event.target.value);
                                        validateRoute(event.target.value);
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
                                {isValid == false && <p className='login-form__error'>Usuário não encontrado</p>}
                                <Button
                                    type='submit'
                                    label='Entrar'
                                    fullWidth
                                    buttonColors={{
                                        contrastColor: appConfig.theme.colors.neutrals["000"],
                                        mainColor: appConfig.theme.colors.primary[900],
                                        mainColorLight: appConfig.theme.colors.primary[900],
                                        mainColorStrong: appConfig.theme.colors.primary[600],
                                    }}
                                />
                            </div>
                            <div className='login-image'>
                                <img src={ username.length > 2 ? `https://github.com/${username}.png` : 'https://github.com/usere.png' } />
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>

   
            <style jsx>{Background}</style>
            <style jsx>{Logo}</style>
            <style jsx>{LoginWrap}</style>
        </>
    )
}

export default HomePage 