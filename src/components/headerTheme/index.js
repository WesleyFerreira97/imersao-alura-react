import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../../../config.json';
import { BiNetworkChart } from "react-icons/bi";

export function HeaderTheme() {
    return (
        <>
        <Box 
        styleSheet={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
        }}
        >
            <Text 
            styleSheet={{
                color: appConfig.theme.colors.neutrals['000'],
                fontFamily: 'Maven Pro',
                fontSize: {
                    xs: '2rem',
                    md: '5rem'
                },
                fontWeight: '500',
            }}>
                Aluracord
            </Text>
            <Text
            styleSheet={{
                color: appConfig.theme.colors.neutrals['000'],
                fontFamily: 'Maven Pro',
                fontSize: '1.5rem',
                zIndex: '60',
                marginTop: '.5rem',
            }}
            >
                Conctando Devs 
                {/* <BiNetworkChart style={{fontSize: '2rem'}} /> */}
            </Text>
        </Box>
        </>
    );
}