import { Box } from '@skynexui/components';
import GlobalStyle from '../styles/global';
import logo from '../assets/svg/logo.svg';
import Image from 'next/image';

function HomePage() {
    return (
        <>
        <GlobalStyle />
        <style jsx>{`
            .logo-container {

                img {	
                color: #fff;
                font-size: 24px;
                font-weight: 600;
                fill: #fff;
                stroke: white;
            }
            }
        `}</style>
        <Box
        styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: {
                xs: 'linear-gradient(#21296C, #0032F4)',
            },
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            color: 'white',
        }}
        >
        <Box
        styleSheet={{
            height: {
                xs: '100vh',
                sm: '50vh',
                // md: '50vh',
                // lg: '50vh',
                // xl: '50vh',
            },
            width: {
                xs: '100vw',
                sm: '50vw',
                // md: '50vh',
                // lg: '50vh',
                // xl: '50vh',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: {
                xs: '#21296E',
                lg: '#23253C',
            },
            color: 'white',
            borderRadius: '10px',
        }}
        >
            <Image src={logo} className='logo-container'></Image>
            <h1>Login : </h1>
            {/* <h1>Senha : </h1> */}
        </Box>
        </Box>



        </>
    )
}

export default HomePage