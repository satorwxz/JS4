//Задание 1
// строка проверить строку на наличие . и после нее на com или ru
//function task(){
//const str ='youtube.com'
// const newArray= str.split( '.') //[youtube','com']
//  if(newArray[1] ==='com'||  newArray[1] === 'ru' ){
//  return 'true'
//  }else {
// return 'false'
// }
//}
//console.log(task())


//Задание 2
// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// const str='worD'
// function task(){
//    if (str.length % 2 === 0 && str.length <= 8 && str.length >= 4 ){
//        return "true"
//    }else {
//        return 'false'
//    }
// }
// console.log(task())




//Задание 3
// строка поменять букву каждого четного индекса на E можно решить через map

// const str= 'hello world'
//
// function handleCheck(str){
//    const result= str.split('')
//    return result.map((char,index) => index % 2 === 0 ?'E' : char ).join('')
// }
//
// console.log(handleCheck(str))




//Задание 4
// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
//let str='Querty123'
//let str1='Querty123 '

//const handleCheckPsw=(arg, arg1) => {
//    if (arg.trim() === arg1.trim() ) {
//        return 'Access'
//    }else {
//        return 'Denied'
//    }
//}

//console.log(handleCheckPsw(str,str1))






//Задание 5
//['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]

// const str=['lorem', 'ipsum', 'dolor', 'sit']
// const result=str.map(el => el.length);
// console.log(result)



//Задание 6
// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// const str = ['lorem', 'ipsum', 'dolor']
// const result=str.map((el,index) => index + 1)
// console.log(result)



//Задание 7
// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// const arr =['lorem', 'ipsum', 'dolor']
// const arr1=arr.map(el=> el[0].toUpperCase() + el.slice(1))
// console.log(arr1)




//Задание 8
// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
//const str =['lorem', 'ipsum', 'dolor']
//console.log(str.map(el => el.toUpperCase()))

//Задание 9
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
//const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//const str2=str.join('-')
//console.log(str2)

//Задание 10
//['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
//const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//const str2=str.join('/')
//console.log(str2)


//Задание 11
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
//const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//const str2=str.join(' ')
//console.log(str2)


//Задание 12
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
//const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//const str2=[str[1],str[3]]
//console.log(str2)


//Задание 13
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
//const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//const str2=[str[0],str[2],str[4]]
//console.log(str2)


//Задание 14
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// const str=['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// const str2=['consectetur', 'adipiscing', 'elit']
// const result=str.concat(str2)
// console.log(result)


//Задание 15
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
//const numbers=[123,33,444,'22',55,66,77,88,99]
//const newnumber=numbers.filter(el => el !== '22')
//console.log(newnumber)



//Задание 16
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
//const numbers=[123,33,444,'22',55,66,77,88,99]
//const newnumber=numbers.filter(el => el !== '22')
//newnumber.push(22)
//console.log(newnumber)

//Задание 17
// ['null', undefined, 0, false, true, ''] => [0, false, true]
//const date=['null', undefined, 0, false, true, '']
//const newdate=date.filter(el => el === 0 || el === false || el === true  )
//console.log(newdate)



//Задание 18
// ['null', undefined, 0, false, true, ''] => [true, 'null']
//const date=['null', undefined, 0, false, true, '']
//const newdate=date.filter(el => el === true || el === 'null' )
//console.log(newdate)


//Задание 19
// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// const a=[1123, 'qwe']
// const newa=a.concat(a)
// console.log(newa)



//Задание 20
// [null, undefined] => [null, undefined, null, undefined]
// const date=[null, undefined]
// const date1=date.concat(date)
// console.log(date1)



//Задание 21
// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
// const str='lorem ipsum dolor sit amet'
// const lor=str.split(' ')
// const lornew=[lor[0] + ' ' + lor[2], lor[4]]
// const result=lornew.join(' ')
// console.log(result)


//Задание 22
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const num=[1,2,3]
// const num2=[4,5,6]
// const newNum=num.concat(num2)
// console.log(newNum)



//Задание 23
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const num=[1,2,3]
// const newNum=num.reverse()
// console.log(newArr)




//Задание 24
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// const num=[1,2,3]
// num.push(4,5,6)
// console.log(num)



//Задание 25
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// const num=[1,2,3]
// num.unshift(4,5,6)
// console.log(num)


//Задание 26
//Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.
// const num=['js','css','jq']
// const num1=num[0]
// console.log(num1)



//Задание 27
//Дан массив ['js', 'css', 'jq']. Выведите а консоли последний элемент.
// const num=['js','css','jq']
// const num1=num[2]
// console.log(num1)



//Задание 28
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const num=[1,2,3,4,5]
// const newNum=num.slice(0,3)
// console.log(newNum)


//Задание 29
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// const num=[1,2,3,4,5]
// const newNum=num.slice(3,5)
// console.log(newNum)


//Задание 30
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const num=[1,2,3,4,5]
// num.splice(1,2)
// console.log(num)

//Задание 31
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// const num=[1,2,3,4,5]
// const newNum= num.splice(1,3)
// console.log(newNum)




//Задание 32
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const num=[1,2,3,4,5]
// num.splice(3,0,'a','b','c')
// console.log(num)



//Задание 33
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const num=[1,2,3,4,5]
// num.splice(1,0,'a','b')
// num.splice(6,0,'c')
// num.splice(8,0,'e')
//
// console.log(num)


//Задание 34
//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.


// function handleFoo(n){
//     let result=[]
//     for(let i= 1 ; i < n ; i++ ){
//         result.push('x'.repeat(i));
//     }
//     return result;
// }
//
// console.log(handleFoo(5));



//Задание 35
//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// function handleFoo(n) {
//     let result=[]
//     for(let i= 1; i <= n ;i++){
//         result.push(String(i).repeat(i))
//     }
//     return result
// }
//
// console.log(handleFoo(5))
//Задание 36
//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']

// function arrayFill(value,lenght){
//     let arr=[]
//     for(let i= 0 ; i < lenght ; i++ ){
//         arr.push(value)
//     }
//     return arr
// }
//
// console.log(arrayFill('x',5))

//Задание 37
//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const arr = [1,2,3,4,5,6,7,8,9,10]
// function handleFoo(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//         if(sum > 10){
//             return i + 1
//         }
//     }
//     return -1
// }
//
// console.log(handleFoo(arr))
//Задание 38
//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке

// let arr = [1,2,3,4,5,6,7,8,9]
// function handleFoo(arr){
//     let numArr=[]
//     for(let i= arr.length - 1 ; i >= 0 ; i--){
//         numArr.push(arr[i])
//     }
//     return numArr
// }
//
// console.log(handleFoo(arr))
//Задание 39
//Дан массив с числами. Найти самое большое число в этом массиве и вывести в консоли.
// const count = [2,5,87,232,98,34,67,98]
// function handleCheck(){
//     return count.reduce((max,current) => (current > max ? current : max), -Infinity)
// }
//
// console.log(handleCheck())
//Задание 40
// //Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// const arr=[2,5,3,9]
// const result=[arr[0] * arr[1] + arr[2] * arr[3]]
// console.log(result)
//Задание 41
//Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
// const arr=['john', 'jane', 'kate', 'peter']
// const newArr=arr.map(el=> el[0].toUpperCase() + el.slice(1))
// console.log(newArr)
