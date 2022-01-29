import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const ModalStyle = css`
    .modal {
        position: fixed;
        bottom: 0;
        left: 0;
        width:100vw;
        height: 80vh;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
    }
`;