import BreadCrumbs from './BreadCrumbs';
import { BreadcrumbDataContext } from '@/context/BreadCrumbsContext';

describe('BreadCrumbs', () => {
  it('No breadcrumbs', () => {
    cy.mount(<BreadCrumbs />);
    cy.get('.breadcrumbs').should('not.exist');
  });

  it('With breadcrumbs', () => {
    const breadCrumbs = [
      { name: 'First', href: '/first' },
      { name: 'Second', href: '/second' },
      { name: 'Third', href: '/third' },
    ];

    const TestComp = () => {
      return (
        <BreadcrumbDataContext.Provider value={{ breadCrumbs }}>
          <BreadCrumbs />
        </BreadcrumbDataContext.Provider>
      );
    };
    cy.mount(<TestComp />);
    cy.get('.breadcrumbs').should('exist');
    cy.get('.breadcrumbs').find('li').should('have.length', 3);
    cy.get('.breadcrumbs').find('li').eq(0).contains('First');
    cy.get('.breadcrumbs')
      .find('li')
      .eq(0)
      .find('a')
      .should('have.attr', 'href', '/first');
    cy.get('.breadcrumbs').find('li').eq(1).contains('Second');
    cy.get('.breadcrumbs')
      .find('li')
      .eq(1)
      .find('a')
      .should('have.attr', 'href', '/second');
    cy.get('.breadcrumbs').find('li').eq(2).contains('Third');
    cy.get('.breadcrumbs')
      .find('li')
      .eq(2)
      .find('a')
      .should('have.attr', 'href', '/third');
  });
});
