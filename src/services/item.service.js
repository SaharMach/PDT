
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'
import { socketService } from './socket.service.js'


const BASE_URL = 'item/'
export const itemService = {
    query,
    getById,
    save,
    remove
 
}

window.bs = itemService


async function query() {

    let items = await httpService.get(BASE_URL)
    // let user = userService.getLoggedinUser()
    // if (user) {
    //     if (user.username !== 'Guest') {
    //         boards = boards.filter(board =>
    //             board.members.some(boardMember => boardMember._id === user._id)
    //         );
    //     }
    //     // else case for Guest user is implicit, no need to filter boards
    // } else {
    //     console.log('No user provided, no boards will be filtered.');
    // }
    // console.log('boards: from load', boards)
    return items
}

function getById(boardId) {
    return httpService.get(BASE_URL + boardId)
}

async function remove(boardId) {
    return httpService.delete(BASE_URL + boardId)
}

async function save(board) {
    if (board._id) {
        // socketService.emit('update-board', board)
        // addActivity(board, user, txt)
        const updatedBoard = await httpService.put(BASE_URL + board._id, board)
        return updatedBoard
    } else {
        const updatedBoard = await httpService.post(BASE_URL, board)
        return updatedBoard
    }
}





