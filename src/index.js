import * as cheerio from 'cheerio';
import request from 'request-promise';
import Coordinator from './classes/Coordinator.js';

( async () => {

    const urlTest = 'http://quotes.toscrape.com/';

    /*---------------------------------------*/
    //* Test */
    /*---------------------------------------*/
    // const webSiteTitle = $('title');
    // const webSiteHeader1 = $('h1');
    // console.log(webSiteTitle.html());
    // console.log(webSiteHeader1.text().trim());


    /*---------------------------------------*/
    //* COORDINATOR's CUCEI */
    /*---------------------------------------*/ 
    const urlCucei = 'http://www.cucei.udg.mx/es/directorio/Coordinaci%C3%B3n-de-Control-Escolar';
    const $ = await request({
        uri: urlCucei,
        transform: body => cheerio.load(body)
    }); 

    //* ---- EL chido ---- *//
    const coordinators = [];
    $('.item-list').each((i, element) => {
        const boss = $(element).find('h3').text();
        const role = $(element).find('ul li .views-field-field-puesto-directorio').text().trim();
        const name = $(element).find('ul li .views-field-title span a').text().trim();
        const phoneNumber = $(element).find('ul li .views-field-field-conmutador').text().trim();
        
        const coordinator = {boss, role, phoneNumber, name};
        coordinators.push(coordinator);
        console.log(boss);
    });
    
    console.log(coordinators);
    /*---------------------------------------*/
    //* NEW's CUCEI */
    /*---------------------------------------*/ 
    // const urlCucei = 'http://www.cucei.udg.mx/es/noticias';
    // const BASE_URL = 'http://www.cucei.udg.mx';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 
    // const noticias = [];
    // $('.item-list ul li').each((i, element) => {
    //     const title = $(element).find('h3 a').text().trim();
    //     const body = $(element).find('.views-field-field-cuerpo .field-content').text().trim().split('.')[0];
    //     const date = $(element).find('.views-field-created span').text().trim();
    //     const link = BASE_URL + $(element).find('h3 a').attr('href');
    //     noticias.push({ link, title, date, body});        
    // });
    // console.log(noticias[0]);

    /*---------------------------------------*/
    //* SOCIAL MEDIA CUCEI */
    /*---------------------------------------*/
    // const urlCucei = 'http://www.cucei.udg.mx/es/comunidad/redes-sociales';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 

    // const socialMedias = [];
    // const caja = $('.node-page .btn-red').each((i, element) => {
    //     const link = $(element).find('a').attr('href');
    //     socialMedias.push( {link} );
    // });
    // console.log(socialMedias);

    /*---------------------------------------*/
    //* TELEFONO */
    /*---------------------------------------*/
    // const urlCucei = 'http://www.cucei.udg.mx/';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 

    // const caja = $('.region-footer-second-inner .content strong').text().trim();
    // console.log(caja);

    /*---------------------------------------*/
    //* OFERTA ACADEMICA | LICENCIATURAS */
    /*---------------------------------------*/
    // const urlCucei = 'http://www.cucei.udg.mx/es/oferta-academica/licenciaturas';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 

    // const caja = $('td').next().html();
    // let counter=0;
    // const carreras = [];
    // const caja = $('td').each( (i, element) => {
    //     const lince = $(element).find('a').text().trim();
    //     if( i%2!=0) {
    //         counter++;
    //         carreras.push( {lince} );            
    //     }        
    // });
    // console.log(carreras, carreras.length);
    

    /*---------------------------------------*/
    //* POSGRADOS (MAESTRIAS & DOCTORADOS) */
    /*---------------------------------------*/
    // const urlCucei = 'http://www.cucei.udg.mx/es/oferta-academica/posgrados';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 

    // $('.list ul li').each( (i, element) => {
    //     const lince = $(element).text().trim();
    //     if( lince[0] === 'D' || lince[0] === 'd' ) {
    //         console.log({lince});
    //     }
    // });


    /*---------------------------------------*/
    //* POSGRADOS (MAESTRIAS & DOCTORADOS) */
    /*---------------------------------------*/
    // const urlCucei = 'http://www.cucei.udg.mx/es/oferta-academica/educacion-continua';
    // const $ = await request({
    //     uri: urlCucei,
    //     transform: body => cheerio.load(body)
    // }); 

    // let finalText='';
    // const caja = $('.field-items').each( (i, element) => {
    //     const diplo = $(element).find('.field-item').text().trim();
    //     finalText +=diplo;
    // });
    // const textArr = finalText.split('\n'); 
    // console.log( textArr );
    
})()