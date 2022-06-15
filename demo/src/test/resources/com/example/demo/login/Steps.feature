Feature: Order A Product


    # Scenario: Register a new user
    #     Given I am on the Home page
    #     When I click on the 'Register' in the navbar
    #     Then I expect to be on the 'register' page
    #     When I type 'test1' in the 'username' bar
    #     And I type 'test1@gmail.com' in the 'email' bar
    #     And I type '1234' in the 'password' bar
    #     And I type '1234' in the repeat password bar
    #     And I click on the submit button
    #     Then I expect to be on the page 'login' 

    # Scenario: Login
    #     Given I am on the Home page
    #     When I click on the 'Login' in the navbar
    #     And I type 'test1@gmail.com' in the 'email' bar
    #     And I type '1234' in the 'password' bar
    #     And I click on the submit button
    #     Then I expect to be on the 'products' page
    #     And there should be a 'Hello test1' in the upper right of the screen

    Scenario: Search a product
        Given I am on the Home page
        When I type 'Spy' in the "search" bar 
        And I click on the see Details of the product named 'Spy x Family'
        Then the title of the book should be 'Spy x Family Volume 1'

    # Scenario: Search a product
    #     When I navigate to 'http://localhost:3000'
    #     And I click on the Searchbar
    #     And I type 'Spy' in the Searchbar
    #     And I click on the see Details of the first product
    #     Then the title of the book should be 'Spy x Family Volume 1'

    # Scenario: Order a Product
    #     When I navigate to 'http://localhost:3000'
    #     And I click on the Add to Cart on the first product
    #     Then my cart should have 1 item
    #     And I should click in the checkout button to order it
