const initialState = {
  tasks: [],
  currTask: null,
  active: 'personal',
  counts: null,
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'findAll':
      console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
      };
    case 'insert':
      return {
        ...state,
        currTask: action.payload,
      };
    case 'updateActive':
      return {
        ...state,
        active: action.payload,
      };
    case 'updateTask':
      return {
        ...state,
      };
    case 'count':
      return {
        ...state,
        counts: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
