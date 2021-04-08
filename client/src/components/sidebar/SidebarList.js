import { PromiseProvider } from 'mongoose';
import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    let restOfLists = props.todolists.filter(item => item.id !== props.activeid);
    return (
        <>
            {   
                props.activeName !== undefined &&
                <SidebarEntry
                    handleSetActive={props.handleSetActive} activeid={props.activeList.id}
                    id={props.activeList.id} key={props.activeList.id} name={props.activeName} _id={props.activeList._id}
                    updateListField = {props.updateListField}
                />
            }
            {
                props.todolists &&
                restOfLists.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
               ))
            }
        </>
    );
};

export default SidebarList;