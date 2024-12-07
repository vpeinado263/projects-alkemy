function Resultados () {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
  return (
    <>
      <h2>Seccion de Resultados</h2>
      <p>Vas a Buscar: {keyword}</p>
    </>
  )
}

export default Resultados;
