import React from "react";
import Login from "../../src/components/Login";

import { errorMessages } from "../../src/components/Login";

describe('Login page', () => {
  


  describe("Error messages", ()=> {

    
    it('shows error when email is not valid', ()=> {

      // Arrange
      // Act
      // Assert
      //cy.visit("https://1e1e-176-42-133-76.ngrok-free.app");
      //
      //
     
      cy.visit("http://localhost:5173");

      cy.get("[data-cy='email-input']").type("enis@work");

      cy.get("[data-cy='error-message']").should("have.length", 1);

      cy.contains(errorMessages.email);

      cy.get("[data-cy='submit-button']").should("be.disabled");

    }); 

    it('shows errors when email and password are not valid', ()=> {

      // Arrange
      // Act
      // Assert
      //cy.visit("https://1e1e-176-42-133-76.ngrok-free.app");
      //
      //
     
      cy.visit("http://localhost:5173");

      cy.get("[data-cy='email-input']").type("enis@work");
      cy.get("[data-cy='password-input']").type("enis");


      cy.get("[data-cy='error-message']").should("have.length", 2);

      cy.contains(errorMessages.password);

    }); 

    it('button is disabled when terms is not checked but email and password are valid', ()=> {

      // Arrange
      // Act
      // Assert
      //cy.visit("https://1e1e-176-42-133-76.ngrok-free.app");
      //
      //
     
      cy.visit("http://localhost:5173");

      cy.get("[data-cy='email-input']").type("enis@workintech.com.tr");
      cy.get("[data-cy='password-input']").type("Workintech??61");

      cy.get("[data-cy='submit-button']").should("be.disabled");

    }); 
  });

  describe("Successful scenario tests", ()=> {

    it('logins succesfully when email and password provided correctly and navigates to success page', ()=> {

      // Arrange
      // Act
      // Assert
      //cy.visit("https://1e1e-176-42-133-76.ngrok-free.app");
      //
      //
     
      cy.visit("http://localhost:5173");

      cy.get("[data-cy='email-input']").type("enis@workintech.com.tr");
      cy.get("[data-cy='password-input']").type("Workintech??61");
      cy.get("[data-cy='terms-checkbox']").check();

      cy.get("[data-cy='submit-button']").click();

      cy.url().should("include", "/success");


    }); 
  });


});