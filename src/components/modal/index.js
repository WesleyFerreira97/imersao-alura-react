import react from 'react';
import { ModalStyle } from './style';

export function Modal(props) {
    return (
        <>
        <div className='modal'  onClick={() => props.open(false)}>
                    MODAL
        </div>
        <style jsx>{ModalStyle}</style>
        </>
    )
}