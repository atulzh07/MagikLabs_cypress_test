describe('Argentina', () => {
    
    let countryCode = "AR";

    it('Card Payments', () => {
       cy.visit(`https://onramp.magiklabs.io?apiKey=UBkf0AxGSwU7Lq-DHABa4Q&tokens=[]&fiatAmount=30&primaryColor=%23D480FF&widgetType=paymentLink&defaultCountry=${countryCode}`);
        cy.wait(5000);

        for(let i = 1; i<= 300; i++){
                cy.get('.sc-dZTDFv').click()
                cy.get(`.sc-cSyrqk > .sc-ksBlkl > .sc-fEXmlR > :nth-child(${i})`).click();
                cy.get('.sc-cUEOzv').click()
        }
    })
})