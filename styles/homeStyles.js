import css from 'styled-jsx/css';
import appConfig from '../config.json';

export const BackgroundBottom = css.global`
     .bg-container {
        height: 60vh;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: ${appConfig.colors.primary['800']};
    }

    @media (min-width: 768px) {
        .bg-container {
            height: inherit;
        }
    }
`;