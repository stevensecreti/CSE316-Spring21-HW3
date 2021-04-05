import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const undoStyle = !props.hasUndo ? ' table-header-button-disabled-UR ' : 'siderbar-buttons undo-redo';
    const redoStyle = !props.hasRedo ? ' table-header-button-disabled-UR ' : 'siderbar-buttons undo-redo';
    const clickDisabled = () => { };

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort(1)}>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort(2)}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort(3)}>Status</WButton>
            </WCol>
            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={props.disabled ? clickDisabled : () => props.sort(4)}>Assigned To</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
                <div className="button-group">
                    <WButton className={`${undoStyle}`} onClick={props.undo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton className={`${redoStyle}`} onClick={props.redo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                        <i className="material-icons">redo</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;