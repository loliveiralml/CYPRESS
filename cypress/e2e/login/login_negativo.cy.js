/// <reference types = "Cypress"/>

describe('Teste Funcional de Login', () => {
    
    it('Logar na aplicação',()=>{
        cy.LogarNaAplicacao()
        
    })
});
    describe('Teste Funcional de Erro do Login', () => {
    it('Erro ao informar Login na aplicação',()=>{
        cy.ErroLoginDaAplicacao()
    })
});
    describe('Teste Funcional de Erro da Senha', () => {
    it('Erro ao informar Senha na aplicação',()=>{
             
        cy.ErroSenhaDaAplicacao()
    })
});