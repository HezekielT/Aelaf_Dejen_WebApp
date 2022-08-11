import React, {useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import EventsForm from './EventsForm';
import EventsItem from './EventsItem';

const axios = require('axios');

function Events(props) {
    const val= props.admin
    const [conventions, setConventions] = useState([]);
    const [enableEdit, setEnableEdit] = useState(false);
    const [drivers, setDrivers] = useState([]);
    const [reloadComponent, setReloadComponent] = useState(false);
    const [conventionItem, setConventionItem] = useState([]);
    const [text, setText] = useState('')
    const [getList, setGetList] = useState('');

    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };

    let endpoints = [
        "http://localhost:5000/getEvents",
        "http://localhost:5000/getDrivers"
    ]

    useEffect(() => {
        if(val !== true) {
            setText("REGISTER")
        } else {
            setText("View Registered Participants")
        }
        const fetch = async () => {
            Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then(([{data: events}, {data: drivers}] ) => {
                setConventions(events)
                setDrivers(drivers)
            })
        }
        fetch()
    }, [reloadComponent])

    useEffect(() => {
        let participantEndpoints = [];
        
        if(conventions !== []){
            conventions.map(convention => 
                participantEndpoints = [ ...participantEndpoints, `http://localhost:5000/getParticipants/${convention.id} `] 
            )
        }
        const fetch = async () => {
            Promise.all(participantEndpoints.map((endpoint) => axios.get(endpoint)))
            .then(axios.spread((...allData) => {
                setGetList( {allData} );})
            )}
        fetch()
        
    }, [conventions])

    async function DeleteConvention(id) {
        await axios.delete(
            `http://localhost:5000/deleteEvent/${id}`,
            config
        ).then(function(response) {
            setReloadComponent(!reloadComponent);
        }).catch(function (error) {
            console.log(error)
        })
    }

    async function EditConvention(convention) {
        setEnableEdit(true)
        setConventionItem(convention)
    }

    function DisplayComponent() {
        if(conventions.length === 0){
            
            return (
                <Card>
                    <CardContent>
                        <Typography component="h1" variant="h5" sx={{ py: 5, justifyContent: 'center'}}>
                            There is no upcoming convention!
                        </Typography>
                    </CardContent>
                </Card>
            )
        } else {
            if(enableEdit === false) {
                return(
                    conventions.map((convention) => 
                    // console.log(conventions.indexOf(convention),"-id-", convention.id)
                        <EventsItem 
                         val={val}
                         text={text}
                         EditConvention={EditConvention}
                         DeleteConvention={DeleteConvention}
                         convention={convention} 
                         drivers={drivers}
                         getList={getList}
                         index={conventions.indexOf(convention)}

                        />
                    )
                )
            } else {
                return (
                    <EventsForm 
                    convention={conventionItem} 
                    setEnableEdit={setEnableEdit} 
                    reloadComponent={reloadComponent} 
                    setReloadComponent={setReloadComponent}
                    />
                )
            }
        }
    }

    return (
        <DisplayComponent />
    );
}

export default Events;