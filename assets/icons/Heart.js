import Svg, { Path } from "react-native-svg";

import React from "react";

export default function Heart({ fill, stroke }) {
  return (
    <Svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.0767 4.99419C22.5234 4.44061 21.8664 4.00147 21.1433 3.70187C20.4202 3.40226 19.6452 3.24805 18.8625 3.24805C18.0798 3.24805 17.3048 3.40226 16.5817 3.70187C15.8586 4.00147 15.2017 4.44061 14.6484 4.99419L13.5 6.14252L12.3517 4.99419C11.234 3.87652 9.71815 3.24863 8.13753 3.24863C6.55691 3.24863 5.04103 3.87652 3.92336 4.99419C2.80569 6.11186 2.1778 7.62774 2.1778 9.20836C2.1778 10.789 2.80569 12.3049 3.92336 13.4225L5.07169 14.5709L13.5 22.9992L21.9284 14.5709L23.0767 13.4225C23.6303 12.8692 24.0694 12.2122 24.369 11.4892C24.6686 10.7661 24.8228 9.99105 24.8228 9.20836C24.8228 8.42566 24.6686 7.65064 24.369 6.92756C24.0694 6.20448 23.6303 5.54751 23.0767 4.99419V4.99419Z"
        fill={fill}
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}