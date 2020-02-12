const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const dir = require('node-dir');

exports.postFile = (file, channels, slackToken, threadTs) => {
    fs.readFile(file, (err, imageData) => {
        if (err) {
            console.log('kommer du hit')
            throw err;
        }

        const form = new FormData();
        form.append('file', imageData, file);
        form.append('channels', channels);
        threadTs && form.append('thread_ts', threadTs);

        return axios.post('https://slack.com/api/files.upload', form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${slackToken}`
            }
        }).then(response => response.data)
            .catch(err => { return new Error(err) });
    });
};

exports.postMessage = (message, channels, slackToken, threadTs) => {
    console.log('args15', message, channels)
    // const headers = {
    //     'Content-type': 'application/json',
    //     'Authorization': `BearerRR ${slackToken}`
    // };
    // console.log('hva med rett før createBody')
    // const createBody = () => ({
    //     'channel': channels,
    //     'text': message,
    //     ...threadTs && { thread_ts: threadTs }
    // });
    console.log('rett før selve sending!=')
    return axios.post('https://slack.com/api/chat.postMessage')
    // createBody(),
    // {headers}
    // )
    // .then(response => {
    //     console.log('kommer du hit?')
    //     if (response.data.ok) {
    //         return response.data.ts
    //     } else {
    //         console.log('eller hit?')
    //         throw new Error(response.data.error)
    //     }
    // }).catch(err => {
    //     console.log('hva med her?')
    //     throw err
    // });
};

exports.getFilenamesFromSubdirs = path => {
    return dir.promiseFiles(`${__dirname}/${path}`)
        .then(files => files)
        .catch(err => err)
};
