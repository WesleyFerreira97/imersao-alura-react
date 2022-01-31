import { Box, TextField, Text, Button, Image } from '@skynexui/components';
import appConfig from '../../../config.json';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Footer } from '../../../src/components/footer';

export function LoginBox() {
    const [username, setUsername] = useState('peas');
    const [isValid, setIsValid] = useState();
    const [submitted, setSubmitted] = useState(false);
    const roteamento = useRouter();
    const [userImage, setUserImage] = useState('');

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

    useEffect(() => {
        if (isValid == true && submitted == true) {
            return roteamento.push(`/chat?username=${username}`);
        }
    }, [isValid, submitted]);

    useEffect(() => {
        if(username.length >= 2 && isValid == true) {
            return setUserImage(`https://github.com/${username}.png`);
        }
        
        console.log('Bateu no invalido, que chato em?');
        setUserImage('https://www.nerdin.com.br/img/alura_a_circulo.png');
    }, [username, isValid]);

    return (
        <>
        <Box
        styleSheet={{
            height: {
                xs: '80%',
                sm: '100%',
            },
            maxWidth: '350px',
            minWidth: '300px',
            width: {
                xs: '50%',
            },
            backgroundColor: {
                xs: 'inherit',
                md: 'rgba(12, 23, 49, 0.4)',
            },
            backdropFilter: {
                xs: 'none',
                md: 'blur(6px)',
            },
            zIndex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            overflow: 'hidden',
            // borderRadius: '1rem',
            order: {
                xs: '1',
                // sm: '1',
            },
            position: 'relative',
        }} >
            <div className='image-user'>
                <Image 
                src={userImage} 
                styleSheet={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '100%',
                }}
                    />
            </div>

            <Box 
            as='form'
            onSubmit={(e) => {
                e.preventDefault();
                validateRoute(username)
                setSubmitted(true);
            }}
            styleSheet={{
                width: '100%',
                margintop: '3rem',
            }}
            >
                {isValid == false && <p className='login-form__error'>Usuário não encontrado</p>}
                <TextField
                    label="Login"
                    fullWidth
                    onChange={function (event) {
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
                
                <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary[800],
                    mainColorLight: appConfig.theme.colors.primary[100],
                    mainColorStrong: appConfig.theme.colors.primary[600],
                }} />
            </Box>
        <Footer />  
        </Box>
            <style jsx>{`
                .image-user {
                    height: 150px;
                    width: 150px;
                }    
                .login-form__error {
                    margin: 1rem 0;
                    color: #FF6B6B;
                    font-weight: 500;
                    font-family: 'Maven Pro', sans-serif;
                }
            `}</style>
        </>
    );
}