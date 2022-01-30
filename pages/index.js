import { useEffect, useState } from 'react';
import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../config.json';
import { Background, Logo, LoginWrap } from '../styles/homeStyles';
import { useRouter } from 'next/router';
import Particles from "react-tsparticles";
import particlesConfig  from '../src/particles/particlesConfig'
import { LoginBox } from '../src/components/loginBox';
import { HeaderTheme } from '../src/components/headerTheme';


export default function HomePage () {
    const mainContent = {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        
    };

    const mainContentWrap = {
        height: '100%',
        width: {
            xs: '90%',
            md: '80%',
        },
        position: 'absolute',
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row',
        },
        alignItems: 'center',
    }

    const backgroundPage = {
        // backgroundColor: 'linear-gradient( 107deg , rgba(215,55,93,1) 0%, rgba(16,51,188,1) 0%, rgba(12,23,49,1) 96%, rgba(12,23,49,1) 100%);',
        backgroundColor: 'linear-gradient(45deg, blue, red)',
        // backgroundColor: 'black',
        height: '100%',
        width: '100%',

    }

    return (
        <>
        <Box styleSheet={mainContent}>
            <div style={backgroundPage}>
                <Particles options={particlesConfig} style={{position: 'absolute'}} />
            </div>
            <Box styleSheet={mainContentWrap}>
                <HeaderTheme />
                <LoginBox />
            </Box>
        </Box>

       </>     
    )
}

