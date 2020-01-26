export default value => {
  return typeof value === 'number' && Number.isFinite(value);
};
