import { Background } from '../styles/chatStyles';
export default function Chat() {
    return (
        <>
        <div className='background'>
            <div className='chat'>
                <div className='chat__wrap'>
                    <div className='chat__sidebar'>
                    </div>
                    <div className='chat__content'>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{Background}</style>
        </>

    );
}