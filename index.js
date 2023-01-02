import { countries } from "./countries.js";

const value = process.argv[2]

if(!value){
    console.log("digite algum valor")
}else{
    const result = countries.filter((country) => {
        return country.name.toLowerCase().includes(value.toLowerCase())
    })
    console.table(result)
}