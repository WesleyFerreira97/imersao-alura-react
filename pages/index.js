import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';
import WaveBottom from '../assets/svg/waveSvg';

// xs: 'linear-gradient(#21296C, #0032F4)',
// md: 'linear-gradient(#21296C, #161853)',
{/* <Image src={logo} className='logo-container'></Image> */}

function HomePage() {
    return (
        <>
            {/* <Box
            styleSheet={{
                backgroundColor: {
                xs: appConfig.theme.colors.neutrals['200'],
                },
                height: '100vh',
            }}
            >
            </Box> */}
           
            <div className='bg-container'>
                <WaveBottom 
                styleSheet={{
                    position: 'absolute',
                    bottom: '0',
                }} />
            </div>

            <style jsx>{`
                .bg-container {
                    height: 60vh;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    background-color: #101F41;
                }

                @media (min-width: 768px) {
                    .bg-container {
                        height: inherit;
                    }
                }
            `}</style>
        </>
    )
}

export default HomePage 