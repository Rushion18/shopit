describe('user functionality', () => {
//   it('views a product', () => {
//     cy.visit('/user');

//     cy.get('[data-cy="viewProduct"]').click();
//     cy.get('[data-cy="hideProduct"]').click();
//   });
    

    it('adds to cart', () => {
      cy.visit('/user');

      cy.get('[data-cy="addtoCart"]').first().click();
    });

    // it('increases cart', () => {
    //     cy.visit('/cart');

    //     cy.get('[data-cy="increaseQuantity"]').click()
    // })

    // it('reduces  the cart', () => {
    //     cy.visit('/cart');
        
    //     cy.get('[data-cy="decreaseQuantity"]').click()

    // })

    it('clears cart', () => {
        cy.visit('/cart');

        cy.get('[data-cy="clearCart"]').click()
    })
    
    it('updates user profile', () => {
        cy.visit('/profile')

        cy.get('[data-cy="userName"]').type("Jane Doe from FBI")
        cy.get('[data-cy="email"]').type("0700012543")

        cy.get('[data-cy="updateProfile"]').click()
    })


});
