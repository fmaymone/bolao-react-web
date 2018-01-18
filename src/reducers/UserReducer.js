export default (state = null, action) => {
  switch (action.type) {
    case 'select_data':
      return action.payload;
    default:
      return state;
  }
};
