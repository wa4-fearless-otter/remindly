import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div className="columns" {...props}>
      <div className="column">
        First column
      </div>
      <div className="column">
        Second column
      </div>
      <div className="column">
        Third column
      </div>
      <div className="column">
        Fourth column
      </div>
    </div>
  );
}
