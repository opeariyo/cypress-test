class LoginPage {

    // Selector for login page

    usernameField = '[data-test="username"]'
    passwordField = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    standardUser = "standard_user"
    lockedUser = "locked_user"
    password = "secret_sauce"
    bikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    boltTshirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    fleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    oneSie = '[data-test="add-to-cart-sauce-labs-onesie"]'
    redTshirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    backPack = "[data-test='add-to-cart-sauce-labs-backpack']"
    shoppingCart = "[data-test='shopping-cart-link']"
    checkOut = "[data-test='checkout']"
    firstNamefield = "[data-test='firstName']"
    lastNamefield = "[data-test='lastName']"
    zipCodefield = "[data-test='postalCode']"
    firstName = "Ope"
    lastName = "Ariyo"
    zipCode = "01234"
    continue = "[data-test='continue']"
    finish = "[data-test='finish']"
    backToproduct = "[data-test='back-to-products']"
    selectButton = "#react-burger-menu-btn"
    logOut = "[data-test='logout-sidebar-link']"




    setUsername() {
        cy.get(this.usernameField).type(this.standardUser)
    }

    setLockeduser() {
        cy.get(this.usernameField).type(this.lockedUser)
    }
    setPassword() {
        cy.get(this.passwordField).type(this.password)
    }

    setLoginbutton() {
        cy.get(this.loginButton).click()
    }

    setShoppingitem() {
        cy.get(this.boltTshirt).should('be.visible').click()
        cy.get(this.bikeLight).should('be.visible').click()
        cy.get(this.fleeceJacket).should('be.visible').click()
        cy.get(this.oneSie).should('be.visible').click()
        cy.get(this.redTshirt).should('be.visible').click()
        cy.get(this.backPack).should('be.visible').click()

    }

    setCheckoutshopping() {
        cy.get(this.shoppingCart).should('be.visible').click()
        cy.get(this.checkOut).should('be.visible').click()
    }

    setCheckoutform() {
        cy.get(this.firstNamefield).should('be.visible').type(this.firstName)
        cy.get(this.lastNamefield).should('be.visible').type(this.lastName)
        cy.get(this.zipCodefield).should('be.visible').type(this.zipCode)
        cy.get(this.continue).click()
        cy.get(this.finish).click()
    }

    setLogout() {
        cy.get(this.selectButton).click()
        cy.get(this.logOut).click()
    }


}

export default LoginPage