import loadingStatus from './common/loading-status.ts';
import getAddress from './views/get-address.ts';
import Issue from './types/issue.ts';
import loadIssues from './requests/load-issues.ts';
import renderIssues from './views/render-issues.ts';

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');

const showIssues = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  const statusInterval = loadingStatus(serviceMsg);
  const address:string = getAddress();
  try {
    const issues:Issue[] = await loadIssues(address);
    clearInterval(statusInterval);
    serviceMsg.innerText = '';
    renderIssues(issuesRoot, issues);
  } catch (e) {
    clearInterval(statusInterval);
    console.error(e);
    serviceMsg.innerText = `Ошибка: ${e}`;
  }
};

export default showIssues;
