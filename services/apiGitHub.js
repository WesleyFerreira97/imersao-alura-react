import React from 'react';

export const queryUser = async (user, params) => {
    // const firstParam = user ? `${user}` : 'wesleyferreira97';

    if(user) {
        const secondParam = params ? `/${params}` : '';
        const response = await fetch(`https://api.github.com/users/${user}${secondParam}`);
        const data = await response.json();

        if(data.message) {
            return console.log(data.message, "Log do data.message");
        }
        
        return data;
    }
}