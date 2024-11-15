const DiamondSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 8.5-2-3h-2.5l1 3-3.5 10 7-10Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M4.376 8.084a.75.75 0 0 0 1.248.832l-1.248-.832ZM7 5.5v-.75a.75.75 0 0 0-.624.334L7 5.5Zm2.5.75a.75.75 0 0 0 0-1.5v1.5ZM5.614 8.07a.75.75 0 0 0-1.228.86l1.228-.86ZM12 18.5l-.614.43a.75.75 0 0 0 1.322-.678L12 18.5ZM9.208 8.252a.75.75 0 1 0-1.416.496l1.416-.496ZM5 7.75a.75.75 0 0 0 0 1.5v-1.5Zm3.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm1.711-3.513a.75.75 0 1 0-1.423-.474l1.423.474ZM7.788 8.263a.75.75 0 1 0 1.424.474l-1.424-.474ZM9.5 4.75a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 1.5a.75.75 0 0 0 0 1.5v-1.5ZM19 9.25a.75.75 0 0 0 0-1.5v1.5ZM5.624 8.916l2-3-1.248-.832-2 3 1.248.832ZM7 6.25h2.5v-1.5H7v1.5ZM4.386 8.93l7 10 1.228-.86-7-10-1.228.86Zm8.322 9.322-3.5-10-1.416.496 3.5 10 1.416-.496ZM5 9.25h3.5v-1.5H5v1.5Zm3.788-3.987-1 3 1.424.474 1-3-1.424-.474Zm.712.987h5v-1.5h-5v1.5Zm-1 3H19v-1.5H8.5v1.5Z"
    />
  </svg>
);
export default DiamondSvgComponent;
