import Link from 'next/link'
import errorimage from '../assets/errorimage.jpg'
import logo from '../assets/logo.png'


export default function FourOhFour() {
  return (
    <>
        <div className='error-wrap'>
            <div className='image-wrap'>
                <img src={errorimage.src} />
            </div>
            <div className='error-content'>
                <h1>404 - Page Not Found</h1>
                
                <h2>Não foi hoje que você conseguiu chegar em Narnia</h2>
                <div className='link-wrap'>
                    <Link href="/">
                    <a>Volte para a um mundo melhor</a>
                    </Link>
                </div>
            </div>
            
        </div>
        <style jsx>{`
            .error-wrap {
                background: rgb(63,94,251);
background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(114,88,212,1) 23%, rgba(59,108,50,1) 48%, rgba(82,178,95,1) 51%, rgba(77,117,196,1) 70%, rgba(70,77,252,1) 100%);
                display: flex;
            }
            .error-content h1 {
                color: #fff;
                font-size: 3rem;
            }

            .link-wrap {
                margin-top: 4rem;
                transform: rotate(10deg);
            }

            .link-wrap a {
                
                color: #fff;
                font-size: 1.5rem;
            }

            .error-content h1 {
                animation: blinker 1s linear infinite;
            }

            @keyframes blinker {
                from { opacity: 1.0; }
                to { opacity: 0.0; }
            }

            @media (max-width: 768px) {
                .error-wrap {
                    flex-direction: column;
                }
                .error-content {
                    order: -1;
                }
            }
        `}</style>
    </>
  )
}