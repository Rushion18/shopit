// describe('admin functionality', () => {
//   beforeEach(() => {
//     cy.visit('/adminhome');
//   });
//   it('search for a product', () => {
//     const searchterm = 'wine';
//     cy.get('[data-cy = "searchproduct"]').type(searchterm);
//     cy.get('[data-cy = "product"]').should('have.length.greaterThan', 0);
//   });

//   it('views a product', () => {
//     cy.get('[data-cy="viewProduct"]').first().click();
//     cy.get('[data-cy="hideProduct"]').first().click();
//   });

//   it('successfully edit product', () => {
//     cy.get('[data-cy="updateProduct"]').first().click();
//     cy.get('[data-cy="updatedProducttitle"]').type('');
//     cy.get('[data-cy="updatedProductdescription"]').type('');
//     cy.get('[data-cy="updatedProductprice"]').type('');
//     cy.get('[data-cy="updatedProductcategory"]').type('');
//     cy.get('[data-cy="updatedProductstock"]').type('');
//     cy.get('[data-cy="saveChanges"]').click();
//   });

//   it('fails to edit product', () => {
//     cy.get('[data-cy="updateProduct"]').first().click();
//     cy.get('[data-cy="updatedProducttitle"]').type('');
//     cy.get('[data-cy="updatedProductdescription"]').type('');
//     cy.get('[data-cy="updatedProductprice"]').type('');
//     cy.get('[data-cy="updatedProductcategory"]').type('');
//     cy.get('[data-cy="updatedProductstock"]').type('');
//     cy.get('[data-cy="closeChanges"]').click();
//   });

//   it('deletes a product', () => {
//     cy.get('[data-cy="deleteProduct"]').click();
//   });
// });

// describe('updates admin profile', () => {
//   it('updates admin profile', () => {
//     cy.visit('/adminprofile');

//     cy.get('[data-cy="userName"]').type('Jane Doe from FBI');
//     cy.get('[data-cy="email"]').type('superbikesgmail.com');
//     cy.get('[data-cy="phone_no"]').type('0734343434');

//     cy.get('[data-cy="updateProfile"]').click();
//   });

//   it('fails to updates admin profile', () => {
//     cy.visit('/adminprofile');

//     cy.get('[data-cy="userName"]').type('Jane Doe from FBI');
//     cy.get('[data-cy="email"]').type('superbikegmail.com');
//     cy.get('[data-cy="phone_no"]').type('0734343434');

//     cy.get('[data-cy="updateProfile"]').click();
//   });
// });

// describe('admin user functionality', () => {
//   beforeEach(() => {
//     cy.visit('/adminusers');
//   });
//   it('search for a user', () => {
//     const searchterm = 'p';
//     cy.get('[data-cy = "searchuser"]').type(searchterm);
//     cy.get('[data-cy = "user"]').should('have.length.greaterThan', 0);
//   });
//   it('deletes a user', () => {
//     cy.get('[data-cy="deleteUser"]').click();
//   });
// });

// describe('add product', () => {
//   beforeEach(() => {
//     cy.visit('/adminaddproduct');
//   });
//   it('admin adds a product', () => {
//     cy.get('[data-cy="image"]').type('');
//     cy.get('[data-cy="title"]').type('');
//     cy.get('[data-cy="price"]').type('');
//     cy.get('[data-cy="stock"]').type('');
//     cy.get('[data-cy="category"]').type('');
//     cy.get('[data-cy="description"]').type('');
//     cy.get('[data-cy="addNewProduct"]').click();
//   });

//   it('admin fails to adds a product', () => {
//     cy.get('[data-cy="image"]').type('');
//     cy.get('[data-cy="title"]').type('');
//     cy.get('[data-cy="price"]').type('');
//     cy.get('[data-cy="stock"]').type('');
//     cy.get('[data-cy="category"]').type('');
//     cy.get('[data-cy="description"]').type('');
//     cy.get('[data-cy="addNewProduct"]').click();
//   });
// });
