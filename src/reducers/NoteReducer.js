import uuid from 'uuid/v4';

const noteReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{ id: uuid(), note: action.note, completed: false }
			];
		case 'remove':
			return state.filter((n) => n.id !== action.id);
		case 'toggle':
			return state.map((n) => (n.id === action.id ? { ...n, completed: !n.completed } : n));
		case 'edit':
			return state.map((n) => (n.id === action.id ? { ...n, note: action.editedNote } : n));
		default:
			return state;
	}
};

export default noteReducer;
