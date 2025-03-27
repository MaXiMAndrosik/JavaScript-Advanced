const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const ReviewLengthError = class extends Error {
    constructor(message) {
        super(message);
        this.name = "ReviewLengthError";
    }
};

const reviewsList = document.querySelector('#reviewsContainer');

function createProductsReviews(product = 'product', reviews = 'reviews') {

    const productItem = document.createElement('li');
    productItem.classList.add('list-group-item');
    reviewsList.appendChild(productItem);

    const productTitle = document.createElement('h3');
    productTitle.textContent = product;
    productItem.appendChild(productTitle);

    reviews.forEach(review => {
        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;
        productItem.appendChild(reviewText);
    });

    const inputReview = document.createElement('textarea');
    inputReview.setAttribute('placeholder', 'Вы можете оставить здесь свой отзыв об этом товаре');
    inputReview.setAttribute('rows', '3');
    inputReview.setAttribute('cols', '60');
    productItem.appendChild(inputReview);
    const br = document.createElement('br');
    productItem.appendChild(br);

    const addReviewButton = document.createElement('button');
    addReviewButton.textContent = "Добавить отзыв";
    productItem.appendChild(addReviewButton);

    addReviewButton.addEventListener('click', () => {
        const reviewText = inputReview.value;
        try {
            addReview(reviewText, inputReview.parentNode);
        } catch (error) {
            if (error instanceof ReviewLengthError) {
                alert(error.message);
            }
        }
    });
}

initialData.forEach(data => {
    createProductsReviews(data.product, data.reviews);
});

function addReview(text, parentTag) {
    if (text.length < 50 || text.length > 500) {
        throw new ReviewLengthError("Длина отзыва должна быть от 50 до 500 символов.");
    }

    for (const element of parentTag.childNodes) {
        if (element.tagName == 'BR' || element.tagName == 'BUTTON' || element.tagName == 'TEXTAREA') {
            parentTag.removeChild(element);
        }
    }

    const reviewText = document.createElement('p');
    reviewText.textContent = text;
    parentTag.appendChild(reviewText);
}


