import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Whitney';
        src: local(''), 
            url('/assets/fonts/whitneybook.otf') format('otf');
    }

    @font-face {
      font-family: 'ABC Ginto Normal';
      src: local(''), 
            url('/assets/fonts/ABC Ginto Normal/ABCGintoNormal-Regular.woff') format('woff');
      font-display:swap;
    }

    @font-face {
      font-family: 'ABC Ginto Nord';
      src: local(''), 
            url('/assets/fonts/ABC Ginto Nord/ABCGintoNord-Black.woff') format('woff');
      font-display:swap;
    }
      `}
  />
);

export default Fonts;
