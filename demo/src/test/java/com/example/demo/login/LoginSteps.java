package com.example.demo.login;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.And;

import java.net.MalformedURLException;
// import org.junit.*;

import org.junit.jupiter.api.extension.ExtendWith;
import static org.junit.jupiter.api.Assertions.assertEquals;

// import static org.junit.Assert.*;
// import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;

import io.github.bonigarcia.seljup.SeleniumJupiter;

@ExtendWith(SeleniumJupiter.class)
public class LoginSteps {

    private DriverFactory factory = new DriverFactory();

    private String baseUrl = "http://localhost:4001";

    @Given("I am on the Home page")
    public void start_on_page() throws MalformedURLException {
		    factory.getInstance().get(baseUrl);
        System.out.println(factory.getInstance().getTitle());
    }

    @When("I click on the {string} in the navbar")
    public void go_to_page(final String page) throws MalformedURLException {

      factory.getInstance().findElement(By.linkText(page)).click();

    }

    @When("I type {string} in the {string} bar")
    public void when_cred(final String text,final String inputname) throws MalformedURLException {

      factory.getInstance().findElement(By.name(inputname)).sendKeys(text);

    }

    

    @And("I type {string} in the {string} bar ")
    public void and_cred_(final String text,final String inputname) throws MalformedURLException {

      factory.getInstance().findElement(By.name(inputname)).sendKeys(text);

    }

    @And("I type {string} in the repeat password bar")
    public void rep_pass_cred(final String text) throws MalformedURLException {

      factory.getInstance().findElement(By.name("repPass")).sendKeys(text);

    }

    // @And("I type {string} in the mail bar")
    // public void email_cred(final String mail) {

		//   driver.findElement(By.name("email")).sendKeys(mail);

    // }

    // @And("I type {string} in the password bar")
    // public void password_cred(final String password) {

		//   driver.findElement(By.name("password")).sendKeys(password);

    // }
    
    // @And("I type {string} in the repeat password bar")
    // public void repPass_cred(final String repPass) {

		//   driver.findElement(By.name("repPass")).sendKeys(repPass);

    // }

    @And("I click on the submit button")
    public void sub_button() throws MalformedURLException {

      factory.getInstance().findElement(By.className("button")).click();

    }

    @Then("I expect to be on the {string} page")
    public void assert_page_url_end(final String route) throws MalformedURLException {

		  assertEquals(baseUrl+route, factory.getInstance().getCurrentUrl());


    }

    @Then("I expect to be on the page {string}")
    public void assert_page_url_end_quit(final String route) throws MalformedURLException {

		  assertEquals(baseUrl+route, factory.getInstance().getCurrentUrl());
      factory.getInstance().quit();


    }

    @And("there should be a {string} in the upper right of the screen")
    public void check_login_quit(final String name) throws MalformedURLException {

      assertEquals(name, factory.getInstance().findElement(By.xpath("//div[@id='root']/div/nav/div[3]")).getText());
      factory.getInstance().quit();
    }

    @And("there should be {string} in the upper right of the screen")
    public void check_login(final String name) throws MalformedURLException {

      assertEquals(name, factory.getInstance().findElement(By.xpath("//div[@id='root']/div/nav/div[3]")).getText());
    }





    @And("I click on the see Details of the first product")
    public void product_details() throws MalformedURLException {

      factory.getInstance().findElement(By.xpath("//div[@id='root']/div/div[2]/div[2]/div/div/div/div[2]/div[2]/a/button")).click();
    }


    @Then("the title of the book should be {string}")
    public void assert_book_title(final String name) throws MalformedURLException {

		  assertEquals(name, factory.getInstance().findElement(By.xpath("//div[@id='root']/div/main/div[2]/div/h1")).getText());
      factory.getInstance().quit();


    }


    @When("I click on the Add to Cart on the first product")
    public void click_add_cart() throws MalformedURLException {

      factory.getInstance().findElement(By.xpath("//div[@id='root']/div/div[2]/div[2]/div/div/div/div[2]/div[2]/button")).click();

    }

    @Then("my cart should have {int} item")
    public void assert_num_cart(final int n_item) throws MalformedURLException {

		  assertEquals(""+n_item, factory.getInstance().findElement(By.xpath("//div[@id='root']/div/nav/div[2]/a[2]/span")).getText());


    }

    @Then("i should have {int} item in my cart")
    public void assert_num_cart_quit(final int n_item) throws MalformedURLException {

		  assertEquals(""+n_item, factory.getInstance().findElement(By.xpath("//div[@id='root']/div/nav/div[2]/a[2]/span")).getText());
      factory.getInstance().quit();


    }

    @And("I click in the checkout button to order it")
    public void click_checkout() throws MalformedURLException {

      factory.getInstance().findElement(By.xpath("//div[@id='root']/div/div[2]/div/div[2]/div/button[2]")).click();
    }

    @When("I click on the Cart in the navbar")
    public void go_to_cart() throws MalformedURLException {

      factory.getInstance().findElement(By.xpath("//div[@id='root']/div/nav/div[2]/a[2]")).click();

    }



    // @Then("I expect to be on the {string} page")
    // public void assert_page_url_end(final String route) {

		//   assertEquals(baseUrl+route, driver.getCurrentUrl());
    //     driver.quit();

    // }






    // @When("i accept the delivery with the name {string}")
    // public void accept_job(final String delivery) {

		// driver.findElement(By.xpath("//*[contains(text(),'"+delivery+"')]/div/a/button")).click();

    // }

    // @Then("I expect to be on the page {string}")
    // public void assert_page_url(final String route) {

		// assertEquals(baseUrl+route, driver.getCurrentUrl());

    // }

    // @And("see the product name {string}")
    // public void assert_product_name_quit(final String name) {

    //     String product_name = driver.findElement(By.xpath("//div[@id='root']/div/main/div/div/h1")).getText();
		// assertEquals(name.equals(product_name), true);
    //     driver.quit();

    // }




    // @When("i click on details of the delivery with the name {string}")
    // public void details_product(final String delivery) {

    //     driver.findElement(By.xpath("//*[contains(text(),'"+delivery+"')]/div/a[2]/button")).click();

    // }




    // @When("I accompish the job")
    // public void job_done() {

		// driver.findElement(By.xpath("//div[@id='root']/div/main/div/button")).click();

    // }

    // @And("see the product named {string}")
    // public void assert_product_name(final String name) {

    //     String product_name = driver.findElement(By.xpath("//div[@id='root']/div/main/div/div/h1")).getText();
		// assertEquals(name.equals(product_name), true);

    // }




    // @When("I click on {string}")
    // public void click_on(final String name) {

		// driver.findElement(By.linkText(name)).click();

    // }




    // @When("i put the email {string}, the Birthdate {string}, the photo {string}, the password {string} and the repeat password {string}")
    // public void register_params(final String email,final String Birthdate,final String photo,final String password, final String repeat_password) {

		// driver.findElement(By.name("email")).sendKeys(email);
		// driver.findElement(By.name("birthdate")).sendKeys(Birthdate);
		// driver.findElement(By.name("photo")).sendKeys(photo);
		// driver.findElement(By.name("password")).sendKeys(password);
		// driver.findElement(By.name("repPass")).sendKeys(repeat_password);

    // }

    // @And("I click on the button Submit")
    // public void click_on_sub() {

		// driver.findElement(By.className("button")).click();

    // }



    // @Given("I am on the {string} page")
    // public void go_to_page(final String url) {
    //     System.out.println(baseUrl+url);
    //     System.out.println(driver.getCurrentUrl());
	// 	assertEquals(baseUrl+url, driver.getCurrentUrl());
    // }

}