Feature: Order A Product


    Scenario: Register a new user
        Given I am on the Home page
        When I click on the 'Register' in the navbar
        Then I expect to be on the 'register' page
        When I type 'test6' in the 'username' bar
        And I type 'test6@gmail.com' in the 'email' bar
        And I type '1234' in the 'password' bar
        And I type '1234' in the repeat password bar
        And I click on the submit button
        Then I expect to be on the 'products' page
        And there should be a 'Hello test6' in the upper right of the screen

    Scenario: Login
        Given I am on the Home page
        When I click on the 'Login' in the navbar
        And I type 'test1@gmail.com' in the 'email' bar
        And I type '1234' in the 'password' bar
        And I click on the submit button
        Then I expect to be on the 'products' page
        And there should be a 'Hello test1' in the upper right of the screen

    Scenario: Search a product
        Given I am on the Home page
        When I type 'Spy' in the "search" bar 
        And I click on the see Details of the first product 
        Then the title of the book should be 'Spy X Family Volume 1'

    Scenario: Order a Product
        Given I am on the Home page
        When I click on the 'Login' in the navbar
        And I type 'test1@gmail.com' in the 'email' bar
        And I type '1234' in the 'password' bar
        And I click on the submit button
        Then I expect to be on the 'products' page
        And there should be 'Hello test1' in the upper right of the screen
        When I click on the Add to Cart on the first product
        Then my cart should have 1 item
        When I click on the Cart in the navbar
        And I click in the checkout button to order it
        Then i should have 0 item in my cart
