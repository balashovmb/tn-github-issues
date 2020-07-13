const loadObjects = <ObjType>(address:string):Promise<ObjType> => fetch(address).then((result) => {
  if (result.ok) {
    return result.json();
  }
  throw new Error(result.status.toString());
});

export default loadObjects;
