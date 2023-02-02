const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            core.info('Yes here in my action [trigger workflow]')
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
