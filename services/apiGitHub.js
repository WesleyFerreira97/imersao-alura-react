import React from 'react';

export const queryUser = async (user, params) => {
    const secondParam = params ? `/${params}` : '';
    const response = await fetch(`https://api.github.com/users/${user}${secondParam}`);
    const data = await response.json();

    return data;
}