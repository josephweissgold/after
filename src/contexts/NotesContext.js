import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import noteReducer from '../reducers/NoteReducer';

export const NotesContext = createContext();
export const DispatchContext = createContext();

export function NotesProvider (props){
	const [
		notes,
		dispatch
	] = useLocalStorageReducer('notes', [], noteReducer);
	return (
		<NotesContext.Provider value={notes}>
			<DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
		</NotesContext.Provider>
	);
}
