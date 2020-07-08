function getIssues() {
  const issuesRoot = document.getElementById('issues-root');
  const searchButton = document.getElementById('search-button');
  const serviceMsg = document.getElementById('service-msg');

  function getAddress() {
    const user = document.getElementById('user-input').value;
    const repo = document.getElementById('repo-input').value;
    return `https://api.github.com/repos/${user}/${repo}/issues`;
  }

  const loadIssues = () => {
    const address = getAddress();
    const query = {
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };
    return fetch(address, query).then((result) => {
      if (result.ok) {
        const resultJSON = result.json();
        return resultJSON;
      }
      throw new Error(result.status);
    });
  };

  function appendIssue(container, issue) {
    const {
      number, title, body,
    } = issue;
    const dateIssue = issue.created_at.substr(0, 10);
    const div = document.createElement('div');
    div.innerHTML = `${number}  ${dateIssue} ${title} <br> ${body} <hr>`;
    container.append(div);
  }

  function renderIssues(issues) {
    serviceMsg.innerText = '';
    issues.forEach((issue) => appendIssue(issuesRoot, issue));
  }

  const showResult = async () => {
    issuesRoot.innerHTML = '';
    serviceMsg.innerText = 'Идет загрузка';
    try {
      const issues = await loadIssues();
      renderIssues(issues);
    } catch (e) {
      console.error(e);
      serviceMsg.innerText = `Ошибка: ${e}`;
    }
  };

  searchButton.addEventListener('click', showResult);
}

export default getIssues;
