import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  jobValue?: string,
  typeValue?: number,
  onJobChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default (props: Props) => {
  return (
    <div {...props}>
      <input className="input" type="text" placeholder="* * * * *" value={props.jobValue} onChange={props.onJobChange} />
      <br />
      <br />
      <div className="select">
        <select value={props.typeValue} onChange={props.onTypeChange}>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
}
