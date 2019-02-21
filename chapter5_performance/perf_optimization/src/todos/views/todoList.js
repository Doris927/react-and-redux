import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {toggleTodo, removeTodo} from "../actions";
import {FilterTypes} from "../../constants";
import PropTypes from 'prop-types'
import {selectVisibleTodos} from '../selector'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul>
            {
                todos.map((item)=> (
                    <TodoItem
                        key = {item.id}
                        text = {item.text}
                        completed = {item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);