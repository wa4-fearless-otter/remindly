import * as React from "react";
import { connect } from "react-redux";
import { Plus, X } from "react-feather";
import { Dispatch, RootState } from "./../store";
import CronJobSetting from "./CronJobSetting";

const mapState = (state: RootState) => ({ cronJobs: state.cronJobs });

const mapDispatch = (dispatch: Dispatch) => ({
  addCronJob: dispatch.cronJobs.add,
  removeCronJob: dispatch.cronJobs.remove
});

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const Comp = (props: Props) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          {props.cronJobs.map((job, i) => (
            <section key={i} className="box">
              <div className="columns">
                <div className="column">
                  <CronJobSetting />
                </div>
                <div className="column is-narrow">
                  <button className="button is-danger" onClick={() => props.removeCronJob(i)}>
                    <span className="icon">
                      <X />
                    </span>
                  </button>
                </div>
              </div>
            </section>
          ))}

          <button className="button is-primary" onClick={props.addCronJob}>
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
