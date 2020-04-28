import React, { createContext, useState } from 'react';

export const ChapterContext = createContext();

export function ChapterProvider (props){
	const [
		chapter,
		setChapter
	] = useState('care');
	const changeChapter = (e) => setChapter(e.target.value);

	return <ChapterContext.Provider value={{ chapter, changeChapter }}>{props.children}</ChapterContext.Provider>;
}
