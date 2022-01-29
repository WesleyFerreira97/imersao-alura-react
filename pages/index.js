import { useEffect, useState } from 'react';
import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../config.json';
import { Background, Logo, LoginWrap } from '../styles/homeStyles';
import { useRouter } from 'next/router';
import Particles from "react-tsparticles";
import particlesConfig  from '../src/particles/particlesConfig'
import { LoginBox } from '../src/components/loginBox';
import { HeaderTheme } from '../src/components/headerTheme';
import { Footer } from '../src/components/footer';

export default function HomePage () {
    return (
        <>
        <Box
        styleSheet={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }} >
            <HeaderTheme />
            <Particles options={particlesConfig} />
            <LoginBox />
            <Footer />  
        </Box>

        <style jsx>{Logo}</style>
       </>     
    )
}