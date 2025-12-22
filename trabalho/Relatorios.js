
function apolicesPorSegurado(seguradoId, apolices) {
	return apolices.filter(a => a.seguradoId === seguradoId);
}

function apolicesPorSeguradora(seguradoraId, apolices) {
	return apolices.filter(a => a.seguradoraId === seguradoraId);
}

function apolicesPorTomador(tomadorId, apolices) {
	return apolices.filter(a => a.tomadorId === tomadorId);
}

function apolicesPorTipo(tipoDeSeguroId, apolices) {
	return apolices.filter(a => a.tipoDeSeguroId === tipoDeSeguroId);
}

function apolicesAtivas(apolices) {
	return apolices.filter(a => a.estadoDaApoliceId === 1); // 1 = Ativa
}

function apolicesInativas(apolices) {
	return apolices.filter(a => a.estadoDaApoliceId === 2); // 2 = Inativa
}

function quantidadeApolicesAtivas(apolices) {
	return apolicesAtivas(apolices).length;
}

function quantidadeApolicesInativas(apolices) {
	return apolicesInativas(apolices).length;
}

function buscarPorId(id, lista) {
	return lista.find(item => item.id === id);
}

export default {
	// Filtros básicos
	apolicesPorSegurado,
	apolicesPorSeguradora,
	apolicesPorTomador,
	apolicesPorTipo,
	apolicesAtivas,
	apolicesInativas,

	buscarPorId
};
