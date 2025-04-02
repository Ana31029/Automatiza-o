// <reference types="cypress" />
import 'cypress-iframe'; // Importa o plugin para manipular iframes

describe('Preenchendo formulário de ICT', () => {
    it('Preencher campos do Cadastro de ICT', function (){
      
        
        cy.visit('https://victumservicos178223.fluig.cloudtotvs.com.br:2200/portal/p/1/pageworkflowview?processID=novo_ict')
        
        
        cy.get('#username').type('admin')
        cy.get('#password').type('cilw39mWYXlCXYpt')
        cy.get('#submitLogin').click()
        

        cy.contains('Processos').click()
        cy.contains('Iniciar Solicitações').click()
        cy.contains('ICT').click()
        cy.get('.process-description').click()

        {delay:10000}

        cy.iframe('#workflowView-cardViewer')
        .find('#nm_razao_social')
        .should('be.visible')
        .type('Tectoy');

        cy.iframe('#workflowView-cardViewer')
        .find('#vl_cnpj')
        .should('be.visible')
        .type('71.855.648/0001-98');

        cy.iframe('#workflowView-cardViewer')
        .find('#vl_inscricao_estadual')
        .should('be.visible')
        .type('681.270.045.636');

        cy.iframe('#workflowView-cardViewer')
        .find('#vl_cep_empresa')
        .should('be.visible')
        .type('69093210');

        
    })
});
