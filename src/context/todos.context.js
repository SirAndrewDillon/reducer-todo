import React, { createContext } from 'react'
import { Planets } from 'react-preloaders'
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/todo.reducer.js'

const defaultTodos = [
	{ id: 1, task: 'Mow the lawn using billy goats', completed: false },
	{ id: 2, task: 'Make a todo list', completed: true }
]
export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		defaultTodos,
		todoReducer
	)
	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				<Planets
					animation="slide-right"
					background="linear-gradient(to right, #abbaab, #ffffff)"
					time={4000}
				/>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	)
}
