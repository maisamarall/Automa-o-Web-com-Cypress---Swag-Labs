describe('Funcionalidade de Checkout', () => {

    const url = 'https://www.saucedemo.com/';
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        cy.visit(url);
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="login-button"]').click();

        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_link').click();

        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', 'checkout-step-one.html');
    });

    it('Dado que estou no carrinho de compras, Quando eu preencher os dados de checkout válidos, Então devo ser redirecionado para a página de revisão', () => {
        cy.get('[data-test="firstName"]').type('Maisa');
        cy.get('[data-test="lastName"]').type('Amaral');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        cy.url().should('include', 'checkout-step-two.html');
        cy.get('.title').should('contain', 'Checkout: Overview');
    });

    it('Dado que estou no carrinho de compras, Quando eu tentar continuar o checkout sem preencher os dados obrigatórios, Então deve exibir uma mensagem de erro', () => {
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Error: First Name is required');
    });

    it('Dado que estou na página de revisão do checkout, Quando eu finalizar a compra, Então devo ver a confirmação de pedido realizado com sucesso', () => {
        cy.get('[data-test="firstName"]').type('Maisa');
        cy.get('[data-test="lastName"]').type('Amaral');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });

    it('Dado que estou na página de revisão do checkout, Quando eu cancelar o checkout, Então devo retornar para lista de produtos', () => {
        cy.get('[data-test="firstName"]').type('Maisa');
        cy.get('[data-test="lastName"]').type('Amaral');
        cy.get('[data-test="postalCode"]').type('22022006');
        cy.get('[data-test="continue"]').click();

        cy.url().should('include', 'checkout-step-two.html');
        cy.get('.title').should('contain', 'Checkout: Overview');

        cy.get('[data-test="cancel"]').should('be.visible').click();
        cy.url({ timeout: 6000 }).should('include', 'inventory.html');
    });

});
