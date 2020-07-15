import loadingStatus from '../common/loading-status';
import getAddress from './get-address';
import Issue from '../types/issue';
import loadObjects from '../requests/load-objects';
import renderIssues from './render-issues';
import Destinations from '../types/destinations';

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');

const showIssues = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  const statusInterval = loadingStatus(serviceMsg);
  const address:string = getAddress(Destinations.issues);
  try {
    const issues = await loadObjects<Issue[]>(address);
    clearInterval(statusInterval);
    serviceMsg.innerText = '';
    renderIssues(issuesRoot, issues);
  } catch (e) {
    clearInterval(statusInterval);
    console.error(e);
    if (e.toString() === 'Error: 404') {
      serviceMsg.innerText = 'Репозиторий с таким названием отсутсвует у пользователя';
    } else {
      serviceMsg.innerText = `Ошибка: ${e}`;
    }
  }
};

export default showIssues;
