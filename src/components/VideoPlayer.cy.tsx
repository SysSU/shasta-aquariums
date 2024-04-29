import VideoPlayer from '@/components/VideoPlayer';

describe('VideoPlayer', () => {
  it('Renders correctly with all properties', () => {
    cy.mount(<VideoPlayer url="https://www.youtube.com/watch?v=yNZq8WcScn4" />);
    cy.get('#videoPlayer').should('exist');
    cy.get('iframe').should('exist');
  });
});
