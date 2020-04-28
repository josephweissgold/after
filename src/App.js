import React, { useEffect } from 'react';
import { NotesProvider } from './contexts/NotesContext';
import useNoteState from './hooks/useNoteState';
import SmallCardPanel from './SmallCardPanel';
import BigCard from './BigCard';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Navbar from './Navbar';
import './App.css';
import Note from './Note';

function App (){
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<NotesProvider>
						<div className="col-9">
							<SmallCardPanel />
							<div className="row">
								<div className="col-4">
									<BigCard />
								</div>
								<div className="col-8">
									<NoteForm />
								</div>
							</div>
						</div>
						<div className="col-3 pr-0">
							<NoteList />
						</div>
					</NotesProvider>
				</div>
			</div>
		</div>
	);
}

export default App;
