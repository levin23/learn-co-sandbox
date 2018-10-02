const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}
const collections = [1, [2, [4, [5, [6]], 3]]]
// console.log(typeof person.pets[0].kind)
// console.log(person.occupation["title"])
function find(obj, criteriaFn) {
  
  let current = obj
  let next = []
 
  
  while (current) {
    
    if (criteriaFn(current)) {
      return current
    }
 
    
    if (typeof current == "object") {
      for (let i = 0; i < Object.keys(current).length; i++) {
        next.push(current[Object.keys(current)[i]])
      }
    }
 
    
    current = next.shift()
  }
 
  // if we haven't
  return null
}
function a(n){ if(n < 5) return true}
function b(n){ if(typeof n === 'number' && n > 5) return true}
console.log(find(person, a))
console.log(find(collections, b))
console.log(67> ["66"])