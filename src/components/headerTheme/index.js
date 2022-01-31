import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../../../config.json';
import { BiNetworkChart } from "react-icons/bi";

export function HeaderTheme() {
    const header = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
    }

    const headerTitle ={
        color: appConfig.theme.colors.neutrals['000'],
        fontFamily: 'Maven Pro',
        fontSize: {
            xs: '2rem',
            md: '5rem'
        },
        fontWeight: '500',
    }

    const headerSubtitle = {
        color: appConfig.theme.colors.neutrals['000'],
        fontFamily: 'Maven Pro',
        fontSize: {
            xs: '1rem',
            md: '1.5rem'
        },
        zIndex: '60',
        marginTop: '.5rem',
    }

    return (
        <>
        <Box styleSheet={header} >
            <Text styleSheet={headerTitle}>Aluracord</Text>
            <Text styleSheet={headerSubtitle}>Conectando Devs</Text>
        </Box>
        </>
    );
}