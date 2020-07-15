interface Iterable{
    name?: string,
    login?: string
}

type ElType = 'repo' | 'assignee';

function addElementsToSelect(selectEl:HTMLSelectElement, objects:Iterable[], type:ElType):void{
  const selectElement = selectEl;
  selectElement.innerHTML = '';
  objects.forEach((object:(Iterable)) => {
    let prop:string;
    if (type === 'repo') {
      prop = object.name;
    } else {
      prop = object.login;
    }
    const newSelectItem = document.createElement('option');
    newSelectItem.value = prop;
    newSelectItem.innerHTML = prop;
    selectEl.appendChild(newSelectItem);
  });
}

export default addElementsToSelect;
