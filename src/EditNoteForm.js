import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import './EditNoteForm.css';
import { DispatchContext } from './contexts/NotesContext';

function EditNoteForm ({ id, note, toggleEditForm }){
	const dispatch = useContext(DispatchContext);
	const [
		value,
		handleChange,
		reset
	] = useInputState(note);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'edit', editedNote: value, id: id });
				reset();
				toggleEditForm();
			}}
			className="Notecard"
		>
			<textarea className="Notecard-textarea" value={value} onChange={handleChange} />
			<button className="btn btn-primary">Confirm</button>
		</form>
	);
}
export default EditNoteForm;
