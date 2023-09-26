import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const EditPage = ({collectableToEdit}) => {
    const [title, setTitle] = useState(collectableToEdit.title);
    const [type, setType] = useState(collectableToEdit.type);
    const [quantity, setQuantity] = useState(collectableToEdit.quantity);
    const [cost, setCost] = useState(collectableToEdit.cost);
    const [date, setDate] = useState(collectableToEdit.date.slice(0,10));

    const navigate = useNavigate();

    const editCollectable = async () => {

         const response = await fetch(`/log/${collectableToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title : title,
                type : type,
                quantity : quantity,
                cost : cost,
                date : date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Succesfully edited the collectable from your collection.")
        } else{
            alert(`Failed to edit the collectable, due to missing input(status code = ${response.status})`)
        }
        navigate("/log");
    };
    return (
        <>
            <h2>Edit a Collectable</h2>
            <article>
                <p>Edit the details of your collectable item.</p>
                <table id='collectables'>
                    <caption>Details of the collectable item</caption>
                    <tr>

                        <th>Title</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Date</th>
                        
                    </tr>
                    <tbody>
                        <tr>
                            <td><label for='title' class ="required">
                                <input type="text" value ={title} id="title" name="title" onChange={e => setTitle(e.target.value)} required autofocus/> 
                                </label>
                            </td>
                            <td><label for='type' class ="required">
                                <input type="text" value ={type} id="type" name="type" onChange={e => setType(e.target.value)} required/> 
                                </label>
                            </td>
                            <td><label for='quantity' class ="required">
                                <input type="number" value ={quantity} id="quantity" name="quantity" onChange={e => setQuantity(e.target.value)} required/> 
                                </label>
                            </td>
                            <td><label for='cost' class ="required">
                                <input type="number" value ={cost} id="cost" name="cost" onChange={e => setCost(e.target.value)} required/> 
                                </label>
                            </td>
                            <td><label for='date' class ="required">
                                <input type="date" value ={date} id="date" name="date" onChange={e => setDate(e.target.value)} required
                                pattern= "d{2}-\d{2}-\d{2}"
                                /> 
                                </label>
                            </td>
                            <td><button class='wait' onClick={editCollectable}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default EditPage;