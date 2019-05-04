import * as React from "react";
import { connect } from "react-redux";
import { Plus, X } from "react-feather";
import { Dispatch, RootState } from "./../store";
import CronJobSetting from "./CronJobSetting";

const mapState = (state: RootState) => ({ cronJobs: state.cronJobs });

const mapDispatch = (dispatch: Dispatch) => ({
  addCronJob: dispatch.cronJobs.add,
  setCronJob: dispatch.cronJobs.set,
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
              <div className="columns is-mobile">
                <div className="column">
                  <CronJobSetting jobValue={job.cronJob} onJobChange={(event) => props.setCronJob({ index: i, value: { ...job, cronJob: event.target.value }})}/>
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
