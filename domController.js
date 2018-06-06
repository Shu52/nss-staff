//target button
const addBtn = document.querySelector("#addBtn")
//target article with id of staff
const staffArticle = document.querySelector("#staff")
//create fragment to put onto staffArticle later
const staffFragment = document.createDocumentFragment()

//function that clears dom articles and adds new articles, arrow function

const buildStaffArticle = () => {
  //while loop looks for the first child of the article add removes it
  while (staffArticle.firstChild) {
    staffArticle.removeChild(staffArticle.firstChild);
  }

  //after while loop clears dom elements, for loop loops through database staff stores in variable staffmember
  for (let i = 0; i < NssDatabase.staff.length; i++) {
    const staffMember = NssDatabase.staff[i]
    //create section with text of staff member and cohort
    const sectionElement = document.createElement("section")
    sectionElement.textContent = `${staffMember.name}: ${staffMember.cohort}`
    //appendChild to created section
    staffFragment.appendChild(sectionElement)
  }
  //append child to document fragment
  staffArticle.appendChild(staffFragment)
}
// call function BuildStaffArticle to clear and build DOM
buildStaffArticle()

//arrow function that recieves user input for input ids
const getUserInput = () => {
  const inputName = document.querySelector("#inputName")
  const inputCohort = document.querySelector("#inputCohort")
  //console log for internal testing
  console.log("input fields", inputName, inputCohort);

  //create object new staff member from user input
  const newStaffMember = {
    name: inputName.value,
    cohort: inputCohort.value
  }
//push new object to database
  NssDatabase.staff.push(newStaffMember)
  //save database
  saveDatabase(NssDatabase,"NssDb")
  //call function to clear and build DOM
  buildStaffArticle()
  //clear input fields for next user input
  inputName.value = ""
  inputCohort.value = ""

}
//even listnener, listens for click event on addDtn and executes funtion getUserInput
addBtn.addEventListener("click", getUserInput)
