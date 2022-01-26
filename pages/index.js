import { Box, TextField, Button } from '@skynexui/components';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';
import { AnimationBox } from '../src/components/zamiAnimations/index';
import appConfig from '../config.json';
import WaveBottom from '../assets/svg/waveSvg';
import WaveTop from '../assets/svg/waveTopSvg';
import { Background, Logo } from '../styles/homeStyles';


function HomePage() {
    return (
        <>
        <div className='bg-overall'></div>
            <Box
            styleSheet={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                zIndex: -1,
                color: '#fff',
                position: 'relative',
            }}
            >
                <Box 
                styleSheet={{   
                    width: {
                        xs: '100%',
                        // md: '30%',
                    },
                    height: {
                        xs: '20vh',
                        md: '27%',
                    },
                    backgroundColor: appConfig.theme.colors.primary['300'],
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: -1,
                }} >
                    <WaveTop styleSheet={{
                        position: 'absolute', bottom: '0',
                        zIndex: -1,
                    }} />
                    <div className='logo-wrap'>
                        <h1 className='logo'>Aluracord</h1>
                        {/* <h1 className='logo'>Navegue </h1> */}
                    </div>
                </Box>

                <Box 
                styleSheet={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '50',
                    backgroundColor: appConfig.theme.colors.primary['800'],
                }}
                >


                </Box>

            </Box>



            <div className='footer-wave'>
                <WaveBottom styleSheet={{
                    position: 'absolute', bottom: '0',
                }} />
            </div>
            <style jsx>{Background}</style>
            <style jsx>{Logo}</style>
        </>
    )
}

export default HomePage 