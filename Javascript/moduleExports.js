
// Named exports

export let cores = []
export function getName()
export class Animais {}

// export // serve de ligacao para outro modulo, vc pode compratilhar 

// strict mode modo restrito ele pode modificar o codigo restrito, ele nao deix passar algumas excessoes

// alguns compiladores podem nao interpretar esse modo stricto 


// lista de exportaçao da pra fazer assim, dai nao precisa utilizar o export dessa forma

let cores = []
function getName()
class Animais {}

export { cores, getName, Animais }

// strict mode > como fica todos os exports

export default getCars() 

// export default getCars  // o export default vc so pode ter um por aqrquivo


// default palavra reservada no javascript para passar algo padrao