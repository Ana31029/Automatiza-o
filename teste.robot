*** Settings ***

Library     SeleniumLibrary




*** Test Cases ***
Acessar uma url 
    Open Browser    url=https://www.amazon.com.br    browser=chrome
    Maximize Browser Window




