import React from "react";
import s from './Profileinfo.module.css';

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {alert('HO')}}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}