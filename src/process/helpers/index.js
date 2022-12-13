const onFieldChange = (key, value, updateProps) => updateProps({ [key]: value });

const capitalize = string =>
  string && string?.charAt(0)?.toUpperCase() + string?.slice(1);

const mock = () => {};

const updateProps = (state, { props }) => ({ ...state, ...props });

export { capitalize, mock, onFieldChange, updateProps };
