import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

 export const SAVE_DRINK = gql`
    mutation saveDrink($drink: DrinkInput) {
        saveDrink(drink: $drink) {
            _id
            username
            email
            savedDrinks {
                drinkID
                drinkName
                drinkImg
            }
        }
    }
 `;

 export const REMOVE_DRINK = gql`
    mutation removeDrink($drinkID: Int!) {
        removeDrink(drinkID: $drinkID) {
            _id
            username
            email
            savedDrinks {
                drinkID
                drinkName
                drinkImg
            }
        }
    }
 `;