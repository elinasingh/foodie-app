
		 var foodieApp = angular.module('foodieApp',['ngRoute']);
         //console.log(foodieApp);

			  $('#myCarousel').carousel({
				 	pause: 'none'
				 })

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
			})



					 //restaurantController
					 foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
						 $scope.ingredients = [];
							console.log($routeParams.id);
							$scope.restaurantId = $routeParams.id;
							var restaurants = [{
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
							{
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
							{
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
							{
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
							{
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
							{
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

							{
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
							{
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
									                                                         
												 for (var i =0;i < ingredients.length;i++) {
														$scope.ingredients.push(ingredients[i].name);
														}
												 console.log(list)
													  }, function error(xhr) {
													      console.log(xhr);
													  });

							}
           })

					 //logincontroller
					  foodieApp.controller('loginController',function($scope,$location) {
			               $scope.goToHome = function(){
											 //console.log("Do Something")
											 $location.url('home');
										 }
			          })

		    //maincontroller
       foodieApp.controller('mainController',function($scope) {   //restaurant information

					$scope.restaurants = [
					{
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
					{
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
					{
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
					{
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
					{
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
					{
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

					{
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
					{
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
