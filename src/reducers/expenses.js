const defaultState = [];

export default ({ type, expense }, state = defaultState) => {
  switch (type) {
    case "ADD_EXPENSE":
      return [...state, expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== expense.id);
    case "EDIT_EXPENSE":
      return state.map((item) =>
        item.id === expense.id ? { ...item, ...expense } : expense
      );
    default:
      return state;
  }
};
