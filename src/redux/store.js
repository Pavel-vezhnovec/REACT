import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', count: '15' },
                { id: 2, message: 'How are you?', count: '20' }
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'YO' },
                { id: 4, message: 'YO' },
                { id: 5, message: 'YO' }
            ],
            dialogs: [
                { id: 1, name: 'Pavel' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Antonio' },
                { id: 4, name: 'Alina' },
                { id: 5, name: 'Dima' },
                { id: 6, name: 'Andrey' }
            ],
            newMessageBody:""
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Pavel' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Anronio' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}



export default store;
window.store = store;