interface Issue {
  number:number,
  title:string,
  body:string,
  // eslint-disable-next-line camelcase
  created_at:string,
}

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');

function getAddress():string {
  const user:string = (<HTMLInputElement>document.getElementById('user-input')).value;
  const repo:string = (<HTMLInputElement>document.getElementById('repo-input')).value;
  return `https://api.github.com/repos/${user}/${repo}/issues`;
}

const loadIssues = ():Promise<Issue[]> => {
  const address:string = getAddress();
  return fetch(address).then((result) => {
    if (result.ok) {
      return result.json();
    }
    throw new Error(result.status.toString());
  });
};

function appendIssue(container:HTMLElement, issue:Issue):void {
  const {
    number, title, body,
  } = issue;
  const dateIssue:string = issue.created_at.substr(0, 10);
  const div:HTMLElement = document.createElement('div');
  div.innerHTML = `${number} ${dateIssue} ${title} <br> ${body} <hr>`;
  container.append(div);
}

function renderIssues(issues:Issue[]):void {
  serviceMsg.innerText = '';
  issues.forEach((issue) => appendIssue(issuesRoot, issue));
}

const showIssues = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  serviceMsg.innerText = 'Идет загрузка';
  try {
    const issues:Issue[] = await loadIssues();
    renderIssues(issues);
  } catch (e) {
    console.error(e);
    serviceMsg.innerText = `Ошибка: ${e}`;
  }
};

export default showIssues;
