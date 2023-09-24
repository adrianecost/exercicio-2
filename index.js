// Função que filtra estados que começam com "S"
function filtrarEstadosComS(listaDeEstados) {
    return listaDeEstados.filter(estado => estado.startsWith('S'));
  }
  
  // Exemplo de uso da função
  const listaDeEstados = ['São Paulo', 'Rio de Janeiro', 'Santa Catarina', 'Paraná'];
  const estadosFiltrados = filtrarEstadosComS(listaDeEstados);
  console.log(estadosFiltrados); // Deverá imprimir ['São Paulo', 'Santa Catarina']
  