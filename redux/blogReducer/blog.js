import {GET_BLOG_DATA} from './actionType'
const initialState = {
    blog: []
}

const blog = (state = initialState, action) => {
    switch(action.type) {
        case GET_BLOG_DATA: 
            return {...state, blog: action.payload}
        default:
            return state
    }
}

export default blog;