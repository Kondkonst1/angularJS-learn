angular.module('app').controller('listCtrl',function(listFactory, cardFactory){

this.removelist = function (list) {
   listFactory.removeList(list);
}
this.getCards = function (list){
    return cardFactory.getCards(list);
}
this.addCard = function(list){
    cardFactory.addCard(list, this.description);
    this.description='';
}

});