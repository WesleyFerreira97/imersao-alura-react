import css from 'styled-jsx/css';
import appConfig from '../../../config.json';

export const CardStyle = css`
    .card-list {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card {
        height: 60px;
        width: 97%;
        display: flex;
        align-items: center;
        background-color: ${appConfig.theme.colors.primary['900']};
        padding-left: 2rem;
        /* border-bottom: 1px solid #a9a9a9; */
        /* margin: .3rem 0; */
        border-radius: 5px;
        border-bottom: 1px solid ${appConfig.theme.colors.primary['600']};
        cursor: pointer;
        
        &:hover {
            background-color: ${appConfig.theme.colors.primary['700']};
            transition: .4s;
            .card__info-name {
                color: ${appConfig.theme.colors.neutrals['100']};
                font-weight: 500;
            }
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
                color: ${appConfig.theme.colors.neutrals['100']};
                font-weight: 200;
            }
        }
    }
`;