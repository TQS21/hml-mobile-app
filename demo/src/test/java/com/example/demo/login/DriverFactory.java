package com.example.demo.login;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverFactory {
    
    private WebDriver webDriver;

    public DriverFactory() {}

    public WebDriver getInstance() throws MalformedURLException {
        if (this.webDriver == null) {
            System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
            options.addArguments("--headless");
            this.webDriver = new ChromeDriver(options);
            this.webDriver.manage().timeouts();
        }
        return webDriver;
    }
}
