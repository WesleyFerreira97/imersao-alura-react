import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../../../config.json';
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";
export function Footer() {
    return (
        <>
        <Box 
        styleSheet={{
            position: 'absolute',
            bottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
        }} >
            <div className='footer-icons'>
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/wesleyferreira97/' target='_blank'>
                    <FaLinkedin style={{fontSize: '2rem'}} />
                    </a>
                </div>
                <div className='github'>
                    <a href='https://github.com/wesleyferreira97' target='_blank'>
                        <FaGithub style={{fontSize: '2rem'}}/>
                    </a>
                </div>
                <div className='behance'>
                    <FaBehanceSquare style={{fontSize: '2rem'}}/>
                </div>
            </div>
        </Box>
            <style jsx>{`
                .footer-icons {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    fontSize: '3.5rem';
                }
                .linkedin, .github, .behance {
                    padding: 2rem;
                    display: inline;
                    cursor: pointer;

                    &:hover {
                        background: black;
                    }
                }
            `}</style>
        </>
    );
}