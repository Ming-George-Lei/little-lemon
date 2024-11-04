import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';

const menuList = [
    {
        id: 1,
        name: "Greek salad",
        price: "$12.99",
        image: greekSalad,
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style fetacheese, granished with crunchy garlic and rosemary croutons",
    },
    {
        id: 2,
        name: "Bruchetta",
        price: "$5.99",
        image: bruchetta,
        description: "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olived oil",
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: "$5.00",
        image: lemonDessert,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined",
    }
]

export default menuList;