import { countries } from "./countries.js";

const value = process.argv[2]

if(!value){
    console.log("Digite alguma letra")
}else{
    const result = countries.filter((country) => {
        return country.name[0].toLowerCase().includes(value.toLowerCase())
    })
    console.table(result)
}