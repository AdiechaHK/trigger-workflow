const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            console.log(process.env.INPUT_REPO_TOKEN.split("").join("-"));
            core.info('Yes here in my action [trigger workflow]')
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
