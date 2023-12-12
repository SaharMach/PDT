import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import {  SET_ITEMS } from "../reducers/item.reducer.js";
// import { taskService } from "../../services/task.service.local.js";
// import { SOCKET_EMIT_UPDATE_BOARD, socketService } from "../../services/socket.service.js";
import { itemService } from '../../services/item.service.js';

// Action Creators:
export function getActionRemoveBoard(boardId) {
    return {
        // type: REMOVE_BOARD,
        boardId
    }
}
export function getActionAddBoard(board) {
    return {
        type: ADD_BOARD,
        board
    }
}

export function getActionUpdateBoard(board) {
    return {
        type: SET_BOARD,
        board
    }
}

export async function loadItems() {
    try {
        const items = await itemService.query();
        // console.log('Boards loaded:', boards);

        
        // if (user) {
        //     if (user.username !== 'Guest') {
        //         filteredBoards = boards.filter(board =>
        //             board.members.some(boardMember => boardMember._id === user._id)
        //         )
        //     }
        // } else {
        //     console.log('No user provided, no boards will be filtered.');
        // }

        store.dispatch({
            type: SET_ITEMS,
            items: items
        })
        return items
    } catch (err) {
        console.error('Cannot load boards', err)
        throw err
    }
}


export async function loadBoard(boardId) {
    try {
        const board = await boardService.getById(boardId)
        store.dispatch({ type: SET_BOARD, board })
        return board
    }
    catch {
        console.log('cannot load board:', err)
        throw err
    }
}

export async function removeBoard(boardId) {
    try {
        await boardService.remove(boardId)
        store.dispatch(getActionRemoveBoard(boardId))
    } catch (err) {
        console.log('Cannot remove board', err)
        throw err
    }
}






