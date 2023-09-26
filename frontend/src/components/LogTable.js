import React from 'react';
import LogRow from './LogRow';
import {useNavigate} from 'react-router-dom'
import {IoIosCreate} from 'react-icons/io';

function LogTable ({collectables, onEdit, onDelete}) {
    const redirect = useNavigate();
    return (
        <table id="collectables">
            <caption>Add and Edit Collectables</caption>
            <thead>
                <tr>
                Add <IoIosCreate onClick={() => redirect("/create")} title='Adding will occur on a separate page.'> </IoIosCreate>
                </tr>
                <tr>
                    <th>Source Title</th>
                    <th>Type of Collectable</th>
                    <th>Quantity</th>
                    <th>Cost of Item</th>
                    <th>Date Purchased</th> 
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {collectables.map((collectable, i) => 
                    <LogRow
                        collectable={collectable} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
                    
            </tbody>
        </table>
    )
}
export default LogTable;