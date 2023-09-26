import React, {useState} from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage(){
    const [output, setOutput] = useState([]);
    const fetchOutput = () => {
        fetch ("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setOutput(response.results);
            })
            .catch(() => {
                alert('The random user generator is currently unavailable.')
            });
    }; 
    return(
        <>
        <h2>Staff Information</h2>
        <article>
            <p>This page randomly generates information about 10 random staff member at a time. </p>
            <button id="serverData" onClick = {fetchOutput} value="fromServer">Generate</button>
            <table>
                <caption>Random Person Data</caption>
                <thead>
                    <tr>
                        <th>Portrait</th> 
                        <th>Name/Email</th> 
                        <th>Telephone</th> 
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {output.map((person, i) => <StaffRow person={person} key={i} />)}
                </tbody>
            </table>
    </article>
    </>
    );
}
export default StaffPage;

