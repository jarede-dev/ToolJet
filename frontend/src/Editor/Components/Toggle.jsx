import React, { useEffect } from 'react';

class Switch extends React.Component {
  render() {
    const { on, onClick, onChange, disabledState, color } = this.props;

    return (
      <label className="form-switch form-check-inline">
        <input
          style={{
            backgroundColor: on ? `${color}` : 'white',
            marginTop: '0px',
          }}
          disabled={disabledState}
          className="form-check-input"
          type="checkbox"
          checked={on}
          onChange={onChange}
          onClick={onClick}
        />
      </label>
    );
  }
}

export const ToggleSwitch = ({ height, properties, styles, fireEvent, setExposedVariable }) => {
  const [on, setOn] = React.useState(false);
  const label = properties.label;

  const { visibility, disabledState, toggleSwitchColor, textColor } = styles;

  function toggleValue(e) {
    const toggled = e.target.checked;
    setExposedVariable('value', toggled);
    fireEvent('onChange');
  }

  // Exposing the initially set false value once on load
  useEffect(() => {
    setExposedVariable('value', false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => setOn(!on);

  return (
    <div className="row py-1" style={{ height, display: visibility ? '' : 'none' }}>
      <span className="form-check-label form-check-label col-auto my-auto" style={{ color: textColor }}>
        {label}
      </span>
      <div className="col px-1 py-0 mt-0">
        <Switch
          disabledState={disabledState}
          on={on}
          onClick={toggle}
          onChange={toggleValue}
          color={toggleSwitchColor}
        />
      </div>
    </div>
  );
};
