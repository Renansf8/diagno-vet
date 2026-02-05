export const Logo: React.FC = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="50" r="18" fill="#14B8A6" />
      <circle cx="25" cy="35" r="10" fill="#14B8A6" />
      <circle cx="55" cy="35" r="10" fill="#14B8A6" />
      <circle cx="30" cy="20" r="8" fill="#14B8A6" />
      <circle cx="50" cy="20" r="8" fill="#14B8A6" />

      <path
        d="M 35 45 L 45 45 M 40 40 L 40 50 M 30 35 L 50 35 M 25 30 L 55 30"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="35" cy="45" r="2" fill="white" />
      <circle cx="45" cy="45" r="2" fill="white" />
      <circle cx="40" cy="40" r="2" fill="white" />
      <circle cx="40" cy="50" r="2" fill="white" />
    </svg>
  );
};
