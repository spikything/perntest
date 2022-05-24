describe('Basic app tests', () => {

	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Shows the title', () => {
		cy.get('h1').should('contain.text', 'Input Todo');
	});

    var message = Math.random().toString();

    function addRandomEntry() {
		cy.get('input').first().type(message);
    }

	it('Allows user to input and add an entry', () => {
        addRandomEntry();
        cy.contains('Add').click();
		cy.get('table').should('contain.text', message);
	});

	it('Allows user to delete an entry', () => {
        cy.get('button').get('[data="'+message+'"]').contains('Delete').click();
        cy.get('table').should('not.contain.text', message);
	});

});