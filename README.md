# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `slack-token`

**Required** Slack token for the app publishing the images`.

### `picture-path`

**Required** Picture folder`.

### `channels`

**Required** Comma separated list of slack channels to post pictures to`.

## Outputs

### `slack status`

## Example usage

uses: castigere/taja@master
with:
slack-token: "tokentokntokntoktontoken"
picture-path: "/screenshots"
channels: "paw-cypress-test"
