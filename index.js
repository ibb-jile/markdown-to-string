'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
    const path = core.getInput('file-path')
    const content = await fs.readFile(path, 'utf8')

    const formattedContent = content
        .replace('\r\n', '\\r\\n')
        .replace('\n', '\\n')
        .replace('\r', '\\r')
        .replace('"','\\"');

    console.log(formattedContent);
    core.setOutput("result", formattedContent);
}

main().catch(err => core.setFailed(err.message))
