import { Animais } from "./moduleExports"

class Animal {  // criando classes para cada ação do animal

  constructor (especie){  
    this.especie = especie
  }
  falar(){
    console.log(this.especie + ' au au au')
  }
  comer(){
    console.log(this.especie + ' come racao')
  }
  dormir(){
    console.log(this.especie + ' dorme todo dia')
 }

}

class Cachorro extends Animal{ // classe que vai ser especica ou extendida a classe animal cachorro
  falar(){
    console.log(this.especie + ' fala au au au au')  
  }

}


export default Cachorro