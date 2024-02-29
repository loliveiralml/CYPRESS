Cypress.Commands.add('LogarNaAplicacao',() =>{
   
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
   
});

Cypress.Commands.add('ErroLoginDaAplicacao',() =>{

    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type("standard_user1")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
});
Cypress.Commands.add('ErroSenhaDaAplicacao',() =>{

    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce123")
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
});



Cypress.Commands.add('ValidarTelaDeProdutos',() =>{
   
        cy.get('.product_label').should('contain','Products')
    });
    Cypress.Commands.add('SelecaoDeProdutos',() =>{
   
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').should('contain','4')
        cy.get('.fa-layers-counter').click()
        
    });
