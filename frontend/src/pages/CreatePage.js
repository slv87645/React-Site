import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const CreatePage = () => {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [quantity, setQuantity] = useState();
    const [cost, setCost] = useState();
    const [date, setDate] = useState();

    const navigate = useNavigate();

    const addCollectable = async () => {
        const newCollectable = { title, type, quantity, cost, date };

        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newCollectable),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Succesfully added a collectable to your collection.")
        } else{
            alert(`Failed to add a row, due to missing input(status code = ${response.status})`)
        }
        navigate("/log");
    };
    return (
        <>
            <h2>Log a Collectable</h2>
            <article>
                <p>Record the details of your collectable item.</p>
                <table id='collectables'>
                    <caption>Details of the collectable item</caption>
                    <thead>
                    <tr>
                    <th>Source Title</th>
                    <th>Type of Collectable</th>
                    <th>Quantity</th>
                    <th>Cost of Item</th>
                    <th>Date Added</th> 
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label for='title' class ="required">
                                <input type="text" value ={title} id="title" name="title" onChange={e => setTitle(e.target.value)} required autoFocus/> 
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
                            <td><button class='wait' onClick={addCollectable}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default CreatePage;