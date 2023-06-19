function MobilityLogo() {
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
      <path
        className="stroke-current text-green-300"
        strokeWidth="2"
        strokeLinecap="square"
        d="M21 23h22v18H21z"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="stroke-current text-green-100"
        d="M26 28h12M26 32h12M26 36h5"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
export default MobilityLogo;
