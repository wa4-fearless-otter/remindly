import * as React from "react";
import { X } from "react-feather";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <div className="columns is-mobile">
        <div className="column">
          <input className="input" type="text" placeholder="* * * * *" />
        </div>
        <div className="column is-narrow">
          <button className="button is-danger">
            <span className="icon">
              <X />
            </span>
          </button>
        </div>
      </div>
      <div className="select">
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
}
