
const user01 = new Object()
user01.id = 1
user01.nome = "joao"
user01.idade = 25

const user02 = new Object()
user02.id = 2
user02.nome = "Patrick"
user02.idade = 30

const car01 = new Object()
car01["marca"] = "fiat"

const car02 = new Object()
car02.marca = "ford"

console.log(Object.keys(user01))
console.log(Object.keys(user02))
console.log(Object.keys(car01))
console.log(Object.keys(car02))

console.log(Object.values(user01))
console.log(Object.values(user02))
console.log(Object.values(car01))
console.log(Object.values(car02))

console.log(Object.entries(user01))
console.log(Object.entries(user02))
console.log(Object.entries(car01))
console.log(Object.entries(car02))

Object.defineProperty(user01, 'cpf', {
  enumerable: true,
  writable: false,
  value: '000.000.000-00'
})

user01.cpf = '111.111.111-11'
console.log(Object.entries(user01))



user01.filhos = {
  filho01 : "Matheus",
  filho02 : "Csarol"
}

console.log(Object.entries(user01.filhos))