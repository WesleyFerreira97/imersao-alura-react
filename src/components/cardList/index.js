import React from 'react';
import { CardStyle } from './style';

export function CardList(props) {
    const ListItems = props.ListItems || {};
    return (
        <div>
        <div className='card-list'>
             {ListItems.map(item => {
                return (
                    <div className='card' key={item.id}>
                        <div>{item.login}</div>
                        <div>{item.location}</div>
                    </div>
                )
                } )}
        </div>

        <style jsx>{CardStyle}</style>
        </div>
    );
}
