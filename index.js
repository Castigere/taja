const core = require('@actions/core');
const github = require('@actions/github');
const { postFile, postMessage, getFilenamesFromSubdirs } = require('./utils');


try {
    const slackToken = core.getInput('slack-token');
    const picturePath = core.getInput('picture-path');
    const channels = core.getInput('channels');
    const message = core.getInput('message');
} catch (err) {
    core.setFailed(err);
}

const postTestReport = async () => {
    try {
        const threadTs = await postMessage(message, channels, 'slackToken')
    } catch (err) {
        core.setFailed(err);
    }
    // getFilenamesFromSubdirs(picturePath)
    //     .then(files => {
    //         for (let file of files) {
    //             postFile(file, channels, slackToken, threadTs);
    //         };
    //     })
    //     .catch(err => err)

    // console.log(`Uploading ${files} to Slack`);

    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
};

postTestReport();

