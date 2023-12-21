import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import {  SET_ITEMS, SET_ITEM, RESET_ITEM } from "../reducers/item.reducer.js";
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

export async function loadItems(filterBy = {}) {
    console.log('filterBy:', filterBy)
    try {
        const items = await itemService.query(filterBy);
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

export async function loadItem(itemId) {
    try {
        const item = await itemService.getById(itemId)
        store.dispatch({ type: SET_ITEM, item })
        return item
    }
    catch {
        console.log('cannot load item:', err)
        throw err
    }
}

export function resetItem() {
    try {
        store.dispatch({type: RESET_ITEM})
    } catch (err) {
        console.log(err, 'couldnt reset item');
        throw err
    }
}
// export async function removeBoard(boardId) {
//     try {
//         await boardService.remove(boardId)
//         store.dispatch(getActionRemoveBoard(boardId))
//     } catch (err) {
//         console.log('Cannot remove board', err)
//         throw err
//     }
// }






