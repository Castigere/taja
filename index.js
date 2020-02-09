const core = require('@actions/core');
const github = require('@actions/github');


try {
  const slackToken = core.getInput('slack-token');
  const picturePath = core.getInput('picture-path');
  const channels = core.getInput('channels');

  console.log('Cypress to slack test reporter');
  console.log('Slack tokeb:', slackToken);
  console.log('Picture path', picturePath);
  console.log('Channels', channels);
} catch (error) {
  core.setFailed(error.message);
}


// try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
// }