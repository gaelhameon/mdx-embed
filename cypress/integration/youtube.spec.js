/// <reference types="cypress" />

context('<YouTube />', () => {
  it('it loads youtube video correctly', () => {
    cy.visit('/iframe.html?id=components-youtube--usage&viewMode=story');
    cy.getIframeBody().find('#player');
    cy.getIframeBody().find('.ytp-title-text');
    cy.getIframeBody().find('.ytp-large-play-button');
    cy.getIframeBody().find('.madeUpClassNameThatDoesNotExist').should('not.be.undefined');
    cy.getIframeBody().find('.madeUpClassNameThatDoesNotExist');
  });
});
