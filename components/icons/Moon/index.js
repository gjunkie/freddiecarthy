import React from "react";
import PropTypes from 'prop-types'

export const Moon = ({
  width = 30,
  height = 30,
}) => {
  return (
    <svg width={width} height={height} viewBox="24 22 55 55">
    <g>
      <path d="M49.864,67.002c-8.403,0-15.239-6.836-15.239-15.239c0-7.884,5.912-14.403,13.751-15.164
        c0.502-0.05,0.976,0.226,1.183,0.684c0.208,0.458,0.102,0.997-0.264,1.341c-1.911,1.799-2.963,4.226-2.963,6.835
        c0,5.182,4.216,9.398,9.398,9.398c2.826,0,5.475-1.256,7.27-3.444c0.319-0.389,0.851-0.53,1.319-0.356
        c0.471,0.176,0.777,0.632,0.763,1.134C64.852,60.496,58.167,67.002,49.864,67.002z M45.539,39.613
        c-5.047,1.775-8.565,6.557-8.565,12.15c0,7.108,5.782,12.89,12.89,12.89c5.953,0,10.922-3.955,12.416-9.439
        c-1.914,1.289-4.183,1.994-6.55,1.994c-6.478,0-11.748-5.269-11.748-11.748C43.982,43.368,44.522,41.37,45.539,39.613z"/>
    </g>
    </svg>
  );
}

Moon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}
