import React from "react";
import { useEffect } from "react";
import { from } from "selenium-webdriver";

function WhatsAppSender() {
    useEffect(() => {
        // Inicializar el webdriver de Chrome
        const driver = new webdriver.Builder().forBrowser("chrome").build();

        // Abrir WhatsApp Web
        driver.get("https://web.whatsapp.com/");

        // Esperar a que el usuario escanee el código QR
        driver.wait(() => {
            return driver
                .findElement(
                    from.By.xpath('//*[@id="side"]/div[1]/div/label/input')
                )
                .isDisplayed();
        }, 10000);

        // Encontrar el elemento donde se escriben los mensajes
        const message_box = driver.findElement(
            from.By.xpath('//*[@id="main"]/footer/div[1]/div[2]/div/div[2]')
        );

        // Escribir el mensaje que queremos enviar
        message_box.sendKeys(
            "Hola, este es un mensaje automático enviado desde React"
        );

        // Encontrar el botón de enviar
        const send_button = driver.findElement(
            from.By.xpath('//*[@id="main"]/footer/div[1]/div[3]/button')
        );

        // Hacer clic en el botón de enviar
        send_button.click();

        // Cerrar el webdriver
        driver.quit();
    }, []);

    return <div>Mensaje enviado</div>;
}

export default WhatsAppSender;
