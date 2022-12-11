const onFieldChange = (key, value, updateProps) => updateProps({ [key]: value });

const mock = () => {};

const updateProps = (state, { props }) => ({ ...state, ...props });

export { mock, onFieldChange, updateProps };
