require('dotenv').config()
const url =
    'https://developer.sepush.co.za/business/2.0/area?id=jhbcitypower3-2-northcliff'
const token = process.env.TOKEN

fetch(url, {
    method: 'GET',
    headers: {
        token: token,
    },
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Connection failed.')
        }
        return response.json()
    })
    .then((data) => {
        console.log(data.events)
    })
    .catch((error) => {
        console.error('There was an error.')
    })


    const { exec } = require('child_process');

// Define the command to be executed
const command = 'screen -S minecraft -p 0 -X stuff "<command_to_send>\n"';

// Iterate over the events data and send commands to the process
data.events.forEach(event => {
    const cmdToSend = `command_to_send_based_on_event: ${event.note}`;
    exec(command.replace('<screen_session_name>', '<your_screen_session_name>').replace('<command_to_send>', cmdToSend), (error, stdout, stderr) => {
        console.log(`Command sent successfully: ${cmdToSend}`);
    });
});


// Example event data
let eventData = {data.events.start};

// Function to format the time difference
function formatTimeDifference(startDateTimeString) {
    const startTime = new Date(startDateTimeString);
    const currentTime = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = startTime - currentTime;

    // Convert milliseconds to minutes
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    // Calculate hours and minutes
    const hours = Math.floor(minutesDifference / 60);
    const minutes = minutesDifference % 60;

    // Format the output string
    const formattedTimeDifference = `Load shedding starting at ${startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} GMT+2 in ${hours} hours and ${minutes} minutes`;

    return formattedTimeDifference;
}

// Call the function with the start time from the event data
const formattedTime = formatTimeDifference(eventData.start);
console.log(formattedTime);
