import { createStore, compose } from 'redux';

// import our data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    comments,
    posts
};


const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)





const reducer = (state = defaultState, action) => {
    console.log('Reducer: ', action);
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return {
                posts: [...state.posts.slice(0, action.index), {...state.posts[action.index], likes: state.posts[action.index].likes + 1},  ...state.posts.slice(action.index + 1)],
                comments: {...state.comments}
            }

        case 'ADD_COMMENT':
            return { 
                comments: {...state.comments, [action.postId]: [...state.comments[action.postId], {text: action.comment, user: action.author}]},
                posts: [...state.posts]
            }

        case 'REMOVE_COMMENT':
            return {
                comments: {...state.comments, [action.postId]: 
                    [...state.comments[action.postId].slice(0, action.i), 
                    ...state.comments[action.postId].slice(action.i + 1)]
                }, 
                posts: [...state.posts]
            }


        default: 
            return state;
    }
}

const store = createStore(reducer, enhancers);

export default store;