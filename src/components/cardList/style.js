import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const CardStyle = css`
    .card-list {
        background-color: orange;
        overflow: hidden;
    }

    .card {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${appConfig.theme.colors.neutrals['500']};
        padding-left: 2rem;
        border-bottom: 1px solid #a9a9a9;
        
        &:hover {
            background-color: ${appConfig.theme.colors.primary['800']};
            color: ${appConfig.theme.colors.neutrals['100']};
            transition: .4s;
        }

        &__image {
            height: 100%;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                height: 40px;
                width: 40px;
                border-radius: 100%;
                object-fit: cover;
            }
        }

        &__info {
            margin-left: 1.25rem;

            &-name {
                font-size: 1rem;
                font-family: 'Mulish', sans-serif;
                text-transform: capitalize;
            }
        }
    }
`;