import { useLocalStorageReducer } from './useLocalStorageReducer';
import uuid from 'uuid/v4';
export default (initialNotes) => {
	const [
		notes,
		setNotes
	] = useLocalStorageReducer('notes', initialNotes);
	return {
		notes,
		addNote: (newNoteText) => {
			setNotes([
				...notes,
				{ id: uuid(), note: newNoteText, completed: false }
			]);
		},
		removeNote: (noteId) => {
			//filter out removed todo
			const updatedNotes = notes.filter((n) => n.id !== noteId);
			//call setNotes with new notes array
			setNotes(updatedNotes);
		},
		toggleNote: (noteId) => {
			const updatedNotes = notes.map((n) => (n.id === noteId ? { ...n, completed: !n.completed } : n));
			setNotes(updatedNotes);
		},
		editNote: (noteId, newNote) => {
			const updatedNotes = notes.map((n) => (n.id === noteId ? { ...n, note: newNote } : n));
			setNotes(updatedNotes);
		}
	};
};
