import React from 'react';
type PropsType = {
    status:string
}
class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateActivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode ?
                        <span
                            onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.status}</span>
                        : <input
                            autoFocus={true}
                            value={this.props.status}
                            onBlur={this.deactivateActivateEditMode.bind(this)}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;