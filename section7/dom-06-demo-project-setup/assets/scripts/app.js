// const addButton = document.querySelector('header button');
// const popUp = document.getElementById('add-modal');
const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
};
function deleteMovie(movieId) {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
}

function closeMovieDeletionModal() {
    backdropVisible();
    deleteMovieModal.classList.remove("visible");
}

function startDeleteMovieHandler(movieId) {
    deleteMovieModal.classList.add("visible");
    backdropVisible();
    const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
    confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

    cancelDeletionBtn.removeEventListener("click", closeMovieDeletionModal);

    cancelDeletionBtn.addEventListener("click", closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener(
        "click",
        deleteMovie.bind(null, movieId)
    );

    // deleteMovie(movieId);
}

function renderNewMovieElement(id, title, imageUrl, rating) {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener(
        "click",
        startDeleteMovieHandler.bind(null, id)
    );
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
}

function showMovieModal() {
    addMovieModal.classList.add("visible");
    backdropVisible();
}

const backdropElement = document.getElementById("backdrop");

const backdropVisible = () => {
    backdropElement.classList.toggle("visible");
};

function closeMovieModal() {
    addMovieModal.classList.remove("visible");
}

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = "";
    }
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    backdropVisible();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("Please enter valid values (rating between 1 and 5)");
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    backdropVisible();
    clearMovieInput();
    renderNewMovieElement(
        newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating
    );
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdropElement.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
