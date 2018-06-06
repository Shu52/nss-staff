//function to save to database using stringify
const saveDatabase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}
//function to load database using parse to convert string
const loadDatabase = function (localStorageKey) {
  const databaseString = localStorage.getItem(localStorageKey)
  return JSON.parse(databaseString)
}

//load database on startup
let NssDatabase = loadDatabase("NssDb")
//if no database on first load, create one
if(!NssDatabase) {
  NssDatabase = {}
  NssDatabase.staff = []
}
