import * as cheerio from 'cheerio';
import request from 'request-promise';
import Coordinator from './classes/Coordinator.js';

( async () => {

    const urlTest = 'http://quotes.toscrape.com/';
    const urlCucei = 'http://www.cucei.udg.mx/es/directorio/Coordinaci%C3%B3n-de-Control-Escolar';
    const $ = await request({
        uri: urlCucei,
        transform: body => cheerio.load(body)
    }); 

    /*---------------------------------------*/
    //* Test */
    /*---------------------------------------*/
    // const webSiteTitle = $('title');
    // const webSiteHeader1 = $('h1');
    // console.log(webSiteTitle.html());
    // console.log(webSiteHeader1.text().trim());


    /*---------------------------------------*/
    //* CUCEI */
    /*---------------------------------------*/ 
    // const webSiteTitle = $('title');
    // console.log(webSiteTitle.html());

    // const coordinators = [];
    // const webSiteCoordinators = $('.item-list h3').each((i, element) => {
    //     const coordinator = $(element).text();
    //     coordinators.push(coordinator);
    // });
    // console.log(coordinators);

    const coordinators = [];
    $('.item-list').each((i, element) => {
        const boss = $(element).find('h3').text();
        const role = $(element).find('ul li .views-field-field-puesto-directorio').text().trim();
        const phoneNumber = $(element).find('ul li .views-field-field-conmutador').text().trim();

        const coordinator = new Coordinator(boss, role, phoneNumber);
        coordinators.push(coordinator);
        console.log(boss);
    });

    console.log(coordinators);

})()