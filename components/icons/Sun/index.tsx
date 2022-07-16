import React from "react";

type Props = {
  height: number,
  width: number
};

export const Sun: React.FC<Props> = ({
  height = 30,
  width = 30,
}) => {
  return (
    <svg width={width} height={height} viewBox="24 22 55 55">
    <g>
      <g>
        <path d="M50.583,63.635c-6.478,0-11.748-5.27-11.748-11.748c0-6.478,5.27-11.747,11.748-11.747s11.748,5.27,11.748,11.747
          C62.331,58.365,57.061,63.635,50.583,63.635z M50.583,42.489c-5.182,0-9.398,4.216-9.398,9.398c0,5.183,4.216,9.398,9.398,9.398
          c5.182,0,9.398-4.215,9.398-9.398C59.981,46.706,55.765,42.489,50.583,42.489z"/>
      </g>
      <g>
        <path d="M50.583,35.67c-0.649,0-1.175-0.527-1.175-1.175v-4.896c0-0.649,0.526-1.174,1.175-1.174c0.648,0,1.175,0.525,1.175,1.174
          v4.896C51.758,35.143,51.231,35.67,50.583,35.67z"/>
      </g>
      <g>
        <path d="M62.275,41.641c-0.301,0-0.601-0.115-0.831-0.344c-0.459-0.458-0.459-1.202,0-1.661l4.209-4.209
          c0.459-0.458,1.202-0.458,1.661,0c0.459,0.459,0.459,1.203,0,1.661l-4.209,4.209C62.876,41.526,62.576,41.641,62.275,41.641z"/>
      </g>
      <g>
        <path d="M37.019,41.641c-0.301,0-0.602-0.115-0.831-0.344l-4.21-4.209c-0.458-0.458-0.458-1.202,0-1.661
          c0.459-0.458,1.203-0.458,1.661,0l4.21,4.209c0.458,0.459,0.458,1.204,0,1.661C37.62,41.526,37.319,41.641,37.019,41.641z"/>
      </g>
      <g>
        <path d="M49.647,75.171c-0.649,0-1.175-0.526-1.175-1.175v-4.896c0-0.649,0.526-1.175,1.175-1.175
          c0.648,0,1.174,0.526,1.174,1.175v4.896C50.821,74.645,50.295,75.171,49.647,75.171z"/>
      </g>
      <g>
        <path d="M33.745,68.513c-0.3,0-0.601-0.115-0.83-0.344c-0.459-0.458-0.459-1.203,0-1.662l4.209-4.209
          c0.459-0.459,1.202-0.459,1.661,0c0.459,0.458,0.459,1.202,0,1.661l-4.209,4.21C34.347,68.398,34.046,68.513,33.745,68.513z"/>
      </g>
      <g>
        <path d="M67.421,68.513c-0.3,0-0.601-0.115-0.831-0.344l-4.209-4.21c-0.459-0.459-0.459-1.202,0-1.661
          c0.459-0.459,1.202-0.459,1.661,0l4.209,4.209c0.459,0.459,0.459,1.202,0,1.662C68.022,68.398,67.722,68.513,67.421,68.513z"/>
      </g>
      <g>
        <path d="M32.809,53.062h-5.286c-0.649,0-1.175-0.526-1.175-1.175c0-0.648,0.526-1.175,1.175-1.175h5.286
          c0.649,0,1.175,0.526,1.175,1.175C33.983,52.536,33.458,53.062,32.809,53.062z"/>
      </g>
      <g>
        <path d="M72.75,53.062h-6.266c-0.649,0-1.175-0.526-1.175-1.175c0-0.648,0.526-1.175,1.175-1.175h6.266
          c0.648,0,1.175,0.526,1.175,1.175C73.925,52.536,73.398,53.062,72.75,53.062z"/>
      </g>
    </g>
    </svg>
  );
}