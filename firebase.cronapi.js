(function() {
  'use strict';


   /**
   * @categoryName Firebase
   */
  this.cronapi.firebase = {};
  
  
  //Ref: https://firebase.google.com/docs/web/setup
  /**
   * @type function
   * @name configFirebase
   * @description configFirebase
   */
  this.cronapi.firebase.configFirebase = function(/** @type {ObjectType.STRING} @description apiKey: Descrição do parâmetro */	apiKey, /** @type {ObjectType.STRING} @description authDomain: Descrição do parâmetro */	authDomain, /** @type {ObjectType.STRING} @description databaseURL: Descrição do parâmetro */	databaseURL, /** @type {ObjectType.STRING} @description projectId: Descrição do parâmetro */	projectId, /** @type {ObjectType.STRING} @description storageBucket: Descrição do parâmetro */	storageBucket, /** @type {ObjectType.STRING} @description messagingSenderId: Descrição do parâmetro */	messagingSenderId, /** @type {ObjectType.STRING} @description provider: Descrição do parâmetro */	provider, /** @type {ObjectType.STRING} @description uid: Descrição do parâmetro */	uid) {
		var config = {
			apiKey : apiKey,
			authDomain : authDomain,
			databaseURL : databaseURL,
			projectId : projectId,
			storageBucket : storageBucket,
			messagingSenderId : messagingSenderId,
			provider : provider,
			uid : uid
		};
		window.firebase.initializeApp(config);
  };
  
  
  
  //Ref: https://firebase.google.com/docs/reference/js/firebase.database
  /**
   * @type function
   * @name getDatabase
   * @description getDatabase
   * @returns {ObjectType.OBJECT}
   */
  this.cronapi.firebase.getDatabase = function(/** @type {ObjectType.STRING} @description optionalAppName: Descrição do parâmetro */	optionalAppName) {
    if(optionalAppName)		return window.firebase.database(optionalAppName);
		return window.firebase.database();
  };
  
  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name addData
   * @description addData
   */
  this.cronapi.firebase.addData = function(/** @type {ObjectType.OBJECT} @description database: Descrição do parâmetro */	database , /** @type {ObjectType.STRING} @description path: Descrição do parâmetro */ path , /** @type {ObjectType.OBJECT} @description data: Descrição do parâmetro */ data) {
		debugger;
		database.ref(path).set(data);
  };
  
  
    //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name addOnEvent
   * @description addOnEvent
   */
  this.cronapi.firebase.addOnEvent = function(/** @type {ObjectType.OBJECT} @description database: Descrição do parâmetro */	database , /** @type {ObjectType.STRING} @description path: Descrição do parâmetro */ path , /** @type {ObjectType.STATEMENTSENDER} @description statement: Descrição do parâmetro */ statement) {
		database.ref(path).on('value',function(snapshot){
		  statement(snapshot.val());
		})
  };
  
  
  //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name addOnEvent
   * @description addOnEvent
   */
  this.cronapi.firebase.addOnceEvent = function(/** @type {ObjectType.OBJECT} @description database: Descrição do parâmetro */	database , /** @type {ObjectType.STRING} @description path: Descrição do parâmetro */ path , /** @type {ObjectType.STATEMENTSENDER} @description statement: Descrição do parâmetro */ statement) {
		database.ref(path).once('value').then(function(snapshot){
		  statement(snapshot.val());
		});
  };
  
    //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name updateData
   * @description updateData
   */
  this.cronapi.firebase.updateData = function(/** @type {ObjectType.OBJECT} @description database: Descrição do parâmetro */	database , /** @type {ObjectType.STRING} @description path: Descrição do parâmetro */ path , /** @type {ObjectType.OBJECT} @description data: Descrição do parâmetro */ data) {
		database.ref(path).update(data);
  };
  
  
      //Ref: https://firebase.google.com/docs/database/web/read-and-write
  /**
   * @type function
   * @name pushData
   * @description pushData
   */
  this.cronapi.firebase.pushData = function(/** @type {ObjectType.OBJECT} @description database: Descrição do parâmetro */	database , /** @type {ObjectType.STRING} @description path: Descrição do parâmetro */ path , /** @type {ObjectType.OBJECT} @description data: Descrição do parâmetro */ data) {
		database.ref(path +'/'+ database.ref(path).push().key ).set(data);
  };
  
  
  
}).bind(window)();