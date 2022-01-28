import React from 'react';
import { CardStyle } from './style';

export function CardList(props) {
    const listItems = props.listItems || [];

    function managerState(login) {
        props.stateChat(true); 
        props.setUser(login);
    }
    return (
        <>
        <ul className='card-list'>
        {listItems.map(item => {
            return (
                <li className='card' key={item.id} onClick={() => managerState(item.login)}>
                    <div className='card__image'>
                        <img src={item.avatar_url} alt={item.login} />
                    </div>
                    <div className='card__info'>
                        <h3 className='card__info-name'>{item.login}</h3>
                    </div>
                </li>
            )
            } )}
        </ul>

        <style jsx>{CardStyle}</style>
        </>
    );
}



