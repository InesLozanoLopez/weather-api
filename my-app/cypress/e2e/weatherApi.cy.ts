import {slowCypressDown} from 'cypress-slow-down';
import { includes } from 'cypress/types/lodash';

describe('Weather-API test', () => {
    beforeEach(() => {
        slowCypressDown(50);
        cy.visit('http://localhost:3000/');
    });

    it('should display errir message for a misspealled city', () => {
        cy.get('form').should('be.visible');
        cy.get('input[id="city"]').should('exist')

        cy.get('input[id="city"]').type('Stirlingggg');
        cy.get('.todayForecastContainer').should('not.exist');
        cy.get('.futureGridContainer').should('not.exist');

    
    })
    it('should display weather infor for a correct spelled city', () => {
        cy.get('input[id="city"]').type('Stirling');
        cy.intercept('GET', 'http://api.weatherapi.com/v1/forecast.json').as('getWeatherData');
        cy.wait(1000);

        cy.get('form').submit();
        cy.get('@getWeatherData').then(() => {
        cy.get('.todayForecastContainer').should('exist');
        cy.get('.weatherTemp').should('be.visible');
      cy.get('.weatherInfo').should('be.visible');

        cy.get('.futureGridContainer').should('exist');

        cy.get('.tempUnitsToggle').should('be.visible');
        cy.get('.weatherTemp').invoke('text').should('include', 'ºC');
        cy.get('.lightColor').click();
        cy.get('.weatherTemp').invoke('text').should('include', 'ºF');
    })

    })
})