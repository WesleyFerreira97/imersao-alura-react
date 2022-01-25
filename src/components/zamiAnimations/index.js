import React from 'react';
import KeyFrames from './keyframes';

export function AnimationBox(props) {
    const Tag = props.tag || 'div';
    const Name = props.animationName || 'fadeIn';
    const Duration = props.animationDuration || '1s';
    const Delay = props.animationDelay || 0;
    const Count = props.animationIterationCount || '';
    const Direction = props.animationDirection || 'normal';
    const Fill = props.animationFillMode || 'forwards';

    const styleSheetDefault = {
        animationName: Name,
        animationDuration: Duration,
        animationDelay: Delay,
        animationIterationCount: Count,
        animationDirection: Direction,
        animationFillMode: Fill,
    };
    
    const obj = Object.assign({}, styleSheetDefault, props.styleSheet);
    console.log(props);
    return (
        <>
            <KeyFrames />
            <Tag style={obj}>
                {props.children}
            </Tag>
        </>
  );
}


// 051124
// 3156ed azul claro
// 101f41 azul escuro