///<reference types="cypress" />

describe('Work with basic elements', () => {
it('text', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#formNome').click().type('Ana Vitória')
    cy.get('[data-cy="dataSobrenome"]').click().type('Silveira')  
///Tela de login


    cy.get('#formSexoFem').click()
      .should('be.checked')
    cy.get('#formSexoMasc')
      .should('not.be.checked')
 ///Radio Button.

    cy.get('#formComidaFavorita > tbody > tr > :nth-child(1)').click()
    cy.get('[name=formComidaFavorita').click({ multiple: true}) 
    cy.get('#formComidaVegetariana').should('be.checked')

    cy.get('[data-test="dataEscolaridade"]').select('Superior')

    cy.get('#elementosForm\\:sugestoes').type('Ana123').should('have.value','Ana123')

    cy.get('[data-testid="dataEsportes"]').select(['natacao','Corrida'])

    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').click()

    cy.get(':nth-child(3) > :nth-child(6) > input').click().type('oioioi')

    cy.get('#confirm').click()
    ///Caixa de Sugestão.


    

    })
})
