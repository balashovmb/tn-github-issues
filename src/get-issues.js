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
            renderIssues(issues);
        } catch (e) {
            console.error(e);
        }
    };

    const renderIssues = function (issues) {
        const issuesRoot = document.getElementById('issues-root');
        issuesRoot.innerHTML = '';
        issues.forEach(issue => appendIssue(issuesRoot, issue));
    }

    function appendIssue(container, issue) {
        const {number, created_at, title, body} = issue;
        const dateIssue = created_at.substr(0,10);
        const div = document.createElement('div');
        div.innerHTML = `${number}  ${dateIssue} ${title} <br> ${body} <hr>`;
        container.append(div);
    }

    searchButton.addEventListener('click', showResult)
}
getIssues();
