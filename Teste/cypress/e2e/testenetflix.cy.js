
 describe('fazendo login',  () => {

    it('Login', function (){

        cy.visit('https://www.netflix.com/')
        cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click();
        cy.get('[style="--zc08zpi: auto; --zc08zpy: 0 auto; --zc08zp1g: 0 0 calc(58.333333333333336% - 16px); --zc08zp1y: 0 0 calc(66.66666666666667% - 16px); --zc08zp2g: 0 0 calc(66.66666666666667% - 16px); --zc08zp2y: 0 0 calc(66.66666666666667% - 16px); --zc08zpc: flex-end; --zc08zp7: 0px;"] > .layout-container_wrapperStyles__12wd1go1d > .layout-container_styles__12wd1go1g > :nth-child(2) > .pressable_styles__a6ynkg0').click();
        cy.xpath('//*[@id=":r0:"]').click().type('Av31029@gmail.com');
        cy.xpath('//*[@id=":r3:"]').click().type('Ana31029@');
        cy.get('[data-uia="web-login-form+container"] > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .pressable_styles__a6ynkg0').click();
        
       








    })
})