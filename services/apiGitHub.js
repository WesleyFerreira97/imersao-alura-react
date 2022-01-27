import React from 'react';

export const queryUser = async (user) => {
    	const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();

        return data;
}