const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            const url = "https://api.github.com/repos/AdiechaHK/test-folder-sync-2/dispatches"
            await fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                    "Authorization": "Bearer " + process.env.INPUT_REPO_TOKEN
                },
                body: JSON.stringify({"event_type":"sync-folder"})
            });
            core.info('Workflow Triggered successfully.')
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
