angular.module("app").controller("cardCtrl", function (cardFactory) {
  this.deleteCard = function (card) {
    cardFactory.deleteCard(card);
  };
  this.isEditing = false;
  this.editingCard = null;

  this.editCard = (card) => {
    this.isEditing = true;
    this.editingCard = angular.copy(card);
 
  };
  this.updateCard = () => {
    cardFactory.updateCard(this.editingCard);
    this.editingCard = null;
    this.isEditing = false;
  };
});
