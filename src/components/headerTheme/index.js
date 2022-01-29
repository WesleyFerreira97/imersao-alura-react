import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../../../config.json';
import { BiNetworkChart } from "react-icons/bi";

export function HeaderTheme() {
    return (
        <>
        <Box 
        styleSheet={{
            width: '100%',
            zIndex: '60',
            position: 'absolute',
            top: '0',
            left: '0',
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
                    md: '3rem'
                },
                fontWeight: '500',
                
            }}>
                Aluracord
            </Text>
            <Text
            styleSheet={{
                color: appConfig.theme.colors.neutrals['000'],
                fontFamily: 'Maven Pro',
                fontSize: '1rem',
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