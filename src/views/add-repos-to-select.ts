import Repo from '../types/repo';

function addReposToSelect(selectEl:HTMLSelectElement, repos:Repo[]):void{
  const selectElement = selectEl;
  selectElement.innerHTML = '';
  repos.forEach((repo) => {
    const newSelectItem = document.createElement('option');
    newSelectItem.value = repo.name;
    newSelectItem.innerHTML = repo.name;
    selectEl.appendChild(newSelectItem);
  });
}

export default addReposToSelect;
