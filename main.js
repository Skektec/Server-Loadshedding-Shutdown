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
