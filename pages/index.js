import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';

// xs: 'linear-gradient(#21296C, #0032F4)',
// md: 'linear-gradient(#21296C, #161853)',
{/* <Image src={logo} className='logo-container'></Image> */}

function HomePage() {
    return (
        <>
            <Box
            styleSheet={{
                backgroundColor: {
                lg: appConfig.theme.colors.primary['500'],
                },
                color: 'white',
                margin: '16px',
                padding: '16px'
            }}
            >
            Box Component
            </Box>
        </>
    )
}

export default HomePage