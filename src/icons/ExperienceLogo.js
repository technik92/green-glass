function ExperienceLogo() {
  return (
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="fill-current text-green-600"
        width="64"
        height="64"
        rx="32"
      />
      <g fill="none" fillRule="evenodd">
        <path
          className="stroke-current text-green-300"
          d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          className="stroke-current text-green-100"
          strokeWidth="2"
          strokeLinecap="square"
          d="M36 32l-4-3-4 3V22h8z"
        />
      </g>
    </svg>
  );
}
export default ExperienceLogo;
