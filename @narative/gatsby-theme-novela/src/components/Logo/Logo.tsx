import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <svg
        width="168"
        height="23"
        viewBox="0 0 168 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M31.975,1.173a.557.557,0,0,0-.021-.113c-.005-.017,0-.035-.01-.052a.53.53,0,0,0-.033-.05A.551.551,0,0,0,31.889.9c-.011-.016-.028-.025-.04-.04A.582.582,0,0,0,31.678.72a.565.565,0,0,0-.1-.041.556.556,0,0,0-.058-.024L28.309.012A.444.444,0,0,0,28.176,0L8.9.644A.552.552,0,0,0,8.838.66.564.564,0,0,0,8.686.7a.565.565,0,0,0-.081.054.551.551,0,0,0-.093.061C8.506.819,8.5.829,8.5.836s-.014.009-.02.015L5.265,4.706l-.006.01a.584.584,0,0,0-.03.053.574.574,0,0,0-.07.139c0,.007-.007.011-.009.018a.532.532,0,0,0,0,.061.567.567,0,0,0-.008.134.566.566,0,0,0,.105.284.547.547,0,0,0,.031.051L9.4,10.174.819,18.144a.579.579,0,0,0-.174.311L0,21.667c0,.017,0,.034,0,.051a.56.56,0,0,0,0,.111.552.552,0,0,0,.021.113A.538.538,0,0,0,.033,22c.005.013.019.018.025.031a.563.563,0,0,0,.031.075.578.578,0,0,0,.16.16l.007,0a.574.574,0,0,0,.2.083l3.212.642A.578.578,0,0,0,3.782,23H3.8l19.253-.641h.02c.018,0,.034-.011.052-.013a.388.388,0,0,0,.244-.093.551.551,0,0,0,.094-.062c.007-.007.009-.016.016-.024s.014-.009.02-.015L26.712,18.3l0-.009a.6.6,0,0,0,.033-.058.573.573,0,0,0,.067-.135c0-.007.007-.012.009-.018a.536.536,0,0,0,0-.061.566.566,0,0,0,.008-.134.554.554,0,0,0-.017-.088,1.185,1.185,0,0,0-.119-.247l-4.127-4.716,8.582-7.97a.583.583,0,0,0,.174-.31l.643-3.212c0-.017,0-.034,0-.052A.559.559,0,0,0,31.975,1.173Zm-2.588.234-13.9,5.561L10.273,1.755l17.875-.6ZM14.9,8.513l.908,5.447-4.539-3.631Zm2.168,5.975-.908-5.447L20.7,12.673ZM8.961,2.078l4.455,4.454L6.733,4.751ZM7.395,6.124l6.328,1.687L10.347,9.5Zm2.84,4.855,5.26,4.208L1.346,20.847l.4-1.982ZM2.591,21.595l13.9-5.56L21.7,21.247l-17.874.6Zm20.426-.671-4.455-4.455,6.682,1.781Zm1.567-4.046-6.328-1.687L21.63,13.5Zm-2.841-4.855L16.482,7.814,30.632,2.155l-.4,1.982Z"
            fill={fill}
          />
          <path
            d="M40.916,22.734l-.242-2.049a4.863,4.863,0,0,0,1.249.193,2.388,2.388,0,0,0,1.164-.242,1.98,1.98,0,0,0,.715-.678,10.733,10.733,0,0,0,.667-1.625q.06-.182.194-.534L39.777,4.9h2.352l2.679,7.457q.521,1.419.934,2.983a29.261,29.261,0,0,1,.9-2.934L49.391,4.9h2.182l-4.9,13.1a25.637,25.637,0,0,1-1.225,2.922A4.308,4.308,0,0,1,44.117,22.5a3.155,3.155,0,0,1-1.795.5A4.387,4.387,0,0,1,40.916,22.734Z"
            fill={fill}
          />
          <path
            d="M52.616,11.336q0-3.576,1.989-5.3a5.992,5.992,0,0,1,4.05-1.431A5.776,5.776,0,0,1,63,6.347a6.62,6.62,0,0,1,1.685,4.807,8.518,8.518,0,0,1-.746,3.91,5.272,5.272,0,0,1-2.17,2.213,6.311,6.311,0,0,1-3.11.788,5.787,5.787,0,0,1-4.371-1.734A6.925,6.925,0,0,1,52.616,11.336Zm2.243,0a5.48,5.48,0,0,0,1.079,3.7,3.594,3.594,0,0,0,5.42-.006,5.615,5.615,0,0,0,1.079-3.771,5.323,5.323,0,0,0-1.085-3.619,3.6,3.6,0,0,0-5.413-.006A5.458,5.458,0,0,0,54.859,11.336Z"
            fill={fill}
          />
          <path
            d="M75.677,17.774V15.883a4.713,4.713,0,0,1-4.086,2.182,5.216,5.216,0,0,1-2.128-.436A3.506,3.506,0,0,1,68,16.531a4.113,4.113,0,0,1-.673-1.618,11.124,11.124,0,0,1-.133-2.038V4.9h2.182V12.04a12.753,12.753,0,0,0,.133,2.3,2.284,2.284,0,0,0,.873,1.353,2.707,2.707,0,0,0,1.649.491,3.6,3.6,0,0,0,1.843-.5,2.8,2.8,0,0,0,1.218-1.37,6.875,6.875,0,0,0,.357-2.516V4.9H77.63V17.774Z"
            fill={fill}
          />
          <path
            d="M81.049,17.774V4.9h1.964V6.729a4.629,4.629,0,0,1,4.1-2.122,5.374,5.374,0,0,1,2.14.419,3.371,3.371,0,0,1,1.461,1.1,4.224,4.224,0,0,1,.679,1.613,12.514,12.514,0,0,1,.121,2.121v7.918H89.33V9.941a5.88,5.88,0,0,0-.255-1.994,2.1,2.1,0,0,0-.9-1.054A2.873,2.873,0,0,0,86.65,6.5a3.535,3.535,0,0,0-2.406.885q-1.013.885-1.013,3.358v7.033Z"
            fill={fill}
          />
          <path
            d="M94.459,18.841l2.122.316a2.025,2.025,0,0,0,.74,1.431,3.635,3.635,0,0,0,2.218.606,3.9,3.9,0,0,0,2.34-.606,2.984,2.984,0,0,0,1.115-1.7,13.928,13.928,0,0,0,.158-2.8,4.488,4.488,0,0,1-3.565,1.686,4.86,4.86,0,0,1-4.11-1.915,7.381,7.381,0,0,1-1.455-4.6,8.548,8.548,0,0,1,.667-3.4,5.338,5.338,0,0,1,1.934-2.407A5.229,5.229,0,0,1,99.6,4.607a4.615,4.615,0,0,1,3.759,1.843V4.9h2.013V16.028a10.564,10.564,0,0,1-.612,4.262,4.477,4.477,0,0,1-1.94,1.983A6.726,6.726,0,0,1,99.551,23a6.157,6.157,0,0,1-3.723-1.037A3.5,3.5,0,0,1,94.459,18.841Zm1.807-7.736a5.582,5.582,0,0,0,1.006,3.7,3.193,3.193,0,0,0,2.522,1.164,3.226,3.226,0,0,0,2.522-1.157,5.407,5.407,0,0,0,1.018-3.632,5.281,5.281,0,0,0-1.049-3.564,3.243,3.243,0,0,0-2.528-1.2A3.148,3.148,0,0,0,97.284,7.6,5.249,5.249,0,0,0,96.265,11.105Z"
            fill={fill}
          />
          <path
            d="M110.682,17.774h-2.025V0h2.182V6.341a4.317,4.317,0,0,1,3.528-1.734,5.414,5.414,0,0,1,2.25.479,4.591,4.591,0,0,1,1.745,1.346,6.481,6.481,0,0,1,1.073,2.091,8.628,8.628,0,0,1,.389,2.619,7.36,7.36,0,0,1-1.637,5.117,5.12,5.12,0,0,1-3.929,1.806,4.1,4.1,0,0,1-3.576-1.9Zm-.024-6.535a6.687,6.687,0,0,0,.63,3.346,3.118,3.118,0,0,0,5.261.443,5.645,5.645,0,0,0,1.043-3.7,5.74,5.74,0,0,0-1-3.722,3.047,3.047,0,0,0-2.42-1.2A3.139,3.139,0,0,0,111.7,7.644,5.457,5.457,0,0,0,110.657,11.239Z"
            fill={fill}
          />
          <path
            d="M131.293,13.628l2.255.279a5.5,5.5,0,0,1-1.976,3.067,6.7,6.7,0,0,1-8.166-.648,6.8,6.8,0,0,1-1.656-4.88A7.12,7.12,0,0,1,123.423,6.4a5.665,5.665,0,0,1,4.341-1.794,5.508,5.508,0,0,1,4.22,1.758,6.985,6.985,0,0,1,1.637,4.948c0,.129,0,.322-.013.581h-9.6a4.949,4.949,0,0,0,1.2,3.25,3.57,3.57,0,0,0,2.692,1.127,3.344,3.344,0,0,0,2.049-.63A4.186,4.186,0,0,0,131.293,13.628ZM124.127,10.1h7.19a4.363,4.363,0,0,0-.824-2.437,3.345,3.345,0,0,0-2.7-1.261,3.469,3.469,0,0,0-2.528,1.006A3.984,3.984,0,0,0,124.127,10.1Z"
            fill={fill}
          />
          <path
            d="M135.476,11.336q0-3.576,1.989-5.3a5.991,5.991,0,0,1,4.049-1.431,5.774,5.774,0,0,1,4.341,1.74,6.615,6.615,0,0,1,1.686,4.807,8.51,8.51,0,0,1-.746,3.91,5.272,5.272,0,0,1-2.17,2.213,6.313,6.313,0,0,1-3.11.788,5.787,5.787,0,0,1-4.37-1.734A6.925,6.925,0,0,1,135.476,11.336Zm2.244,0a5.484,5.484,0,0,0,1.078,3.7,3.594,3.594,0,0,0,5.42-.006,5.615,5.615,0,0,0,1.079-3.771,5.326,5.326,0,0,0-1.085-3.619,3.6,3.6,0,0,0-5.414-.006A5.461,5.461,0,0,0,137.72,11.336Z"
            fill={fill}
          />
          <path
            d="M150.1,17.774V4.9h1.953V6.7a4.575,4.575,0,0,1,1.612-1.521,4.524,4.524,0,0,1,2.292-.576A4.225,4.225,0,0,1,158.3,5.2a3.181,3.181,0,0,1,1.292,1.66,4.621,4.621,0,0,1,3.976-2.255,3.919,3.919,0,0,1,2.947,1.061,4.532,4.532,0,0,1,1.03,3.267v8.839h-2.17V9.664a6,6,0,0,0-.212-1.886,1.823,1.823,0,0,0-.771-.927,2.4,2.4,0,0,0-1.309-.352,3.051,3.051,0,0,0-2.255.9,3.98,3.98,0,0,0-.9,2.892v7.481h-2.183V9.409a3.683,3.683,0,0,0-.534-2.183A2.02,2.02,0,0,0,155.47,6.5a3.178,3.178,0,0,0-1.7.485A2.756,2.756,0,0,0,152.632,8.4a7.987,7.987,0,0,0-.351,2.692v6.68Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="191.156" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="32"
        height="23"
        viewBox="0 0 32 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path
          d="M31.975,1.173a.557.557,0,0,0-.021-.113c-.005-.017,0-.035-.01-.052a.53.53,0,0,0-.033-.05A.551.551,0,0,0,31.889.9c-.011-.016-.028-.025-.04-.04A.582.582,0,0,0,31.678.72a.565.565,0,0,0-.1-.041.556.556,0,0,0-.058-.024L28.309.012A.444.444,0,0,0,28.176,0L8.9.644A.552.552,0,0,0,8.838.66.564.564,0,0,0,8.686.7a.565.565,0,0,0-.081.054.551.551,0,0,0-.093.061C8.506.819,8.5.829,8.5.836s-.014.009-.02.015L5.265,4.706l-.006.01a.584.584,0,0,0-.03.053.574.574,0,0,0-.07.139c0,.007-.007.011-.009.018a.532.532,0,0,0,0,.061.567.567,0,0,0-.008.134.566.566,0,0,0,.105.284.547.547,0,0,0,.031.051L9.4,10.174.819,18.144a.579.579,0,0,0-.174.311L0,21.667c0,.017,0,.034,0,.051a.56.56,0,0,0,0,.111.552.552,0,0,0,.021.113A.538.538,0,0,0,.033,22c.005.013.019.018.025.031a.563.563,0,0,0,.031.075.578.578,0,0,0,.16.16l.007,0a.574.574,0,0,0,.2.083l3.212.642A.578.578,0,0,0,3.782,23H3.8l19.253-.641h.02c.018,0,.034-.011.052-.013a.388.388,0,0,0,.244-.093.551.551,0,0,0,.094-.062c.007-.007.009-.016.016-.024s.014-.009.02-.015L26.712,18.3l0-.009a.6.6,0,0,0,.033-.058.573.573,0,0,0,.067-.135c0-.007.007-.012.009-.018a.536.536,0,0,0,0-.061.566.566,0,0,0,.008-.134.554.554,0,0,0-.017-.088,1.185,1.185,0,0,0-.119-.247l-4.127-4.716,8.582-7.97a.583.583,0,0,0,.174-.31l.643-3.212c0-.017,0-.034,0-.052A.559.559,0,0,0,31.975,1.173Zm-2.588.234-13.9,5.561L10.273,1.755l17.875-.6ZM14.9,8.513l.908,5.447-4.539-3.631Zm2.168,5.975-.908-5.447L20.7,12.673ZM8.961,2.078l4.455,4.454L6.733,4.751ZM7.395,6.124l6.328,1.687L10.347,9.5Zm2.84,4.855,5.26,4.208L1.346,20.847l.4-1.982ZM2.591,21.595l13.9-5.56L21.7,21.247l-17.874.6Zm20.426-.671-4.455-4.455,6.682,1.781Zm1.567-4.046-6.328-1.687L21.63,13.5Zm-2.841-4.855L16.482,7.814,30.632,2.155l-.4,1.982Z"
          fill={fill}
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;