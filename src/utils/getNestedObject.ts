function getNestedObject(obj: object, path: string) {
  let nestedObj = obj;
  path.split('.').forEach(function (property) {
    nestedObj = nestedObj[property as keyof object];
    if (nestedObj === undefined) {
      return undefined;
    }
  });
  return nestedObj;
}

export default getNestedObject;
