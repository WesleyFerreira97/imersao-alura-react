import { Box, TextField, Text, Button } from '@skynexui/components';
import appConfig from '../../../config.json';

export function Footer() {
    return (
        <>
            <Text 
            styleSheet={{
                color: appConfig.theme.colors.neutrals['000'],
            }}>
                Desenvolvido por Wesley #OpenToWork
            </Text>
        </>
    );
}