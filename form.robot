*** Settings ***
Library         SeleniumLibrary



*** Variables ***


${input_username}          id:username
${input_password}          id:password
${button_submitLogin}      id:submitLogin
${input_email_ict_rd}      id:email_ict_rd


*** Keywords ***
Abrir navegador e acessar o site
    Open Browser    https://victumservicos178223.fluig.cloudtotvs.com.br:2200     chrome

Preencher campos
     Input Text   ${input_username}     admin
     Sleep        2s
     Input Text   ${input_password}    cilw39mWYXlCXYpt

Clicar em submit    
    Click Element   ${button_submitLogin} 

Passar o mouse no menu Processos
    Mouse Over    css:.menu-font-icon.flaticon.flaticon-process
    Sleep         2s
    
Clicar no menu processos
    Click Element    xpath=//span[@title="Processos"]

Passar o mouse no menu iniciar solicitações
    Mouse over     xpath=//*[@id="responsiveMenu_1893"]/div/aside/div/nav/ul/li[3]/a/span

Clicar no menu iniciar solicitações
    Click Element    xpath=//span[@title="Iniciar Solicitações"]

Clicar em RD Técnico
    Click Element    xpath=//*[@id="ui-id-3"]/li[6]/span/span[3]

Clicar em cadastro do RD Técnico
    Click Element      xpath=//*[@id="ui-id-3"]/li[6]/ul/li/span/span[3]/table/tbody/tr/td[1]

clicar em um botão dentro do iframe
    Wait Until Element Is Visible    id=workflowView-cardViewer
    Select Frame    id=workflowView-cardViewer
    Wait Until Element Is Visible    xpath=//*[@id="empresa"]
    Click Element                    xpath=//*[@id="empresa"]
    Click Element               xpath=//*[@id="empresa"]/option[4]


    Wait Until Element Is Visible    xpath=//*[@id="ict_rdtecnico"]
    Click Element                    xpath=//*[@id="ict_rdtecnico"]
    Click Element               xpath=//*[@id="ict_rdtecnico"]/option[3]

    Wait Until Element Is Visible    xpath=//*[@id="projeto_rdtecnico"]
    Click Element                    xpath=//*[@id="projeto_rdtecnico"]
    Click Element               xpath=//*[@id="projeto_rdtecnico"]/option[2]

    Wait Until Element Is Visible    xpath=//*[@id="projeto_ano_base"]
    Click Element                    xpath=//*[@id="projeto_ano_base"]
    Click Element               xpath=//*[@id="projeto_ano_base"]/option[2]

    Wait Until Element Is Visible    xpath=//*[@id="email_ict_rd"]
    Click Element                    xpath=//*[@id="email_ict_rd"]
    Input Text      ${input_email_ict_rd}    ana.gloria@victumservices.com

*** Test Cases ***
Login com sucesso
    Abrir navegador e acessar o site
    Maximize Browser Window
    Preencher campos
    Clicar em submit
    Passar o mouse no menu Processos
    Clicar no menu processos
    Passar o mouse no menu iniciar solicitações
    Clicar no menu iniciar solicitações
    Clicar em RD Técnico
    Clicar em cadastro do RD Técnico
    clicar em um botão dentro do iframe
