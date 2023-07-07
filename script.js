// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-hTMtDagr6om6QF0_g-ZFrbLJvj-SZVk",
  authDomain: "coran-fb061.firebaseapp.com",
  projectId: "coran-fb061",
  storageBucket: "coran-fb061.appspot.com",
  messagingSenderId: "937982128038",
  appId: "1:937982128038:web:e4fe9be2ca15cf5e996967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var form = document.getElementById("seu-formulario");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura os valores dos campos
  var campo1 = document.getElementById("seu-campo1").value;
  var campo2 = document.getElementById("seu-campo2").value;

  // Envia os valores para o Firebase
  var db = firebase.firestore();
  db.collection("sua-colecao").add({
    campo1: campo1,
    campo2: campo2
  })
  .then(function(docRef) {
    console.log("Documento adicionado com ID: ", docRef.id);
    // Realize qualquer ação adicional necessária após adicionar ao banco de dados
  })
  .catch(function(error) {
    console.error("Erro ao adicionar documento: ", error);
  });
});
