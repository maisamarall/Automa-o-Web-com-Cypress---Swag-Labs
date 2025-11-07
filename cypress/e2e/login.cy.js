describe('Funcionalidade de Login', () => {

    const url = 'https://www.saucedemo.com/';
    const validUser = { username: 'standard_user', password: 'secret_sauce' };
    const lockedUser = { username: 'locked_out_user', password: 'secret_sauce' };

    beforeEach(() => {
        cy.visit(url);
    });

    it('Dado que quero fazer o login, Quando eu digitar as credenciais válidas, Então devo ser redirecionado para a página de produtos', () => {
        cy.get('input[name="user-name"]').type(validUser.username);
        cy.get('input[name="password"]').type(validUser.password);
        cy.get('input[name="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('Dado que quero logar, Quando eu digitar uma senha inválida, Então deve exibir uma mensagem de erro', () => {
        cy.get('input[name="user-name"]').type(validUser.username);
        cy.get('input[name="password"]').type('senha_errada');
        cy.get('input[name="login-button"]').click();

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match');
    });

    it('Dado que quero logar, Quando eu digito um usuário bloqueado, Então deve exibir uma mensagem de erro', () => {
        cy.get('input[name="user-name"]').type(lockedUser.username);
        cy.get('input[name="password"]').type(lockedUser.password);
        cy.get('input[name="login-button"]').click();

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry, this user has been locked out.');
    });

    it('Dado que quero logar, Quando eu tentar acessar e não preenchendo nenhum campo do formulário, Então deve impedir login e exibir alerta', () => {
        cy.get('input[name="login-button"]').click();

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username is required');
    });

});
