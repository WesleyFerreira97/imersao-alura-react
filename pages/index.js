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
            overflow: 'hidden',
            
        }} >
            <Particles options={particlesConfig} style={{position: 'absolute'}} />
            <Box 
            styleSheet={{
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
            }}>
            <HeaderTheme />
            <LoginBox />
            </Box>
        </Box>


        <style jsx>{Logo}</style>

        <style jsx>{`

        `}</style>
       </>     
    )
}


// Versão mobile
// Tirar Background color e filter do loginBox
// Adicionar background com opacidade no box principal da home page 
// Trocar cor de background do particle