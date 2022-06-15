package com.example.tests;


import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
// import org.junit.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

// import static org.junit.Assert.*;
// import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.seljup.SeleniumJupiter;

@ExtendWith(SeleniumJupiter.class)
public class Login {
	private WebDriver driver;
	private String baseUrl;
	private StringBuffer verificationErrors = new StringBuffer();

	@BeforeEach
	public void setUp() throws Exception {
    System.setProperty("webdriver.gecko.driver", "/usr/local/bin/geckodriver");

    driver = new FirefoxDriver();
    baseUrl = "http://localhost:3000/";
    driver.manage().timeouts();//.implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Test
	public void testUntitledTestCase() throws Exception {
		driver.get(baseUrl);

		driver.findElement(By.name("email")).click();
		driver.findElement(By.name("email")).clear();
		driver.findElement(By.name("email")).sendKeys("costav689@gmail.com");

		driver.findElement(By.name("password")).click();
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys("asdfqwer");

		// driver.findElement(By.id("inputName")).sendKeys("vicente costa");
		// driver.click("name=email");
		// driver.type("name=email", "costav689@gmail.com");
		// driver.click("name=password");
		// driver.type("name=password", "asdfqwer");

		driver.findElement(By.xpath("//body")).click();
		driver.findElement(By.xpath("//div[@id='root']/div/form/div/div/div[3]/button")).click();

		assertEquals(baseUrl+"deliveries", driver.getCurrentUrl());
		// driver.click("xpath=//body");
		// driver.click("xpath=//div[@id='root']/div/form/div/div/div[3]/button");
	}

  @AfterEach
  public void tearDown() throws Exception {
    driver.quit();
  }
}
