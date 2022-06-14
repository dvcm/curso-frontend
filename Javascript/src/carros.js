let carros = [

  {
    id: 1,
    marca: "audi",
    modelo: "a5",
    ano: 2020,
    combustivel: ['gasolina'],
    portas: 4,
    cambio: 'manual',
    km: 50000,
    preco: 25000
  },
  {
    id: 2,
    marca: "ford",
    modelo: "mustang",
    ano: 2019,
    combustivel: ['gasolina','etanol'],
    portas: 4,
    cambio: 'manual',
    km: 1000,
    preco: 150000
  },
  {
    id: 3,
    marca: "fiat",
    modelo: "palio pe de boi",
    ano: 1998,
    combustivel: ['etanol'],
    portas: 2,
    cambio: 'manual',
    km: 999000,
    preco: 3000
  },
  {
    id: 4,
    marca: "jaguar",
    modelo: "j5",
    ano: 2023,
    combustivel: ['gasolina'],
    portas: 4,
    cambio: 'automatico',
    km: 0,
    preco: 190000 
  }

];

function getCarros(){
  return carros;
}

export default getCarros();