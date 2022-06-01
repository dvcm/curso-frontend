let carros = [

  {
    id: 1,
    marca: "audi",
    modelo: "a5",
    ano: 2020,
    combustivel: ['gasolina','etanol'],
    portas: 4,
    cambio: 'automatico',
    km: 50000
  },
  {
    id: 2,
    marca: "ford",
    modelo: "mustang",
    ano: 2019,
    combustivel: ['gasolina','etanol'],
    portas: 4,
    cambio: 'manual',
    km: 1000
  },
  {
    id: 3,
    marca: "fiat",
    modelo: "palio pe de boi",
    ano: 1998,
    combustivel: ['gasolina'],
    portas: 2,
    cambio: 'manual',
    km: 999000
  }

];

function getCarros(){
  return carros;
}

export default getCarros();