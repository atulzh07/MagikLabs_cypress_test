describe('Nigeria', () => {
    
    let countryCode = "NG";

    it('Card Payment', () => {
       cy.visit(`https://onramp.magiklabs.io?apiKey=UBkf0AxGSwU7Lq-DHABa4Q&tokens=[]&fiatAmount=30&primaryColor=%23D480FF&widgetType=paymentLink&defaultCountry=${countryCode}`);
        cy.wait(5000);

        for(let i = 1; i<= 291; i++){
            cy.get('.gazUiJ > .sc-hlzHbZ').click();
            cy.get(`.sc-cSyrqk > .sc-ksBlkl > .sc-fEXmlR > :nth-child(${i})`).click();
            cy.get('.sc-cUEOzv').click();
        }
    })
})