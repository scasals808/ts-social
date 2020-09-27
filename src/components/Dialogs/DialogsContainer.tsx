import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogsData: state.dialogsPage
    }
}

export default compose(withAuthRedirect,
    connect(mapStateToProps,
        {sendMessage, updateNewMessageText}),
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps,
//     {sendMessage, updateNewMessageText})(AuthRedirectComponent);