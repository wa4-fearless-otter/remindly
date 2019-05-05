import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      RunCommandSettings
    </div>
  );
}
