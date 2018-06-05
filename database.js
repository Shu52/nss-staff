const saveDatabase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
  const databaseString = localStorage.getItem(localStorageKey)
  return JSON.parse(databaseString)
}


let NssDatabase = loadDatabase("NssDb")

if(!NssDatabase) {
  NssDatabase = {}
  NssDatabase.staff = []
}
