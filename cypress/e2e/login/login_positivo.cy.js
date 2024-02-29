/// <reference types = "Cypress"/>

describe('Teste Funcional de Login', () => {
    
    it('Logar na aplicação',()=>{
        cy.LogarNaAplicacao()
        cy.ErroLoginDaAplicacao()
        cy.ErroSenhaDaAplicacao()

    })
});

describe('Logar e acessar produtos', () => {
    
    it('Logar na aplicação',()=>{
        cy.LogarNaAplicacao()
       // cy.ValidarTelaDeProdutos()
    })
});