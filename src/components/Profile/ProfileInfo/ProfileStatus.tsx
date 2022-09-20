import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: Function
}

class ProfileStatus extends React.Component <PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateActivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {
                    !this.state.editMode ?
                        <span
                            onDoubleClick={this.activateEditMode}>
                        {this.props.status}</span>
                        : <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={this.deactivateActivateEditMode}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;