(function() {
  'use strict';


   /**
   * @categoryName Firebase Push Notifications
   */
  this.cronapi.firebasePush = {};
  
  
  //Ref: https://github.com/arnesson/cordova-plugin-firebase
  /**
   * @type function
   * @name configFirebase
   * @description configFirebase
   */
  this.cronapi.firebasePush.setBadgeNumber = function(/** @type {ObjectType.INTEGER} @description number: Descrição do parâmetro */	number,  /** @type {ObjectType.STATEMENT} @description statementSuccess: Descrição do parâmetro */ statementSuccess ,  /** @type {ObjectType.STATEMENT} @description statementError: Descrição do parâmetro */ statementError) {
    window.FirebasePlugin.setBadgeNumber(number, statementSuccess,statementError);
  };
    //Ref: https://firebase.google.com/docs/web/setup
  /**
   * @type function
   * @name getBadgeNumber
   * @description getBadgeNumber
   * @returns {ObjectType.NUMBER}
   */
  this.cronapi.firebasePush.getBadgeNumber = function() {
   var badgeNumber ;
   window.FirebasePlugin.getBadgeNumber(function(badger){
     badgeNumber = badger;
   });
   return badgeNumber;
  };
  
  //Ref: https://github.com/arnesson/cordova-plugin-firebase
  /**
   * @type function
   * @name onNotificationOpen
   * @description configFirebase
   */
  this.cronapi.firebasePush.onNotificationOpen = function(/** @type {ObjectType.STATEMENTSENDER} @description statementSuccess: Descrição do parâmetro */ statementSuccess ,  /** @type {ObjectType.STATEMENTSENDER} @description statementError: Descrição do parâmetro */ statementError) {
    window.FirebasePlugin.onNotificationOpen(statementSuccess(notification),statementError(notification));
  };
  
  
  //Ref: https://github.com/arnesson/cordova-plugin-firebase
  /**
   * @type function
   * @name onTokenRefresh
   * @description configFirebase
   */
  this.cronapi.firebasePush.onTokenRefresh = function(/** @type {ObjectType.STATEMENT} @description statementSuccess: Descrição do parâmetro */ statementSuccess ,  /** @type {ObjectType.STATEMENT} @description statementError: Descrição do parâmetro */ statementError) {
    window.FirebasePlugin.onTokenRefresh(statementSuccess(token),statementError(error));
  };
  
  
  
  
}).bind(window)();