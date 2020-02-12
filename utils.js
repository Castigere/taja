const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data')
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
    console.log('args', message, channels)
    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${slackToken}`
    };

    const createBody = () => ({
        'channel': channels,
        'text': message,
        ...threadTs && { thread_ts: threadTs }
    });

    return axios.post(
        'https://slack.com/api/chat.postMessage',
        createBody(), {
        headers
    }).then(response => response.data.ts)
        .catch(err => err);
};

exports.getFilenamesFromSubdirs = path => {
    return dir.promiseFiles(`${__dirname}/${path}`)
        .then(files => files)
        .catch(err => err)
};
