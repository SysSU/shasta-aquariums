import ConsultBlock from './ConsultBlock';

describe('ConsultBlock', () => {
  it('Renders correctly', () => {
    cy.mount(<ConsultBlock />);
    cy.get('h3').should('have.text', 'Setup a consultation now!');
    cy.get('p').should(
      'have.text',
      'Enter your details here and we will get in touch with you.'
    );
    cy.get('form').should('exist');
    cy.get('#name').should('exist');
    cy.get('#phone').should('exist');
  });

  it('Submit form success', () => {
    cy.intercept('POST', '/api/setupConsult', (req) => {
      console.log(req.body);
      req.reply({ status: 200, body: { results: 'Success' } });
    }).as('consultation');

    cy.mount(<ConsultBlock />);
    cy.get('#name').type('John Doe');
    cy.get('#phone').type('123-456-7890');
    cy.get('button').click();
    cy.wait('@consultation')
      .its('request.body')
      .should(
        'deep.equal',
        JSON.stringify({ name: 'John Doe', phone: '123-456-7890' })
      );
    cy.get('#successMessage').should(
      'have.text',
      'Thanks, we will get in touch with you soon!'
    );
  });

  it('Submit form error', () => {
    cy.intercept('POST', '/api/setupConsult', (req) => {
      req.reply({ status: 200, body: { results: 'Error' } });
    }).as('consultation');

    cy.mount(<ConsultBlock />);
    cy.get('#name').type('John Doe');
    cy.get('#phone').type('123-456-7890');
    cy.get('button').click();
    cy.wait('@consultation');
    cy.get('#errorMessage').should(
      'have.text',
      'Something wrong happened, you can try to submit again!'
    );
  });

  it('Submit loading', () => {
    cy.intercept('POST', '/api/setupConsult', (req) => {
      return Cypress.Promise.delay(900, { results: 'Error' }).then(req.reply);
    }).as('consultation');

    cy.mount(<ConsultBlock />);
    cy.get('#name').type('John Doe');
    cy.get('#phone').type('123-456-7890');
    cy.get('button').click();
    cy.get('button').should('have.text', 'Sending...');
    cy.get('#pendingMessage').should('have.text', 'Sending please wait!');
  });
});
