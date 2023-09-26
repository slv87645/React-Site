import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable';
import CreatePage from './CreatePage'
import EditPage from './EditPage';

function LogPage({setCollectableToEdit}) {
    const redirect = useNavigate();

    // Use state to bring in the date
    const [collectables, setCollectables] = useState([]);

    // RETRIEVE
    const loadCollectables = async () => {
        const response = await fetch('/log');
        const collectables = await response.json();
        setCollectables(collectables);
    }

    // UPDATE
    const onEditCollectable = async collectable => {
        setCollectableToEdit(collectable);
        redirect("/replace")
    }

    const onDeleteCollectable = async _id => {
        const response = await fetch(`/log/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const collectables = await getResponse.json();
            setCollectables(collectables);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all
    useEffect(() => {
        loadCollectables();
    }, []);

    //
    return (
        <>
            <h2>List of Collectables</h2>
            <p>This page allows the user to log collectable items.</p> 
            <p>Details like the source material, type of item, quantity, cost, and date purchased are recorded.</p>
            <p>Click on the icons to perform functions such as adding, editing, or deleting a collectable item.</p>
            <LogTable
                collectables={collectables} 
                onEdit={onEditCollectable} 
                onDelete={onDeleteCollectable} 
            />
        </>
    );
}

export default LogPage;