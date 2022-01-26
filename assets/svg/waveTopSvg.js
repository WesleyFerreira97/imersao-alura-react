import React from 'react';
import appConfig from '../../config.json';

export default function WaveTop(props) {
  const colorShapeReverse = props.color || appConfig.theme.colors.neutrals['200'];
  const colorShapeInner = props.color || appConfig.theme.colors.neutrals['400'];
  const colorShapePrincipal = props.color || appConfig.theme.colors.primary['300'];
  const styleSheet = props.styleSheet || {};

  return (
    <>
    <svg style={styleSheet} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={colorShapePrincipal} fillOpacity="1" d="M0,288L80,245.3C160,203,320,117,480,117.3C640,117,800,203,960,202.7C1120,203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      <path fill={colorShapeReverse} fillOpacity="1" d="M0,288L80,245.3C160,203,320,117,480,117.3C640,117,800,203,960,202.7C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

  </>
  );
}

