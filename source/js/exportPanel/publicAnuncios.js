//Importar jquery
import $ from 'jquery';
//Alertas
import {alerts} from './../exports/alerts';
//Ajax
import {consultAjax, loadingAnimation} from './../exports/ajaxPromise';
//VerifyVar
import {verifyVar} from './../exports/funciones/verifyVar';

/* ************************ */
/* Funcion de publicación de noticia.
/* ************************ */
const btnNoticias = document.getElementById('an-ok');
const loadingNoticias = document.getElementById('an-loading');
btnNoticias.addEventListener('click',async e=>{
  e.preventDefault();

  //Variables
  const title = document.getElementById('an-title').value;
  const content = document.getElementById('an-textarea').value;
  if (verifyVar(title,content)) {
    if (contar_caracteres(textarea.value) <= 1200) {
      //Animacion
      loadingAnimation($, btnNoticias, loadingNoticias);

      //Datos
      const datos = new FormData();
      datos.append('title', title);
      datos.append('content', content.replace (/\r?\n/g,"</br>"));

      //Consulta
      let res = await consultAjax('assets/php/consults/ajax_noticia.php', datos);

      if (res !== 'no_connect_file_php') {
        //Animación
        loadingAnimation($, btnNoticias, loadingNoticias, 'Inverse');

        //Variables
        let message='';
        let color='';
        if (res.status === 'ok') {
          message='Noticia publicada!';
          color='success';
        }else {
          if (res.message === 'token') {
            message='<strong>Error:</strong> Ex000001';
            color='danger';
          }else if (res.message === 'internal_error') {
            message = '<strong>Error:</strong> Ex000002';
            color = 'danger';
          }else if (res.message === 'empty') {
            message = 'Debe rellenar todos los campos!';
            color = 'warning';
          }else if (res.message === 'no_load_img') {
            message = 'No se ha podido cargar una imagen!';
            color = 'danger';
          }else if (res.message === 'no_type') {
            message = 'Solo se admiten: .png, .jpg/.jpeg, .gif!';
            color = 'warning';
          }else if (res.message === 'no_upload') {
            message = 'No se ha podido cargar al servidor una imagen!';
            color = 'danger';
          }else if (res.message === 'consultError') {
            message = '<strong>Error:</strong> Ex000002';
            color = 'danger';
          }else if (res.message === 'errorInsert') {
            message = 'No se ha podido publicar la noticia!';
            color = 'danger';
          }else {
            message = '<strong>Error:</strong> Ex000003';
            color = 'danger';
          }
        }
        alerts(message, color);
      }else {
        //Animación
        loadingAnimation($, btnNoticias, loadingNoticias, 'Inverse');
        //No connect
        alerts("Error al conectar con el servidor!", "danger");
      }
    } else {
      alerts("Hay más de 1200 carácteres!", "warning");
    }
  }else {
    alerts("Debe rellenar todos los campos!", "warning");
  }
});

/* ************************ */
/* TEXTAREA
/* ************************ */
const textarea = document.getElementById('an-textarea');
textarea.addEventListener('keyup', e=>{
  const actual = contar_caracteres(textarea.value);
  document.getElementById('an-statusArea').innerText = `${actual}/1200 caracteres.`;
});

function contar_caracteres(texto){
	//Reemplazamos los saltos de linea por espacios
	texto = texto.replace (/\r?\n/g," ");
	//Reemplazamos los espacios seguidos por uno solo
	texto = texto.replace (/[ ]+/g," ");
	//Quitarmos los espacios del principio y del final
	texto = texto.replace (/^ /,"");
  texto = texto.replace (/ $/,"");
  texto = texto.replace (" ","");
  
  return texto.length;
}

function contar_palabras(texto){
	//Reemplazamos los saltos de linea por espacios
	texto = texto.replace (/\r?\n/g," ");
	//Reemplazamos los espacios seguidos por uno solo
	texto = texto.replace (/[ ]+/g," ");
	//Quitarmos los espacios del principio y del final
	texto = texto.replace (/^ /,"");
	texto = texto.replace (/ $/,"");
	//Troceamos el texto por los espacios
	let textoTroceado = texto.split (" ");
	//Contamos todos los trozos de cadenas que existen
	let numeroPalabras = textoTroceado.length;
	//Mostramos el número de palabras
	return numeroPalabras;
}