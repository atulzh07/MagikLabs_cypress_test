//Sample test for all payment methods in "India"

describe('Countrys Payment Methods', () => {
    let countryCode = "IN";
    it('Payment Method Name', () => {
       cy.visit(`https://onramp.magiklabs.io?apiKey=UBkf0AxGSwU7Lq-DHABa4Q&tokens=[]&fiatAmount=30&primaryColor=%23D480FF&widgetType=paymentLink&defaultCountry=${countryCode}`);
        cy.wait(5000);
        for(let i = 1; i<= 2; i++){
                 let countTokens = [300, 33, 53]
             for(let j=1; j <= countTokens[i-1]; j++){
                cy.get(`:nth-child(${i}) > .sc-dZTDFv > .gazUiJ`).click();
                cy.get(`.sc-cSyrqk > .sc-ksBlkl > .sc-fEXmlR > :nth-child(${j})`).click();
                cy.get('.sc-cUEOzv').click();
            }
        }
    })
})