*** Settings ***
Documentation        Cénarios de testes do cadastro de usuários

Library         Browser


*** Variables ***
${variaveis}           Testes
${url}                https://robotframework.org/





*** Keywords ***
Abrir o robotframework
    Open Browser        https://robotframework.org/
Fechar o robotframework
    Close Browser       https://robotframework.org/





*** Test Cases ***
Cenário 1: Teste de Abrir navegador
       Open Browser     https://robotframework.org/
Cenário 2: fechar o navegador
       Close Browser    https://robotframework.org/