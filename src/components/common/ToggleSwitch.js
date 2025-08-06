const ToggleSwitch = ({ id, label, checked, defaultChecked, onChange }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        checked={checked !== undefined ? checked : undefined} // solo si está definido
        defaultChecked={checked === undefined ? defaultChecked : undefined} // solo si no hay checked
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default ToggleSwitch
