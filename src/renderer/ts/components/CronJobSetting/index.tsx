import * as React from "react";
import { Trash2 } from "react-feather";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <div className="columns">
        <div className="column">
          <input className="input" type="text" placeholder="* * * * *" />
        </div>
        <div className="column is-narrow">
          <button className="button">
            <span className="icon">
              <Trash2 />
            </span>
          </button>
        </div>
      </div>
      <div className="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  );
}
