import Footer, { socialLinkData } from '@/components/Footer';

describe('Footer', () => {
  it('Renders correctly', () => {
    cy.mount(<Footer />);
    cy.get('footer').should('exist');
    cy.get('footer').should(
      'contain.text',
      'ShastaAquariums.com. All rights reserved.'
    );

    socialLinkData.forEach((link) => {
      cy.get(`a[href="${link.href}"]`).should('exist');
      cy.get(`#socialLink-${link.label}`).should('exist');
    });
  });
});
