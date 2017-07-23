
		 var foodieApp = angular.module('foodieApp',[]);  
		 
		 $('#myCarousel').carousel({ 
				pause: 'none'
				})
		 
		 
		  foodieApp.controller('mainController',function($scope) {  

	      })

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
						hours: ' 9 AM to 9:30 PM (Mon-Sun)',
						votes:'170',
						reviews:'500',
						order:'50mins Rs.80',
						image: 'https://tinyurl.com/yccjxy2h'
					}]
			
			})
			
			