import React from 'react';
import appConfig from '../../config.json';

export default function WaveBottom(props) {
  const colorShapeReverse = props.color || appConfig.theme.colors.neutrals['200'];
  const colorShapeInner = props.color || appConfig.theme.colors.neutrals['400'];
  const colorShapePrincipal = props.color || appConfig.theme.colors.primary['800'];
  const styleSheet = props.styleSheet || {};

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 325" style={{marginTop: -1}}>
      <path fill={colorShapeReverse} fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 1400 328" style={{marginTop: -1}}>
       <path fill={colorShapeInner} fillOpacity="1" d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,144C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <path style={{zIndex: 20}} fill={colorShapePrincipal} fillOpacity="1" d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>

  </>
  );
}



