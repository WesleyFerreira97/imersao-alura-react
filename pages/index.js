import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';
import Wave from '../assets/svg/waveSvg';

// xs: 'linear-gradient(#21296C, #0032F4)',
// md: 'linear-gradient(#21296C, #161853)',
{/* <Image src={logo} className='logo-container'></Image> */}

function HomePage() {
    return (
        <>
            {/* <Box
            styleSheet={{
                backgroundColor: {
                xs: appConfig.theme.colors.neutrals['000'],
                },
            }}
            >
            </Box> */}
           
            {/* <div className='bg-container'> */}
                <Wave 
                styleSheet={{
                    position: 'absolute',
                    bottom: '0',
                }} />
                {/* <div className='quadrado'></div> */}
            {/* </div> */}

            <style jsx>{`
                .bg-container {
                    background-color: #21296C;
                    position: relative;
                    height: 50vh;
                }
                .quadrado {
                    height: 50vh;
                    width: 100%;
                    background-color: #21296C;
                }
            `}</style>
        </>
    )
}

export default HomePage 