/// <reference types = "Cypress"/>

describe('Selecao de Produtos para carrinho', () => {
    it('Selecionar Produtos', () => {
        cy.LogarNaAplicacao()
        cy.SelecaoDeProdutos()
    })
});