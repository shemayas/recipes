import { FC } from "react";

type RecipeLine = [number, string];
interface LinesProps {
  lines: RecipeLine[];
}

const formatLines = (ingredients: RecipeLine[], multBy: number) => {
  const list = ingredients?.map(([quantity, rest]) => {
    return (
      <li key={rest}>
        ${quantity * multBy} ${rest}
      </li>
    );
  });

  return <ul>{list}</ul>;
};

const Lines: FC<LinesProps> = ({ lines }) => {
  return formatLines(lines, 1);
};

export default Lines;
