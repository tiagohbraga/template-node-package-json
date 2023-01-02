import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if (!name || !code) {
    console.log('digite um nome e/ou codigo do país')
} else {
    const newCountry = {
        name,
        code
    }
    countries.push(newCountry)
    console.table(countries[countries.length -1])
}