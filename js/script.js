// let cars = [{ // массив машин
//     "name": "Cobalt",
//     "price":14000,
//     "features": {
//       "speed": 240,
//       "age": 2020,
//       "color": "white",
//       "company": "GM",
//     }
//   }, {
//     "name": "Malibu",
//     "price":25000,
//     "features": {
//       "speed": 250,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
//   }, {
//     "name": "Lacetti",
//     "price":18000,
//     "features": {
//       "speed": 230,
//       "age": 2023,
//       "color": "grey",
//       "company": "GM",
//     }
//   }, {
//     "name": "Tahoe",
//     "price": 10000,
//     "features": {
//       "speed": 200,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
//   }, {
//     "name": "Tesla",
//     "price":85000,
//     "features": {
//       "speed": 320,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
//   }]

// let cheap = [] // пустой массив для дешёвых машин 
// let expensive = [] // пустой массив для дорогих машин

// for (let item of cars){ // запускаем цикл for
//     if (item.price < 35000){ // сортировка по цене
//         cheap.push(item) // дешёвые машины добавляем в cheap
//         break
//     }else {
//         expensive.push(item) // дорогие машины добавляем expensive
//         break
//     }
// }
// console.log(cheap);
// console.log(expensive);



let names = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
let index = prompt(`Какое имя хотите удалить  ${names}`)

for (let item of names){
    if (index == item){
        alert(`${index} удалён`)
        delete names[names.indexOf(item)]
        break
    }else{
        alert('😂 not 😂')
    }
}

console.log(names);










let massiv = [1, 2, false, 'hello', 5, 8, 24, 'world', undefined, null, 'error', 22]
let mas = []

for (let item of massiv){
    if (typeof(item) == 'number'){
        mas.push(item)
    }else {
        alert('нет number')
    }
}
if (mas.length >= 5){
    console.log(good);
}else {
    console.log('😂 no good 😂');
}

// let num = [4, 16, 19, 22, 11, 144, 967, 19124]
// let even = []
// let odd = []

// for (let item of num){
//     if(item %2 == 0){
//         even.push(item)
//         break
//     }else{
//         odd.push(item)
//         break
//     }
// }
// console.log(even);
// console.log(odd);








































// let arr = [{
//     "name": "Cobalt",
//     "price":14000,
//     "features": {
//       "speed": 240,
//       "age": 2020,
//       "color": "white",
//       "company": "GM",
//     }
//   }, {
//     "name": "Malibu",
//     "price":25000,
//     "features": {
//       "speed": 250,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
//   }, {
//     "name": "Lacetti",
//     "price":18000,
//     "features": {
//       "speed": 230,
//       "age": 2023,
//       "color": "grey",
//       "company": "GM",
//     }
//   }, {
//     "name": "Tahoe",
//     "price": 10000,
//     "features": {
//       "speed": 200,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
//   }, {
//     "name": "Tesla",
//     "price":85000,
//     "features": {
//       "speed": 320,
//       "age": 2023,
//       "color": "black",
//       "company": "GM",
//     }
// }]

// let cars = []
// for(let item of arr){
//     cars.unshift(item.name)
// }


// cars.sort()
// let conf = confirm('Хотите купить машину?')
// if(conf == true){
//     let ask = prompt(`Выберите машину: 1 ${cars[0]}\n 2 ${cars[1]}\n 3 ${cars[2]}\n 4 ${cars[3]}\n 5 ${cars[4]}`)
//     if(ask == '1' || ask == 'Lacetti'){
//         let buy_car = confirm(`Цена ${arr[0].price}`)
//         if(buy_car == true){
//             alert(`Вы купили машину ${}`)
//         }
//     }else
    
// }else{

// }




















// let names = []
// for(let item of arr){
//     names.unshift
// }















//   let 
//   let obj;
//   for (let item of arr){
//     item.features.garntiya = true
//     if(item.features.age < 2023){
//         obj = item
// }
//   }