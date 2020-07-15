import loadingStatus from '../common/loading-status';
import getAddress from './get-address';
import Repo from '../types/repo';
import loadObjects from '../requests/load-objects';
import Destinations from '../types/destinations';
import addElementsToSelect from './add-elements-to-select';

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');
const reposList = <HTMLSelectElement>document.getElementById('repos-list');

const showRepos = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  const statusInterval = loadingStatus(serviceMsg);
  const address:string = getAddress(Destinations.user);
  try {
    const repos:Repo[] = await loadObjects<Repo[]>(address);
    clearInterval(statusInterval);
    serviceMsg.innerText = '';
    if (repos.length === 0) {
      serviceMsg.innerHTML = 'Пользователь с таким логином отсутствует либо не имеет репозитариев.';
    } else {
      addElementsToSelect(reposList, repos, 'repo');
    }
  } catch (e) {
    clearInterval(statusInterval);
    console.error(e);
    serviceMsg.innerText = `Ошибка: ${e}`;
  }
};

export default showRepos;
