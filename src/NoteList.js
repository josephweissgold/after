import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from './contexts/NotesContext';
import './NoteList.css';

function NoteList (){
	const notes = useContext(NotesContext);
	console.log(notes);
	if (notes.length)
		return (
			<div className="Panel card p-1 rounded-0 border-0">
				<h1 className="text-center mt-3 mb-4">notecards</h1>
				{notes.map((note, i) => (
					// To add a key to a fragment, we have to use the long-hand version
					// rather than <> </>, we have to use <React.Fragment>
					<div key={i} className="m-1 ">
						<Note {...note} key={note.id} className="card-body " />
					</div>
				))}
			</div>
		);
	return null;
}
export default NoteList;
