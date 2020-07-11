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

function loadingStatus():NodeJS.Timeout {
  let bar = '';
  const timerId = setInterval(() => {
    bar += '|';
    serviceMsg.innerText = `Загрузка ${bar}`;
  }, 200);
  return timerId;
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

function issueHTMLString(issue:Issue):string {
  const {
    number, title, body,
  } = issue;
  const issueDate:string = issue.created_at.substr(0, 10);
  let issueHTML = `${number} ${issueDate} ${title}`;
  if (body) {
    issueHTML += '<br>';
    if (body.length < 50) {
      issueHTML += body;
    } else {
      issueHTML += body.substr(0, 50);
    }
  }
  issueHTML += '<hr>';
  return issueHTML;
}

function appendIssue(container:HTMLElement, issue:Issue):void {
  const htmlString = issueHTMLString(issue);
  const div:HTMLElement = document.createElement('div');
  div.innerHTML = htmlString;
  container.append(div);
}

function renderIssues(issues:Issue[]):void {
  serviceMsg.innerText = '';
  issues.forEach((issue) => appendIssue(issuesRoot, issue));
}

const showIssues = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  const stausInterval = loadingStatus();
  try {
    const issues:Issue[] = await loadIssues();
    clearInterval(stausInterval);
    renderIssues(issues);
  } catch (e) {
    clearInterval(stausInterval);
    console.error(e);
    serviceMsg.innerText = `Ошибка: ${e}`;
  }
};

export default showIssues;
