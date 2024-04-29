import Header from '@/components/Header';

describe('Header', () => {
  it('Renders correctly', () => {
    cy.mount(<Header />);
    cy.get('header').should('exist');
    cy.get('nav').should('exist');
    cy.get('a').should('exist');
  });
});
