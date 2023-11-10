import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello Redux Toolkit" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {

        addTodo: (state, action) => {
            console.log("Add todo");
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },


        removeTodo: (state, action) => {
            console.log("deleteTodo")
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // Dont match id with payload id 
        },

        // updateTodo: (state, action) => {
        //     // setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
        //     state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        // }

    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer