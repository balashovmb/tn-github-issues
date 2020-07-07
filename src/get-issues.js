function getIssues() {
    const searchButton = document.getElementById('search-button');

    const loadIssues = () => {
        const address = getAddress();
        const query = {
            method: 'get',
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }
        }
        return fetch(address, query).then(result => {
            if (result.ok) {
                const resultJSON = result.json();
                return resultJSON;
            }
            throw new Error(result.status);
        });
    };

    const getAddress = function () {
        const user = document.getElementById('user-input').value;
        const repo = document.getElementById('repo-input').value;
        return `https://api.github.com/repos/${user}/${repo}/issues`;
    }

    const showResult = async () => {
        try {
            const issues = await loadIssues();
            console.log(issues);
        } catch (e) {
            console.error(e);
        }
    };

    searchButton.addEventListener('click', showResult)
}

getIssues();
