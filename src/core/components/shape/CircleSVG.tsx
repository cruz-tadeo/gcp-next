interface Props {
  className?: string;
  width: number;
  height: number;
  fill?: string;
}
export const CircleSVG = (props: Props) => {
  return (
    <svg
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
    >
      <circle cx="60" cy="60" r="50" style={{ fill: `var(${props.fill})` }} />
    </svg>
  );
};
