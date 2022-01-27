import css from 'styled-jsx/css';


export const KeyFrames = css`
      @keyframes animationBox {
          to {
           transform: translateX(50px);
          }
      } 
      @keyframes fadeInDown {
        from {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }

        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }

        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }

        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }

        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes fadeInTopLeft {
        from {
          opacity: 0;
          -webkit-transform: translate3d(-100%, -100%, 0);
          transform: translate3d(-100%, -100%, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
      
`;