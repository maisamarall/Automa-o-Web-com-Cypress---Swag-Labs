describe('Funcionalidade de Carrinho', () => {

    const url = 'https://www.saucedemo.com/';
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        cy.visit(url);
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="login-button"]').click();

        cy.url().should('include', '/inventory.html');
    });

    it('Dado que quero estou na página de produtos, Quando adiciono 1 produtos ao carrinho, Então os produtos devem ser adicionados com sucesso.', () => {
        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('Dado que quero estou na página de produtos, Quando adiciono 2 produtos ao carrinho, Então os produtos devem ser adicionados com sucesso.', () => {
        cy.get('.inventory_item').eq(0).find('button').click();
        cy.get('.inventory_item').eq(1).find('button').click();
        cy.get('.shopping_cart_badge').should('have.text', '2');
    });

    it('Dado que estou na página de carrinho, Quando eu remover um produto do carrinho, Então o produto deve ser removido com sucesso', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, { force: true })
        cy.get('.login-box input[name="password"] ').type(password, { force: true })
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').eq(0).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(1).find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain.text', '2')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').first().find('button').contains('Remove').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
    })

    it('Dado que estou na página de produtos, Quando eu acessar o carrinho de compras, Então devo ver os produtos adicionados ao carrinho', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, { force: true })
        cy.get('.login-box input[name="password"] ').type(password, { force: true })
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').eq(0).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(1).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(3).find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', 3)
    })
});