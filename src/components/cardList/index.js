import React from 'react';
import { CardStyle } from './style';

export function CardList(props) {
    const { listItems } = props;

    function managerState() {
        props.stateChat(true); 
    }
    
    return (
        <>
        <ul className='card-list'>
        {props.listItems && listItems.map(item => {
            return (
                <li className='card' key={item.id} onClick={() => managerState()}>
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



