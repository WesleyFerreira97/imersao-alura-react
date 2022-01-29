import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const ModalStyle = css`
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width:100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1000;
    }
`;