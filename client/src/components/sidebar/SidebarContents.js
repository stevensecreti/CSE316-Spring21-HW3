import React            from 'react';
import SidebarHeader    from './SidebarHeader';
import SidebarList      from './SidebarList';

const SidebarContents = (props) => {
    return (
        <>
            <SidebarHeader 
                auth={props.auth} createNewList={props.createNewList} activeName = {props.activeName}
            />
            <SidebarList
                activeid={props.activeid} handleSetActive={props.handleSetActive}
                todolists={props.todolists} createNewList={props.createNewList}
                updateListField={props.updateListField} activeList = {props.activeList} activeName = {props.activeName}
            />
        </>
    );
};

export default SidebarContents;