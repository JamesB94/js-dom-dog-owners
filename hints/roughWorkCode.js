const myUnorderedHeaderList = document.querySelector('.dogs-list')
const myMainSection =  document.querySelector(".main__dog-section")


// creates the Li tag & adds the dogs name
function createDogHeaderLi(dog) {
  // create element etc
  const dogItem = document.createElement('li')
  dogItem.classList.add("dogs-list__button");
  dogItem.innerText = dog.name
  return dogItem
}

const createHeader = () => {
  data.forEach(thisDog => {
      const myDogItem = createDogHeaderLi(thisDog)
      myUnorderedHeaderList.append(myDogItem)
  })
}
createHeader()


// for(let i = 0; i < data.length; i++) {
//   const pokemon = data[i]
//   let isShowingFrontImage = true

//   const card = createCard()
//   const cardTitle = addTitle(card, pokemon)
//   const cardImage = addImage(card, pokemon)
//   const cardInfoList = addInfoList(card, pokemon)
//   const button = createToggleButton(card)
// }

for(let i =0; i < data.length; i++){
  const doggo = data[i]

  
}
const card = createSection(doggo)


function createSection (doggo) {
  const addSection = document.createElement('section')
  addSection.classList = '".main__dog-section"'
  myMainSection.append(addSection)
  addSection.innerHTML = doggo.name
  console.log(addSection)
  return addSection
}
 

// console.log ('this is the card test ', card)

function onClick() {


   const listItem = document.getElementsByClassName('dogs-list__button') [2]
   console.log(listItem)

  listItem.addEventListener("click", () => {
    console.log('hello')
    createSection ()
  });
}

//  onClick()

function addDogName (card, doggo) {
  const dogName = document.createElement('h2')
  dogName.textContent += doggo.name;
  console.log('hello')
  myMainSection.append(dogName)
  return dogName
}

addDogName ()
