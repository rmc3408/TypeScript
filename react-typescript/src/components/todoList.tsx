import React from 'react'

interface TodoListProps {
    items: {
        id: number;
        text: string;
    }[];
    removeNote: (id: number) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({items, removeNote}) => {
    
    return (
        <ul>
            {items.map(note => <li key={note.id}>
                {note.text}
                <button onClick={removeNote.bind(null, note.id)}>delete</button>
            </li>)}
        </ul>
    )
}

export default TodoList
