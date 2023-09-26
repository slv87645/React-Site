import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function LogRow({ collectable, onEdit, onDelete }) {
    return (
        <tr>
            <td title="What is the company/world that this collectable is from?"> {collectable.title} </td>
            <td title="What type of collectable is this item?"> {collectable.type} </td>
            <td title="What is the quantity of this colletable?"> {collectable.quantity} </td>
            <td title="How much did the collectable cost?">{collectable.cost.toLocaleString('en-US',{
                                                                            style: 'currency',
                                                                            currency:'USD'})} </td>
            <td title="When was this collectable purchased?"> {collectable.date.slice(0,10)} </td>
            <td><i><MdEdit onClick={() => onEdit(collectable)} title='Editing will occur on a separate page.'></MdEdit></i></td>
            <td><i><MdDeleteForever onClick={() => onDelete(collectable._id)} title='Clicking the delete icon will delete the collectable from the collection.'></MdDeleteForever></i></td>
        </tr>
    );
}
export default LogRow;