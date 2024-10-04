var name2 = 'Max';
console.log("hi")

function abc (abc){

    return ("aa" + abc);
}

console.log(abc(" ali"))

const def = (def) => {
    return "s " + def;
}

const ghi = (g,h) => g + h;
const ghi2 = g => g + 1;

const jkl = () => 3 + 4;

console.log(def("tugce"))
console.log(ghi(12,22))

const person = {
    name:'Fatih',
    age:29,
    value: jkl() + this.name,
    value2: function() {
        return this.name;   
 }
};

const printName = ({name}) => {
    console.log(name + ".......")
}

printName(person);


const{name, age} = person;

console.log(name, age + "!!!!!!!!!")


console.log(person.value2());

var hobbies = ["a","b"]

const [hobby1,hobby2] = hobbies;

console.log(hobby2)

for (hobby of hobbies){
    console.log(hobby)
}

hobbies = hobbies.map(each =>{
    return each + 1;
});
console.log(hobbies)

const toArray = (...args) =>{
    return args;
}

console.log(toArray(1,2,3,4,5))


//setTimeout(() => {
 //   console.log("Hi");
  //  fetchData((text) =>{
   //     console.log(text)
   // })
//}, 2000);

fetchData = (callback) =>{
    setTimeout(() =>{
        callback('ömer');
    },1000)
}


setTimeout(() => {
    console.log("Hi");
    fetchData2().then(text =>{
        console.log(text)
        return fetchData2()
    }).then(text2 =>{
        console.log(text2)
    }).catch(error=>{
        console.log(error)
    })
}, 2000);

fetchData2 = () =>{
    const promise = new Promise((resolve, reject)=>{
        text ="Zehra"
        //text ="Zehra"
        setTimeout(() =>{
            if(text === ""){
                reject("Olmadı")
            }else{
                resolve('Zehra');
            }
        },1000);
    });

    return promise;

}



