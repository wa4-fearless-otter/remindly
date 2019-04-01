import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <input className="input" type="text" placeholder="* * * * *" />
      <br />
      <br />
      <div className="select">
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
}
