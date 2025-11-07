describe('Funcionalidade de Produtos', () => {

    const username = 'standard_user';
    const password = 'secret_sauce';
    const url = 'https://www.saucedemo.com/';

    beforeEach(() => {
        cy.visit(url);
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="login-button"]').click();

        cy.url().should('include', '/inventory.html');
    });

    it('Dado que estou logado, Quando eu acessar a página de produtos, Então consigo ver a lista dos produtos disponíveis', () => {

        it('Valida exibição da lista de produtos', () => {
            cy.get('.inventory_item').should('have.length.greaterThan', 0);
            cy.get('.title').should('contain', 'Products');
        });
    })

    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por nome de A → Z, Então os produtos devem ser exibidos em ordem alfabética crescente', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)');

        cy.get('.inventory_item_name').then(($items) => {
            const nomes = [...$items].map(item => item.innerText);
            const ordenado = [...nomes].sort();
            expect(nomes).to.deep.equal(ordenado);
        });
    });

    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por nome de Z → A, Então os produtos devem ser exibidos em ordem alfabética decrescente', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)');

        cy.get('.inventory_item_name').then(($items) => {
            const nomes = [...$items].map(item => item.innerText);
            const ordenado = [...nomes].sort().reverse();
            expect(nomes).to.deep.equal(ordenado);
        });
    });


})