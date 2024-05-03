const SkypeSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",

}) => (
  <svg
    
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
  >
    <title>{"skype [#170]"}</title>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M11.897 16.37c3.929-.818 4.446-4.4 2.92-6.058-.73-.808-1.825-1.257-4.426-1.885-1.187-.276-3.434-.793-2.602-2.019.274-.45.959-.718 1.871-.763 3.144-.213 2.486 3.203 4.656 2.198 1.003-.493.912-2.109-.184-3.051-2.4-1.95-9.263-1.927-9.263 2.334 0 4.145 5.96 3.225 7.484 4.89.788.969-.055 2.53-2.556 2.425-2.842-.208-2.088-2.873-3.833-2.873-1.324 0-1.78 1.078-1.095 2.469 1.183 2.417 4.512 2.864 7.073 2.333h-.045Zm1.232 3.455c-1.35-.441-1.284-.413-2.51-.359-4.831.226-8.565-2.801-9.766-6.91-.5-1.842.065-3.466-.501-5.25C-1.393 2.633 3.708-1.499 7.835.527c.366.18.594.225 2.009.225 1.278 0 1.78.044 2.418.225 2.875.717 5.203 2.557 6.434 5.115.776 1.57 1.05 3.187.868 5.026-.092.989-.092 1.078.136 1.661 1.424 4.114-2.471 8.11-6.526 7.046h-.045Z"
    />
  </svg>
);
export default SkypeSvgComponent;
