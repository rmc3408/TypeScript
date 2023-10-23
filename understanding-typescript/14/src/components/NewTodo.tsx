import React from 'react'
import { useRef } from 'react';

interface AddNotesProps {
    addNote: (text: string) => void;
}

const NewTodo: React.FC<AddNotesProps> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = inputRef.current!.value;
        props.addNote(newPost);
        //console.log(newPost);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='text'>Enter text:</label>
                <input type='text' id='todo=text' ref={inputRef}/>
                <button type='submit'>Add</button>
            </div>
            
        </form>
    )
}

export default NewTodo
