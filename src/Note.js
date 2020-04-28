import React, { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import EditNoteForm from './EditNoteForm';
import { DispatchContext } from './contexts/NotesContext';
import './Note.css';

function Note ({ id, note, completed }){
	const dispatch = useContext(DispatchContext);
	const [
		isEditing,
		toggle
	] = useToggleState(false);
	const styles = { textDecoration: completed ? 'line-through' : 'none' };
	return (
		<div>
			{isEditing ? (
				<EditNoteForm id={id} note={note} toggleEditForm={toggle} />
			) : (
				<div class="card rounded-0 Note">
					<div class="card-text m-3 text-left" style={styles}>
						{note}
					</div>
					<div class="row justify-content-center mb-2">
						<button
							class="btn-sm btn-outline-success m-1"
							onClick={() => dispatch({ type: 'toggle', id: id })}
						>
							Toggle
						</button>
						<button class="btn-sm btn-outline-info m-1" aria-label="Edit" onClick={toggle}>
							Edit
						</button>
						<button
							class="btn-sm btn-outline-danger m-1"
							aria-label="Delete"
							onClick={() => dispatch({ type: 'remove', id: id })}
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default memo(Note);
