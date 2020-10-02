const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'; 
const SEND_MESSAGE = 'SEND-MESSAGE'; 

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {  

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
} 


export const sendMessagecreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;