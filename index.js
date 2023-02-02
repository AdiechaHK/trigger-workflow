const core = require('@actions/core');
const github = require('@actions/github');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

(
    async () => {
        try {
            const path = process.env.INPUT_REPO_PATH;
            const token = process.env.INPUT_REPO_TOKEN;
            const url = `https://api.github.com/repos/${path}/dispatches`;
            await fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({"event_type":"sync-folder"})
            });
            core.info('Workflow Triggered successfully.')
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
