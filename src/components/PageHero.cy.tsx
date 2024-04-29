import PageHero from '@/components/PageHero';
import HeroImage from '@/public/hero-image.jpg';

describe('Header', () => {
  it('Renders correctly with all properties', () => {
    cy.mount(
      <PageHero
        title="Test Title"
        description="Test Description"
        heroImage={HeroImage}
      />
    );

    cy.get('section').should('exist');
    cy.get('h1').should('have.text', 'Test Title');
    cy.get('p').should('have.text', 'Test Description');
    cy.get('img').should('exist');
  });

  it('Renders correctly without heroImage', () => {
    cy.mount(<PageHero title="Test Title" description="Test Description" />);

    cy.get('section').should('exist');
    cy.get('h1').should('have.text', 'Test Title');
    cy.get('p').should('have.text', 'Test Description');
    cy.get('img').should('not.exist');
  });
});
