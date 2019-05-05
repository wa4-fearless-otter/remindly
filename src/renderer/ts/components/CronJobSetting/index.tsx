import * as React from "react";
import Type from "./Type";
import RunCommandSettings from "./RunCommandSettings";
import ShowMessageSettings from "./ShowMessageSettings";

interface Props extends React.HTMLProps<HTMLDivElement> {
  jobValue?: string,
  typeValue?: Type,
  onJobChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default (props: Props) => {
  const {
    jobValue,
    typeValue,
    onJobChange,
    onTypeChange,
    ...newProps
  } = props;

  let TypeSettings: React.ComponentType = () => <div>Failed to load settings!</div>;

  switch (typeValue) {
    case Type.RunCommand:
      TypeSettings = RunCommandSettings;
      break;

    case Type.ShowMessage:
      TypeSettings = ShowMessageSettings;
      break;
  }

  return (
    <div {...newProps}>
      <input className="input" type="text" placeholder="* * * * *" value={jobValue} onChange={onJobChange} />
      <br />
      <br />
      <div className="select">
        <select value={typeValue} onChange={onTypeChange}>
          {Object.values(Type).map((value, i) => <option key={i}>{value}</option>)}
        </select>
      </div>
      <br />
      <br />
      <TypeSettings />
    </div>
  );
}
