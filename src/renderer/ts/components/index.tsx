import * as React from "react";
import { Plus } from "react-feather";
import CronJobSetting from "./CronJobSetting";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <CronJobSetting />

            <button className="button">
              <span className="icon">
                <Plus />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
