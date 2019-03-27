import * as React from "react";
import { connect } from "react-redux";
import { Plus } from "react-feather";
import { Dispatch, RootState } from "./../store";
import CronJobSetting from "./CronJobSetting";

const mapState = (state: RootState) => ({ cronJobs: state.cronJobs });

const mapDispatch = (dispatch: Dispatch) => ({
	addCronJobs: dispatch.cronJobs.add
});

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const Comp = (props: Props) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          {props.cronJobs.map((job, i) => (
            <section key={i} className="box">
              <CronJobSetting />
            </section>
          ))}

          <button className="button is-primary" onClick={props.addCronJobs}>
            <span className="icon">
              <Plus />
            </span>
            <span>Add job</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default connect(mapState, mapDispatch)(Comp);
