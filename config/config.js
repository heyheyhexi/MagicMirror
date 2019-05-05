/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	address: "0.0.0.0",
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.2.119", "192.168.2.149", "192.168.2.117"],

	language: 'de',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left',
			config: {
				timezonelocation: 'Berlin',
			}
		},
		{
			module: 'clock',
			position: 'top_left',
			config: {
				timezonelocation: 'Denpasar, Bali',
				timezone: 'Asia/Jakarta',
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
            header: '',
			config: {
				location: 'Denpasar',
				locationID: '1645528',  //ID from http://www.openweathermap.org
				appid: 'd327541af26bdcda47432fced90c2db2',
				weatherlocation: 'Denpasar, Bali',
                showFeelsLike: false,
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
            header: '',
			config: {
				location: 'Görlitz',
				locationID: '2918987',  //ID from http://www.openweathermap.org
				appid: 'd327541af26bdcda47432fced90c2db2',
				weatherlocation: 'Görlitz',
                showFeelsLike: false,
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Wettervorhersage',
			config: {
				location: 'Görlitz',
				locationID: '2918987',  //ID from http://www.openweathermap.org
				appid: 'd327541af26bdcda47432fced90c2db2',
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Focus",
//						title: "tagesschau.de",
						url: "http://rss.focus.de/fol/XML/rss_folnews_eilmeldungen.xml"
//						url: "http://www.tagesschau.de/xml/rss2"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
    				module: 'MMM-DWD-WarnWeather',
   				position: 'top_right',
//				header: 'Wetterwarnungen',
    				config: {
        			region: 'Reichenbach/OL.',
        			changeColor: true,
        			interval: 10 * 60 * 1000, // every 10 minutes
        			loadingText: 'Warnungen werden geladen...',
        			noWarningText: 'Keine Warnungen'
    			}
		},
/*		{
					module: 'MMM-Globe',
					position: 'lower_third',
			config: {
					style: 'europeDiscNat',
					imageSize: 600,
					ownImagePath:'',
					updateInterval: 10*60*1000
				}
		},
*/		{
    			module: 'MMM-Remote-Control'
    		},
		{
  			module: "MMM-Remote-Control-Repository",
		},
/*		{

//			module: 'MMM-Nyan-Cat', 
//			position: 'top_center', 
//			config: {
//				gif: 'https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif',
//				imageSize: 400, 		
//		}
//		},
/		{
			module: 'MMM-randomGIFs',
			position: 'top_center'		
		},
		
		
	//	{
	//	module: 'helloworld',
	//	position: 'middle_center',	// This can be any of the regions.
	//	config: {
			// See 'Configuration options' for more information.
	//		text: 'I miss YOU!'
	//	}
//	}
*/	]
	
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
