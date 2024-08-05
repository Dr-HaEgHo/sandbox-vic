// objects
// string, number, boolean, objects ,arrays
const inputName = document.getElementById('name')
const addName = document.getElementById('addName')
const namesList = document.getElementById('namesList')


let bottle = { 
    material: "glass",
    color: 'jade green',
    weight: '23g',
    volume: 3,
}

bottle = {
    ...bottle,
    premium: 'Gold'
}

let names = [
    {
        id:'1',
        name: 'Tolu',
        lastName: "Agbaje",
    },
    {
        id:'2',
        name: 'John',
        lastName: "Agbaje",
    },
    {
        id:'3',
        name: 'Bisi',
        lastName: "Agbaje",
    },
    {
        id:'4',
        name: 'Dara',
        lastName: "Agbaje",
    }
];

console.log('result before: ', names)


// console.log('result 1: ', bottle.material)


addName.addEventListener('click', function() {
    const value = inputName.value.split(' ');

    console.log('the value ', value)
    if(value.length < 3 || value[2] === ""){
        
        namesList.innerHTML = names.map((item) => `<p>${item.name}</p>`).join('')
        alert('invalid input')
        return
    }else{

        const newChild = {
            id: value[0],
            name: value[1],
            lastName: value[2]
        }
        names = [...names, newChild]
        
        console.log('result after: ', names)
        
        namesList.innerHTML = names.map((item) => `<p>${item.name}</p>`).join('')
    }
})