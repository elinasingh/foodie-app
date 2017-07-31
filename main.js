			// foodieApp is the name of the app here
			//ngRoute is not a directive it is a module
		 var foodieApp = angular.module('foodieApp',['ngRoute']);
         //console.log(foodieApp);


       // configure krna
			 foodieApp.config(function ($routeProvider) { //pass function as parameter
				$routeProvider
				.when('/',{
					templateUrl: 'pages/login.html',
					controller: 'loginController'
				})
				.when('/home',{
					templateUrl: 'pages/main.html',
					controller: 'mainController'
				})
				.when('/restaurant/:id', {
		      templateUrl: 'pages/restaurant.html',
		      controller: 'restaurantController'
	       })
				 .when('/fav', {
						templateUrl: 'pages/fav.html',
						controller: 'favController'
					})
			})


  //iss function ke andar jo b aayega bhi kaam hoga controller ka

					 //restaurantController
					 foodieApp.controller('restaurantController',function($scope,$routeParams,$http,$location) {
						 $scope.ingredients = [];
							console.log($routeParams.id);
							$scope.restaurantId = $routeParams.id;
							var restaurants = [{ //restaurant 1
								name: 'Ricos',
								address: '2526, 1st Floor, Hudson Lane, Kingsway Camp, Delhi',
								location: 'Delhi University-GTB Nagar',
								category: 'CAFE',
								vote: '3.6',
								cuisines: 'Cafe, Mexican, American, Italian, Lebanese, Continental',
								cost: '900',
								id:  1,
								hours: '11 AM to 11 PM (Mon-Sun)',
								bestDish: {
										name: 'Corn Pizza',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
								votes:'180',
								reviews:'200',
								order:'90mins Rs.20',
								image: 'https://tinyurl.com/ybsnhfna'
							},
							{    //restaurant 2
								name: 'Hakuna Matata',
								address: '1231/35/2,7th Phase, Opposite Brigade, Bangalore',
								location: 'JP Nagar',
								category: 'North Indian, Asian, Seafood',
								vote: '4.1',
								cuisines: 'Modern Chinese',
								cost: '1200',
								id:  2,
								hours: '12:30 AM to 11:30 PM (Mon-Sun)',
								votes:'200',
								reviews:'300',
								order:'60mins Rs.80',
								image: 'https://tinyurl.com/y9tebdor'
							},
							{   //restaurant 3
								name: 'Love & Cheesecake',
								address: 'Eden 2, Central Ave, Hiranandani Gardens, Powai, Mumbai',
								location: 'Powai',
								category: 'DESSERT PARLOR',
								vote: '4.5',
								cuisines: 'Desserts, Bakery',
								cost: '800',
								id:  3,
								hours: '9 AM to 12 Midnight (Mon-Sun)',
								votes:'190',
								reviews:'250',
								order:'50mins Rs.70',
								discount:'Get 15% off on all home-delivery orders. Valid only when you order online on Zomato.',
								image: 'https://tinyurl.com/y7hwh5mr'
							},
							{   //restaurant 4
								name: 'Tribute',
								address: '89-B, Monica Complex, Ambamata Road, Udaipur',
								location: 'Fateh Sagar',
								category: ' Fine Dining',
								vote: '4.2',
								cuisines: 'North Indian, Rajasthani, Continental',
								cost: '1500',
								id:  4,
								hours: '11:30 AM to 11 PM (Mon-Sun)',
								votes:'150',
								reviews:'280',
								order:  '20mins Rs.100',
								image: 'https://tinyurl.com/y9daexb6'
							},
							{   //restaurant 5
								name: 'Farzi Cafe',
								address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
								location: 'Connaught Place',
								category: 'Casual Dining, Bar',
								vote: '4.2',
								cuisines: 'Modern Indian',
								cost: '2200',
								id:  5,
								hours: '12 Noon to 1 AM (Mon-Sun)',
								votes:'280',
								reviews:'400',
								order:'70mins Rs.30',
								image: 'https://tinyurl.com/y9urntqf'
							},
							{   //restaurant 6
								name: 'Jalpaan Restraunt',
								address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
								location: 'RS Puram',
								category: 'Casual Dining',
								vote: '4.0',
								cuisines: 'North Indian, Italian, Indian',
								cost: '1200',
								id:  6,
								hours: '12 Noon to 10:30 PM (Mon-Sun)',
								votes:'120',
								reviews:'300',
								order:'90mins Rs.80',
								image: 'https://tinyurl.com/ycp69uuf'
							},

							{   //restaurant 7
								name: 'The French Door',
								address: '102, West Bashyakaralu Road, RS Puram, Coimbatore',
								location: 'RS Puram',
								category: 'Casual Dining',
								vote: '4.8',
								cuisines: 'Continental, Cafe, French, North Indian, European',
								cost: '1800',
								id:  7,
								hours: '11 AM to 11 PM (Mon-Sun)',
								votes:'180',
								reviews:'600',
								order:'70mins Rs.50',
								image: 'https://tinyurl.com/yb5fn87q'
							},
							{  //restaurant 8
								name: 'Bikaner Sweets',
								address: 'Near Devkamal Hospital, Ratu Road, Ratu, Ranch',
								location: 'Ratu',
								category: 'Quick Bites, Dessert Parlor',
								vote: '4.2',
								cuisines: 'Desserts, Street Food',
								cost: '200',
								id:  8,
								hours: ' 9 AM to 9:30 PM (Mon-Sun)',
								votes:'170',
								reviews:'500',
								order:'50mins Rs.80',
								image: 'https://tinyurl.com/yccjxy2h'
							}]
	            $scope.restaurant = restaurants[$routeParams.id - 1];
              console.log($scope.restaurant.name);
							$scope.getIngredients = function(url) {
							// Do something

              //write ajax call here
							var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'  //json object
						     $http({
						         'method': 'POST',                        //we are passing the type of http eg. GET POST etc
						         'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',   //url of the api
						         'headers': {                                                        // extra info. to the server
						             'Authorization': 'Key fe486afe04fe4bf9a1fec63b55d9f8cb',         // yaha api key likhi jati h
						             'Content-Type': 'application/json'                                // tells the browser which format are we send the data
						         },
						         'data': data,                                                    //we put the actual data and we are sending inside the data option
						        //  success: function (response) {                                    //runs the request successfully
										// 	 // console.log(response.outputs[0].data.concepts);
						        //       var ingredients = response.outputs[0].data.concepts;         //storing the ingredient array got from server
						        //      var list = '';                                                     //new list with empty string value
						        //      for (var i =0;i < ingredients.length;i++) {
						        //          list += '<div class="ingredient">' + ingredients[i].name + '</div>'      //we are adding each ingredients name to the list variable string
						        //      }
										// 		 console.log(list)
						        //     // $('.ingredients').html(list);
						        //  },
						        //  error: function (xhr) {                                                          //not successfully completed
						        //      console.log(xhr);
						        //  }
						     })	.then(function success(response) {
									       var ingredients = response.data.outputs[0].data.concepts;         //storing the ingredient array got from server
                         var list ='';
												 for (var i =0;i < ingredients.length;i++) {
														$scope.ingredients.push(ingredients[i].name);
														}
												 //console.log(list);
													  }, function (xhr) {
													      console.log(xhr);
													  })

							}

										$scope.goToFav = function() {
												$location.url('fav')
												console.log($location.url);
											}
           })

  //iss function ke andar jo b aayega bhi kaam hoga favouritecontroller ka

foodieApp.controller('favController',function($scope,$location,$http) {


	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{   //dishes for favorite food that you like or not
							id: 1,
							bestDish: {
										name: 'Bean Salad',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
							image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'http://www.dominos.co.in/files/items/dish2-chicken-golden-delight-copy-1346593770-771x299.jpg'
								},

            image: 'http://www.dominos.co.in/files/items/dish2-chicken-golden-delight-copy-1346593770-771x299.jpg'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.wish-bone.com/wp-content/uploads/2013/11/ClassicItalianPastaSalad.jpg'
										},

                image: 'https://www.wish-bone.com/wp-content/uploads/2013/11/ClassicItalianPastaSalad.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'http://caribbeanpot.com/wp-content/uploads/2016/07/herb-grilled-fish-1.jpg'
												},

                    image: 'http://caribbeanpot.com/wp-content/uploads/2016/07/herb-grilled-fish-1.jpg'
                    }]


         //list for you may like
						$scope.lists1 = [
						{'vl' : 'vegetable'},
						{'vl' : 'almond'},
						{'vl' : 'corn'},
						{'vl' : 'milk'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//list for you may not like
					$scope.lists2 = [
					{'vl' : 'meat'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'lettuce'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};

      //calling the getfav function
				$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key fe486afe04fe4bf9a1fec63b55d9f8cb',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
					}




})



					  //iss function ke andar jo b aayega bhi kaam hoga logincontroller ka

					  foodieApp.controller('loginController',function($scope,$location) {
			               $scope.goToHome = function(){
											 //console.log("Do Something")
											 $location.url('home');
										 }
			          })

		      //iss function ke andar jo b aayega bhi kaam hoga maincontroller ka

       foodieApp.controller('mainController',function($scope) {   //restaurant information

					$scope.restaurants = [
					{                    //restaurant 1 for Restraunt.html
						name: 'Ricos',
						address: '2526, 1st Floor, Hudson Lane, Kingsway Camp, Delhi',
						location: 'Delhi University-GTB Nagar',
						category: 'CAFE',
						vote: '3.6',
						cuisines: 'Cafe, Mexican, American, Italian, Lebanese, Continental',
						cost: '900',
						id:1,
						hours: '11 AM to 11 PM (Mon-Sun)',
						votes:'180',
						reviews:'200',
						order:'90mins Rs.20',
						image: 'https://tinyurl.com/ybsnhfna'
					},
					{              //restaurant 2 for Restraunt.html
						name: 'Hakuna Matata',
						address: '1231/35/2,7th Phase, Opposite Brigade, Bangalore',
						location: 'JP Nagar',
						category: 'North Indian, Asian, Seafood',
						vote: '4.1',
						cuisines: 'Modern Chinese',
						cost: '1200',
						id:2,
						hours: '12:30 AM to 11:30 PM (Mon-Sun)',
						votes:'200',
						reviews:'300',
						order:'60mins Rs.80',
						image: 'https://tinyurl.com/y9tebdor'
					},
					{              //restaurant 3 for Restraunt.html
						name: 'Love & Cheesecake',
						address: 'Eden 2, Central Ave, Hiranandani Gardens, Powai, Mumbai',
						location: 'Powai',
						category: 'DESSERT PARLOR',
						vote: '4.5',
						cuisines: 'Desserts, Bakery',
						cost: '800',
						id:3,
						hours: '9 AM to 12 Midnight (Mon-Sun)',
						votes:'190',
						reviews:'250',
						order:'50mins Rs.70',
						discount:'Get 15% off on all home-delivery orders. Valid only when you order online on Zomato.',
						image: 'https://tinyurl.com/y7hwh5mr'
					},
					{           //restaurant 4 for Restraunt.html
						name: 'Tribute',
						address: '89-B, Monica Complex, Ambamata Road, Udaipur',
						location: 'Fateh Sagar',
						category: ' Fine Dining',
						vote: '4.2',
						cuisines: 'North Indian, Rajasthani, Continental',
						cost: '1500',
						id:4,
						hours: '11:30 AM to 11 PM (Mon-Sun)',
						votes:'150',
						reviews:'280',
						order:  '20mins Rs.100',
						image: 'https://tinyurl.com/y9daexb6'
					},
					{          //restaurant 5 for Restraunt.html
						name: 'Farzi Cafe',
						address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
						location: 'Connaught Place',
						category: 'Casual Dining, Bar',
						vote: '4.2',
						cuisines: 'Modern Indian',
						cost: '2200',
						id:5,
						hours: '12 Noon to 1 AM (Mon-Sun)',
						votes:'280',
						reviews:'400',
						order:'70mins Rs.30',
						image: 'https://tinyurl.com/y9urntqf'
					},
					{              //restaurant 6 for Restraunt.html
						name: 'Jalpaan Restraunt',
						address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
						location: 'RS Puram',
						category: 'Casual Dining',
						vote: '4.0',
						cuisines: 'North Indian, Italian, Indian',
						cost: '1200',
						id:6,
						hours: '12 Noon to 10:30 PM (Mon-Sun)',
						votes:'120',
						reviews:'300',
						order:'90mins Rs.80',
						image: 'https://tinyurl.com/ycp69uuf'
					},

					{               //restaurant 7 for Restraunt.html
						name: 'The French Door',
						address: '102, West Bashyakaralu Road, RS Puram, Coimbatore',
						location: 'RS Puram',
						category: 'Casual Dining',
						vote: '4.8',
						cuisines: 'Continental, Cafe, French, North Indian, European',
						cost: '1800',
						id:7,
						hours: '11 AM to 11 PM (Mon-Sun)',
						votes:'180',
						reviews:'600',
						order:'70mins Rs.50',
						image: 'https://tinyurl.com/yb5fn87q'
					},
					{                //restaurant 8 for Restraunt.html
						name: 'Bikaner Sweets',
						address: 'Near Devkamal Hospital, Ratu Road, Ratu, Ranch',
						location: 'Ratu',
						category: 'Quick Bites, Dessert Parlor',
						vote: '4.2',
						cuisines: 'Desserts, Street Food',
						cost: '200',
						id:8,
						hours: ' 9 AM to 9:30 PM (Mon-Sun)',
						votes:'170',
						reviews:'500',
						order:'50mins Rs.80',
						image: 'https://tinyurl.com/yccjxy2h'
					}]

			})
