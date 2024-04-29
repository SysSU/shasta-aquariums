import PageIllustration from '@/components/PageIllustration';

describe('PageIllustration', () => {
  it('Renders correctly', () => {
    cy.mount(<PageIllustration />);
    cy.get('svg').should('exist');
  });
});
