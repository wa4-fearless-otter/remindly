import * as React from "react";
import CronJobSetting from "./CronJobSetting";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <CronJobSetting />
    </div>
  );
}
