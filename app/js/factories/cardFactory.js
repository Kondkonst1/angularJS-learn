angular.module('app').factory('cardFactory', function () {
    let service = {};

    let cards = [
        {
        id: 1,
        description: "text",
        list_id: 1
    }
];

    service.getCards = (list) => {
    return _.filter(cards, {list_id: list.id});
    }

    service.addCard = ( list, description) => {
        cards.push(
            {
                id: _.uniqueId('card_'),
                description: description,
                list_id: list.id
            }
        );
    }

    service.deleteCard = (card) => {
        return _.pull(cards, card);
    }

    service.updateCard = (updatingCard) => {
        let card = _.findWhere(cards, {id: updatingCard.id});
        card.description = updatingCard.description;
    } 

    return service;
});
