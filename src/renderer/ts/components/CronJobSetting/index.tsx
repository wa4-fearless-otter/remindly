import * as React from "react";
import Type from "./Type";

interface Props extends React.HTMLProps<HTMLDivElement> {
  jobValue?: string,
  typeValue?: Type,
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
          {Object.values(Type).map((value, i) => <option key={i}>{value}</option>)}
        </select>
      </div>
    </div>
  );
}
