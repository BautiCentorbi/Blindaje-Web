import React from 'react'

const TitleDetail = ({text}) => {
  return (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="40"
          viewBox="0 0 480 40"
          preserveAspectRatio="xMinYMid meet"
        >
          {/* Cinta naranja inclinada */}
          <polygon points="0,0 25,0 20,40 0,40" fill="#E1701A" />

          {/* Espacio (gap) blanco*/}
          <rect x="25" y="0" width="5" height="40" fill="white" />

          {/* Cuerpo gris con corte izquierdo y derecho */}
          <polygon points="30,0 445,0 435,20 445,40 25,40" fill="#575757" />

          {/* Texto */}
          <text
            x="50"
            y="26"
            fill="white"
            font-size="22"
            font-weight="bold"
            text-anchor="left"
          >
            {text}
          </text>
        </svg>
  )
}

export default TitleDetail