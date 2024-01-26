export const ColoredLine = ({
  color,
  className,
}: {
    color: "sapphire" | "ruby" | "emerald" | "diamond" | "diamond-elite";
  className: string;
}) => (
  <hr
    className={className}
    style={{
      color: `var(--color-${color})`,
      backgroundColor: `var(--color-${color})`,
      height: 16,
    }}
  />
);
