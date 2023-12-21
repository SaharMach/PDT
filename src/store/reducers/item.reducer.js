
export const SET_ITEM = 'SET_SET_ITEM'
export const SET_ITEMS = 'SET_ITEMS'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const UNDO_REMOVE_BOARD = 'UNDO_REMOVE_BOARD'
export const UNDO_UPDATE_BOARD = 'UNDO_UPDATE_BOARD'
export const RESET_ITEM = 'RESET_ITEM';

// export const STARRED_BOARD = "STARRED_BOARD"
// export const UNSTARRED_BOARD = "UNSTARRED_BOARD"


const initialState = {
    items: [],
    item: {},
    lastRemovedItem: null,
    category: []
}

export function itemReducer(state = initialState, action) {
    let newState = state
    let items
    let lastBoard
    let item
    let currBoard
    switch (action.type) {
        case SET_ITEMS:
            newState = { ...state, items: action.items }
            // console.log('newstate:', newState.boards);
            break
        case REMOVE_BOARD:
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            boards = state.boards.filter(board => board._id !== action.boardId)
            newState = { ...state, boards, lastRemovedBoard }
            break
        case ADD_BOARD:
            newState = { ...state, boards: [...state.boards, action.board] }
            break
        case UPDATE_BOARD:
            boards = state.boards.map(board => (board._id === action.board._id) ? action.board : board)
            newState = { ...state, boards, board: { ...action.board } }
            break
        case UNDO_UPDATE_BOARD:
            ({ lastBoard } = state)
            currBoard = lastBoard
            return { ...state, currBoard, lastBoard: null }
        // case UPDATE_BOARD:
        //     newState = { ...state, board: action.board }
        //     break;
        case RESET_ITEM:
            return { ...state, item: {} };
        case UNDO_REMOVE_BOARD:
            if (state.lastRemovedBoard) {
                newState = { ...state, boards: [...state.boards, state.lastRemovedBoard], lastRemovedBoard: null }
            }
        // case STARRED_BOARD:
        //     newState = { ...state, starredBoards: [...state.starredBoards, action.board] }
        //     break
        // case UNSTARRED_BOARD:
        //     const updatedStarredBoards = state.starredBoards.filter(starredBoard => starredBoard._id !== action.board._id)
        //     newState = { ...state, starredBoards: updatedStarredBoards }
        //     break
        case SET_ITEM:
            newState = { ...state, item: action.item }
            break
        default:
    }
    return newState
}
