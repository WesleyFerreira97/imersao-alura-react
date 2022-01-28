import React from 'react';

export const queryUser = async (user, params) => {
    const firstParam = user ? `${user}` : 'wesleyferreira97';
    const secondParam = params ? `/${params}` : '';
    const response = await fetch(`https://api.github.com/users/${firstParam}${secondParam}`);
    const data = await response.json();

    return data;
}