import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/NotesContext';
import './NoteForm.css';

function NoteForm (){
	const [
		value,
		handleChange,
		reset
	] = useInputState('');
	const dispatch = useContext(DispatchContext);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'add', note: value });
				reset();
			}}
			className="Notecard"
		>
			<label htmlFor="newNote" />
			<textarea
				id="newNote"
				placeholder="New Notecard"
				className="form-control"
				value={value}
				onChange={handleChange}
				label="Add New Todo"
				className="Notecard-new"
			/>
			<button type="submit" className="btn btn-primary">
				Save
			</button>
		</form>
	);
}
export default NoteForm;
