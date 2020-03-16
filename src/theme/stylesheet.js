import React from 'react';
import { Global, css } from '@emotion/core';
import { PRIMARY, DARK } from './colors';
import { darken } from 'polished';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';
import 'typeface-quicksand';

// Fix the flicking of huge font awesome icons
// cf. https://medium.com/@fabianterh/fixing-flashing-huge-font-awesome-icons-on-a-gatsby-static-site-787e1cfb3a18
config.autoAddCss = false;

const Stylesheet = () => (
  <Global
    styles={css`
      html {
        // Border box
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        // Base font
        font-family: quicksand;
        font-weight: 300;
        font-size: 14pt;

        h1 {
          font-weight: 400;
        }
        h2,
        h3,
        h4,
        h5,
        h5 {
          font-weight: inherit;
        }
      }
      body {
        background-color: ${DARK};
      }
      a {
        color: inherit;
        &:active,
        &:focus {
          color: ${PRIMARY};
          outline: none;
        }
        &:hover {
          color: ${darken(0.05, PRIMARY)};
        }
      }
    `}
  />
);

export default Stylesheet;