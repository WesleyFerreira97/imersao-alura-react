import { Box } from '@skynexui/components';
import GlobalStyle from '../styles/global';

function HomePage() {
    return (
        <>
        <GlobalStyle />
        
        <Box
        styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: {
                xs: 'linear-gradient(#21296C, #0032F4)',
            },
            color: 'white',
        }}
        >
        <Box
        styleSheet={{
            height: {
                xs: '100vh',
                sm: '50vh',
                // md: '50vh',
                // lg: '50vh',
                // xl: '50vh',
            },
            width: {
                xs: '100vw',
                sm: '50vw',
                // md: '50vh',
                // lg: '50vh',
                // xl: '50vh',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: {
                xs: '#21296E',
            },
            color: 'white',
            borderRadius: '10px',
        }}
        >
        <h1>Login : </h1>
        </Box>
        </Box>
        </>
    )
}

export default HomePage