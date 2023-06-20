function GuaranteeLogo() {
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
        d="M21 35l4 4 12-15"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="stroke-current text-green-100"
        d="M42 29h-3M42 34h-7M42 39H31"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
export default GuaranteeLogo;
