import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';
import WaveBottom from '../assets/svg/waveSvg';
import { BackgroundBottom } from '../styles/homeStyles';

// xs: 'linear-gradient(#21296C, #0032F4)',
// md: 'linear-gradient(#21296C, #161853)',
{/* <Image src={logo} className='logo-container'></Image> */}

function HomePage() {
    return (
        <>
            <Box
            styleSheet={{
                height: '100vh',
                zIndex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                color: '#fff',
            }}
            >
                xfsfsdfsfd
            </Box>
           
            <div className='bg-container' colorr={appConfig.theme.colors.primary['300']}>
                <WaveBottom 
                styleSheet={{
                    position: 'absolute',
                    bottom: '0',
                }} />
            </div>

            <style jsx>{BackgroundBottom}</style>
        </>
    )
}

export default HomePage 