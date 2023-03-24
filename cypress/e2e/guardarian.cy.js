/// <reference types="cypress" />

describe('find Guardarian unsupported tokens', () => {
    it('find guardarian unsupported tokens', () => {
        let countryCode = "IN";
        cy.visit(`https://onramp.magiklabs.io?apiKey=UBkf0AxGSwU7Lq-DHABa4Q&tokens=[]&fiatAmount=30&primaryColor=%23D480FF&widgetType=paymentLink&defaultCountry=${countryCode}`);
        cy.wait(4000);

        for(let i=1; i<=300; i++){
            cy.get(':nth-child(1) > .sc-dZTDFv > .gazUiJ').click();
            cy.get(`.sc-cSyrqk > .sc-ksBlkl > .sc-fEXmlR > :nth-child(${i})`).click();
            cy.get('.sc-cabOPr').click();
            cy.get(':nth-child(2) > .sc-dPWrhe > .sc-bCfvAP').click().clear().type('atul@magiklabs.io');
            cy.get(':nth-child(3) > .sc-dPWrhe > .sc-bCfvAP').click().clear().type("0xAe89Dc699e0eE95721AE10262bae712B0f696212");
            cy.get('.sc-cabOPr').click();
            cy.wait(4000);
            cy.get('.sc-cUEOzv').click();
            cy.wait(3000);
            cy.get('.sc-cUEOzv').click();
        }
    })
})