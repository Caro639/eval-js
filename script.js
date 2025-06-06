let formCitation = document.querySelector("#quote-form");

// formulaire pour ajouter une citation
formCitation.addEventListener("submit", function (event) {
  event.preventDefault();

  // recuperer les valeurs
  let citation = document.querySelector("#quote-text").value;
  let author = document.querySelector("#quote-author").value;
  let typeCitation = document.querySelector("#quote-type").value;

  console.log(citation, author, typeCitation);

  let liste = document.querySelector("#quote-list");

  if (citation !== "" && author !== "") {
    liste.insertAdjacentHTML(
      "beforeend",
      `<li>"${citation}" - <strong>${author}</strong></li>
        <button type="button" class="btn btn-danger" id="supprimer">Supprimer</button>`
    );

    // créer un objet pour stocker les citations
    let citationsArray = {
      author: author,
      citation: citation,
    };

    // tableau json
    let jsonCitationsArray = JSON.stringify(citationsArray);

    console.log(jsonCitationsArray);

    localStorage.setItem("citationsArray", jsonCitationsArray);

    // tableau localstorage
    let citationsArrayFromStorage =
      JSON.parse(localStorage.getItem("citationsArrayFromStorage")) || [];
    citationsArrayFromStorage.push(citationsArray);

    localStorage.setItem(
      "citationsArrayFromStorage",
      JSON.stringify(citationsArrayFromStorage)
    );
    console.log(citationsArrayFromStorage);
  } else {
    alert("Veuillez remplir tous les champs.");
  }

  // supprimer la citation click button de suppression
  let suppression = document.querySelector("#supprimer");

  suppression.addEventListener("click", function () {
    console.log(suppression);
    liste.remove(citation, author);
    alert("Citation supprimée !");
  });
});

// afficher le nombre de citations contenu dans le tableau
let nombresCitations = localStorage.getItem("citationsArrayFromStorage");
nombresCitations = JSON.parse(nombresCitations) || [];
nombresCitations = nombresCitations.length;
console.log(nombresCitations);

let numberOfCitations = document.querySelector("#numberCitation");

numberOfCitations.insertAdjacentHTML(
  "beforeend",
  `<p>Nombres de citations enregistrés : ${nombresCitations}</p>`
);

// citation du jour
let citationDuJour = document.querySelector("#daily-quote");

let citations = localStorage.getItem("citationsArrayFromStorage");
citations = JSON.parse(citations) || [];
console.log(citations);
