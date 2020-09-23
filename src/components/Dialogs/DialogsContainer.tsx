import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import {RootStateReduxType} from "../../Redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogsData: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
//функция для данных
/*let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        updateNewMessageBody: (newMessage: string) => {
            let action = updateNewMessageText(newMessage)
            dispatch(action)
        },
        onSendMessageClick: () => {
            dispatch(sendMessage())
        }
    }
}*/
//функция для коллбэков

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
})(Dialogs);