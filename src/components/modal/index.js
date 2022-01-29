import react from 'react';
import { ModalStyle } from './style';

export function Modal(props) {
    console.log(props);
    return (
        <>
        <div className='modal' style={{ display: props.visible ? 'block' : 'none' }} onClick={() => props.close()}>
                    MODAL
        </div>
        <style jsx>{ModalStyle}</style>
        </>
    )
}