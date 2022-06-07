const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const state = {
    'alabama': {
        'name': 'US Space & Rocket Center',
        'location': 'Huntsville',
        'description': 'The U.S. Space & Rocket Center (USSRC) is a Smithsonian Affiliate and the Official Visitor Center for NASA’s Marshall Space Flight Center. We have one of the largest collections of rockets and space memorabilia on display anywhere in the world.',
        'website': 'https://www.rocketcenter.com/'
    },
    'alaska': {
        'name': 'Denali National Park',
        'location': '',
        'description': "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
        'website': 'https://www.nps.gov/dena/index.htm'
    },
    'arizona': {
        'name': 'Grand Canyon National Park',
        'location': 'San Francisco',
        'description': 'Grand Canyon National Park, in northern Arizona, encompasses 278 miles (447 km) of the Colorado River and adjacent uplands. Located on the ancestral homeland of 11 Associated Tribes, Grand Canyon is one of the most spectacular examples of erosion anywhere in the world—unmatched in the incomparable vistas it offers visitors on the rim. South Rim and North Rim are open 24 hours.',
        'website': 'https://www.nps.gov/grca/index.htm'
    },
    'arkansas': {
        'name': 'Hot Spring National Park',
        'location': '',
        'description': 'Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks – all in the middle of town – make Hot Springs National Park a unique and beautiful destination.',
        'website': 'https://www.nps.gov/hosp/index.htm'
    },
    'california': {
        'name': 'Joshua Tree National Park',
        'location': '',
        'description': 'Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California.',
        'website': 'https://www.nps.gov/jotr/index.htm'
    },
    'colorado': {
        'name': 'Pikes Peak',
        'location': 'Cascade',
        'description': 'Pikes Peak, located in the Rocky Mountains west of Colorado Springs, is one of the most famous — and most attainable — 14ers in the country.  Clocking in at a magnificent 14,115 feet, Pikes Peak is one of the 53 mountains in Colorado that achieves a height of 14,000 feet+, offering it further bragging rights as one of the top 100 mountains in the United States.',
        'website': 'https://www.pikes-peak.com/'
    },
    'connecticut': {
        'name': 'Mystic Aquarium',
        'location': 'Mystic',
        'description': 'Mystic Aquarium is a marine aquarium in Mystic, Connecticut. It is one of only two U.S. facilities holding Steller sea lions, and it has the only beluga whales in New England. Special exhibits include a ray and shark touch pool, an African penguin exhibit, a jelly gallery, and the "Jurassic Giants" dinosaur exhibit.',
        'website': 'https://www.mysticaquarium.org/'
    },
    'delaware': {
        'name': 'Cape May-Lewes Ferry',
        'location': 'Lewes',
        'description': 'The Cape May–Lewes Ferry is a ferry system in the United States that traverses a 17-mile crossing of the Delaware Bay to connect North Cape May, New Jersey with Lewes, Delaware.',
        'website': 'https://www.cmlf.com/'
    },
    'florida': {
        'name': 'Walt Disney Word Resort',
        'location': 'Orlando',
        'description': 'At a Disney Resort hotel, you can experience the same legendary detail, service and storytelling found in the theme parks. You’ll discover enchantment around every corner—and you may even spot some familiar Disney friends palling around.',
        'website': 'https://disneyworld.disney.go.com/'
    },
    'georgia': {
        'name': 'World of Coca-Cola',
        'location': 'Atlanta',
        'description': 'The World of Coca-Cola is a museum, located in Atlanta, Georgia, showcasing the history of the Coca-Cola Company. The 20-acre complex opened to the public on May 24, 2007, relocating from and replacing the original exhibit, which was founded in 1990 in Underground Atlanta.',
        'website': 'https://www.worldofcoca-cola.com/'
    },
    'hawaii': {
        'name': 'Hawaiʻi Volcanoes National Park',
        'location': 'Located 45 miles southwest of Hilo',
        'description': "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cherished cultural landscapes in the world. Extending from sea level to 13,681 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
        'website': 'https://www.nps.gov/havo/index.htm'
    },
    'idaho': {
        'name': 'Yellowstone National Park',
        'location': '',
        'description': "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic features. Within Yellowstone's 2.2 million acres, visitors have unparalleled opportunities to observe wildlife in an intact ecosystem, explore geothermal areas that contain about half the world’s active geysers, and view geologic wonders like the Grand Canyon of the Yellowstone River.",
        'website': 'https://www.nps.gov/yell/index.htm'
    },
    'illinois': {
        'name': 'The Skydeck Chicago',
        'location': 'Chicago',
        'description': 'Step outside the third tallest building in the Western Hemisphere. At 1,353 feet in the air, the Ledge’s glass boxes extend out 4.3 feet from the Skydeck.',
        'website': 'https://theskydeck.com/'
    },
    'indiana': {
        'name': 'The Indianapolis Motor Speedway',
        'location': 'Indianapolis',
        'description': 'The Indianapolis Motor Speedway is an automobile racing circuit. It is the home of the Indianapolis 500 and the Verizon 200, and formerly the home of the United States Grand Prix.',
        'website': 'indianapolismotorspeedway.com'
    },
    'iowa': {
        'name': 'Blank Park Zoo',
        'location': 'Des Moines',
        'description': 'The mission of the Blank Park Zoo is to inspire an appreciation of the natural world through conservation, education, research and recreation.',
        'website': 'https://www.blankparkzoo.com/'
    },
    'kansas': {
        'name': 'Monument Rocks',
        'location': 'Oakley',
        'description': "One of the Eight Wonders of Kansas and the first official National Natural Monument these stark formations look like nature's Stonehenge.",
        'website': 'https://www.visitoakleyks.com/monument-rocks'
    },
    'kentucky': {
        'name': 'Kentucky Derby',
        'location': 'Louisville',
        'description': "Churchill Downs, the world's most legendary racetrack, has conducted thoroughbred racing and presented America's greatest race, the Kentucky Derby, continuously since 1875.",
        'website': 'https://www.kentuckyderby.com/'
    },
    'louisiana': {
        'name': 'French Quarter',
        'location': 'New Orleans',
        'description': "The French Quarter is New Orleans' oldest and most famous neighborhood. Its beautiful buildings date back as far as 300 years, many with wrought iron balconies that extend over the tourist-filled sidewalks below. Visitors flock to the French Quarter for sightseeing, shopping, dining, and entertainment, and the area is packed during the annual Mardis Gras celebrations.",
        'website': 'https://www.frenchquarter.com/'
    },
    'maine': {
        'name': 'Bar Harbor',
        'location': 'Bar Harbor',
        'description': "Considered the gateway to Acadia National Park, Bar Harbor is an excellent place to unwind and reset. Nature lovers will find endless ways to enjoy the outdoors in this Mount Desert Island town, from coastal walks along Frenchman Bay (a traveler favorite) to bird-watching in multiple parks and preserves. Foodies will be pleased here, too: Fresh seafood is the destination's specialty, but its artisan ice cream shops, craft breweries and quaint breakfast cafes are also crowd pleasers.",
        'website': 'https://www.visitbarharbor.com/'
    },
    'maryland': {
        'name': 'Ocean City Boardwalk',
        'location': 'Ocean City',
        'description': "The Travel Channel called our classic wooden boardwalk America's best. National Geographic named it one of the top 10 in the U.S. And USA Today named it one of the nation's best boardwalks for food. In short, it's three miles of highly concentrated fun - and one more reason to vacation in OCMD.  Day or night, there's always something happening - and quite often, it's free.  Amusements and arcades are fun for children of all ages. Catch a spectacular view from the tops of one of our ferris wheels. Scream with delight on our roller coaster or savor the slower pace of our magnificent 1902 carousel. Oh, and don't forget to stop by one of our many arcades and play to win!",
        'website': 'https://www.ococean.com/explore-oc/boardwalk'
    },
    'massachusetts': {
        'name': 'Fenway Park',
        'location': 'Boston',
        'description': 'Hallowed ground to baseball purists, this cozy, quirky park has been the Boston Red Sox home field since 1912. The most distinctive feature of this classic baseball park is the 37-foot-tall left field wall, known as the "Green Monster."',
        'website': 'https://www.mlb.com/redsox/ballpark'
    },
    'michigan': {
        'name': 'Frederik Meijer Gardens and Sculpture Park',
        'location': 'Grand Rapids',
        'description': 'View modern sculpture in a stunning garden setting at this combination botanical garden and sculpture park, which features exotic plants, desert and Victorian gardens, wetlands, meadows, and sculptures by famous artists throughout.',
        'website': 'https://www.meijergardens.org/'
    },
    'minnesota': {
        'name': 'Mall of America',
        'location': 'Bloomington',
        'description': 'Mall of America(R) is one of the top tourist destinations in the country! The Mall welcomes more than 40 million visitors a year from across the country and around the world to enjoy over 520 retail and specialty stores.',
        'website': 'https://mallofamerica.com/'
    },
    'mississippi': {
        'name': 'Natchez Trace Parkway',
        'location': 'From Natchez, Mississippi, to Nashville, Tennessee.',
        'description': 'The Natchez Trace Parkway is a 444-mile recreational road and scenic drive through three states. It roughly follows the "Old Natchez Trace" a historic travel corridor used by American Indians, "Kaintucks," European settlers, slave traders, soldiers, and future presidents. Today, people can enjoy not only a scenic drive but also hiking, biking, horseback riding, and camping along the parkway.',
        'website': 'https://www.nps.gov/natr/index.htm'
    },
    'missouri': {
        'name': 'Gateway Arch',
        'location': 'St. Louis',
        'description': "The Gateway Arch is a 630-foot tall monument in St. Louis, Missouri, United States. Clad in stainless steel and built in the form of a weighted catenary arch, it is the world's tallest arch and Missouri's tallest accessible building. Some sources consider it the tallest man-made monument in the Western Hemisphere.",
        'website': 'https://www.gatewayarch.com/'
    },
    'montana': {
        'name': 'Going-to-the-Sun Road',
        'location': 'Glacier National Park',
        'description': 'A spectacular and scenic 52-mile highway through Glacier National Park, which crosses the Continental Divide at Logan Pass in Montana.',
        'website': 'https://www.nps.gov/glac/planyourvisit/goingtothesunroad.htm'
    },
    'nebraska': {
        'name': 'Henry Doorly Zoo',
        'location': 'Omaha',
        'description': 'This world-class zoo is famous for its involvement with breeding endangered species from around the world.',
        'website': 'https://www.omahazoo.com/'
    },
    'nevada': {
        'name': 'Las Vegas Strip',
        'location': 'Las Vegas',
        'description': "Many of the largest hotel, casino, and resort properties in the world are on the Strip, known for its contemporary architecture, lights, and wide variety of attractions. Its hotels, casinos, restaurants, residential high-rises, entertainment offerings, and skyline have established the Strip as one of the most popular and iconic tourist destinations in the world and is one of the driving forces for Las Vegas's economy.",
        'website': 'https://www.visitlasvegas.com/mapexplorer/'
    },
    'new hampshire': {
        'name': 'Kancamagus Highway',
        'location': 'North Conway',
        'description': 'Highway 112 runs from Center Conway to North Woodstock, just south of Franconia Notch. Passing through the White Mountain National Forest, it is considered one of the most scenic highways in the U.S. and offers a number of interesting stopping off points.',
        'website': 'https://www.fs.usda.gov/activity/whitemountain/recreation/scenicdrivinginfo'
    },
    'new jersey': {
        'name': 'Atlantic City Boardwalk',
        'location': 'Atlantic City',
        'description': 'Opened on June 26, 1870, the world-famous Boardwalk stretches along six magical and glittering miles of Atlantic City beachfront.',
        'website': 'https://www.atlanticcitynj.com/explore/beaches-boardwalk/'
    },
    'new mexico': {
        'name': 'Sandia Peak Tramway',
        'location': 'Albuquerque',
        'description': "Ride to new heights on North America's longest aerial tram ride. Sandia Peak Tram takes visitors 2.7 miles or 10,378 ft up the Sandia Mountains. Breath in the fresh mountain air and enjoy breathtaking views of over 11,000 square miles of New Mexico.",
        'website': 'https://sandiapeak.com/'
    },
    'new york': {
        'name': 'Statue of Liberty',
        'location': 'New York City',
        'description': '"The Statue of Liberty Enlightening the World" was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886.  It was designated as a National Monument in 1924.  Employees of the National Park Service have been caring for the colossal copper statue since 1933.',
        'website': 'https://www.nps.gov/stli/index.htm'
    },
    'north carolina': {
        'name': 'The Great Smoky Mountains',
        'location': '',
        'description': "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
        'website': 'https://www.nps.gov/grsm/index.htm'
    },
    'north dakota': {
        'name': 'Theodore Roosevelt National Park',
        'location': '',
        'description': 'When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.',
        'website': 'https://www.nps.gov/thro/index.htm'
    },
    'ohio': {
        'name': 'Rock & Roll Hall of Fame',
        'location': '',
        'description': 'The Rock and Roll Hall of Fame is alive with the energy, passion and the spirit of music we celebrate. The 150,000 square-foot museum features seven floors, four theaters for films and ever-changing exhibits.',
        'website': 'https://www.rockhall.com/'
    },
    'oklahoma': {
        'name': 'Philbrook Museum of Art',
        'location': 'Tulsa',
        'description': 'Philbrook Museum of Art is an art museum with expansive formal gardens located in Tulsa, Oklahoma. The museum, which opened in 1939, is located in a former 1920s villa, "Villa Philbrook", the home of Oklahoma oil pioneer Waite Phillips and his wife Genevieve.',
        'website': 'https://philbrook.org/'
    },
    'oregon': {
        'name': 'Portland Japanese Garden',
        'location': 'Portland',
        'description': 'Many styles of gardens showcased in serene 5.5-acre space with waterfall, teahouse & mountain view.',
        'website': 'https://japanesegarden.org/'
    },
    'pennsylvania': {
        'name': 'Hershey Park',
        'location': 'Hershey',
        'description': 'Hersheypark is a family theme park located in Hershey, Pennsylvania, about 15 miles east of Harrisburg, and 95 miles west of Philadelphia. The park was founded in 1906 by Milton S. Hershey as a leisure park for the employees of the Hershey Chocolate Company.',
        'website': 'https://www.hersheypark.com/'
    },
    'rhode island': {
        'name': 'Waterfire Providence',
        'location': 'Providence',
        'description': 'Billed as one of the “top 20 events in North America” by National Geographic Magazine, the Providence WaterFire is a modern art installation found in downtown Providence during May and October. This unique multi-sensory attraction consists of volunteer fire tenders sailing down the river and lighting more than 80 floating bonfires along their way. The waterborne display is accompanied by new-age music to further perplex the gathering crowds.',
        'website': 'https://waterfire.org/schedule/2022-waterfire-providence-event-schedule/'
    },
    'south carolina': {
        'name': 'Myrtle Beach',
        'location': 'Myrtle Beach',
        'description': 'With 60 miles of wide, powdery sand beaches, you and your family will spend hours of baking under the sun, building sandcastles by the sea shore, or swimming in its azure blue waters.',
        'website': 'https://www.visitmyrtlebeach.com/'
    },
    'south dakota': {
        'name': 'Mount Rushmore',
        'location': 'Pennington County',
        'description': 'One of the most unique tourist attractions in the States, the majestic Mount Rushmore and its colossal carvings are visited by millions of tourists each year. The most photographed attraction in South Dakota, the stupendous sculpture can be found in the southwest.',
        'website': 'https://www.nps.gov/moru/index.htm'
    },
    'tennessee': {
        'name': 'Dollywood',
        'location': 'Pigeon Forge',
        'description': "Named after country singer Dolly Parton, Dollywood has long been Tennessee's most popular ticketed attraction, luring more than three million visitors per year. One of the top attractions in Pigeon Forge, this thriving 150-acre theme park provides family fun with its mix of folksy Smoky Mountains traditions and crafts, thrilling rides, and musical entertainment.",
        'website': 'https://www.dollywood.com/'
    },
    'texas': {
        'name': 'San Antonio River Walk',
        'location': 'San Antonio',
        'description': 'The San Antonio River Walk is the most popular tourist attraction in Texas. The 3 miles of stone pathways along the San Antonio River winds through the heart of downtown, providing easy access to restaurants, bars, shops, hotels and other attractions, like Market Square, Tower of Americas and Mission San Jose.',
        'website': 'https://www.thesanantonioriverwalk.com/'
    },
    'utah': {
        'name': 'Bonneville Salt Flats',
        'location': 'Tooele County - 110 miles west of Salt Lake City',
        'description': 'The Bonneville Salt Flats are one of Earth’s most unique land-forms. Located 120 miles west of Salt Lake City in Tooele County, Utah, the Salt Flats are about five miles wide adn 12 miles long. They are comprised mostly of sodium chloride, or table salt.  Like the Great Salt Lake, the Salt Flats are remnant of ancient Ice Age Lake Bonneville, which covered over one-third of Utah from about 32,000 to 10,000 years ago.  The Salt Flats are managed by the Bureau of Land Management.',
        'website': 'https://www.blm.gov/visit/bonneville-salt-flats'
    },
    'vermont': {
        'name': 'Basin Harbor',
        'location': 'Vergennes',
        'description': 'Basin Harbor offers lake resort activities and entertainment for every season and every interest. Guests can relax with Lake Champlain as their backdrop, lounge in one of the colorful Adirondack chairs while reading in the beautiful gardens, or take part in the many classes and clinics offered. Vermont recreation is right at your fingertips – hiking, biking, kayaking and sailing.',
        'website': 'https://www.basinharbor.com/recreation/'
    },
    'virginia': {
        'name': 'Shenandoah National Park',
        'location': '',
        'description': 'Shenandoah National Park is located in the Blue Ridge Mountains of Virginia, just west of Washington, D.C. The Park stretches 105 miles from its northern entrance at Front Royal to its southern entrance near Waynesboro. There are four entrance stations to Shenandoah National Park, but only one has a physical address.  Skyline Drive is the main road that runs the span of Shenandoah. The campgrounds, dining and lodging options, gift shops, and the majority of hiking trailheads are directly off of Skyline Drive. There are a select number of trails that start at the Park boundary, such as Old Rag Mountain and Whiteoak Canyon.',
        'website': 'https://www.nps.gov/shen/index.htm'
    },
    'washington': {
        'name': 'Space Needle',
        'location': 'Seattle',
        'description': "Tilting glass benches leaning out over the city, the world's first and only revolving glass floor, and unmatched views of Seattle and beyond.",
        'website': 'https://www.spaceneedle.com/'
    },
    'west virginia': {
        'name': 'Blackwater Falls State Park',
        'location': 'Davis',
        'description': 'Located in the Allegheny Mountains of Tucker County, Blackwater Falls State Park is named for the amber waters of Blackwater Falls, a 57-foot cascade tinted by the tannic acid of fallen hemlock and red spruce needles. The falls, along with a few of the park’s other features like Elakala Falls, Lindy Point and Pendleton Point Overlook, are some of the state’s most photographed spots. Visitors can enjoy the scenic views year-round by taking the steps to the falls or using viewing platforms. The park has 20 miles of hiking trails, the longest sledding magic carpet on the East Coast in the winter, a comfortable lodge and more.',
        'website': 'http://www.blackwaterfalls.com/'
    },
    'wisconsin': {
        'name': 'The Harley-Davidson Museum',
        'location': 'Milwaukee',
        'description': "Get an in depth look into the lifestyle, culture, and the motorcycle community that only Harley-Davidson can provide. Discover the mechanics behind how motorcycles work and learn about the iconic history of Harley-Davidson through a gallery of bikes from 1903 to the present. Our temporary exhibits bring to life experiences and stories that shape moto culture and influence the world around us.",
        'website': 'https://www.harley-davidson.com/us/en/museum.html'
    },
    'wyoming': {
        'name': 'National Elk Refuge',
        'location': 'Jackson',
        'description': "A wildlife refuge located north of Jackson, WY that provides winter habitat for Jackson's elk herd. Seasonal hours of operation are listed on the web site for the Visitor Center, Historic Miller Ranch, and Winter Sleigh Ride tours.",
        'website': 'https://www.fws.gov/refuge/national-elk'
    },
    'unknown': {
        'name': 'unknown',
        'location': 'unknown',
        'description': 'unknown',
        'website': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const stateName = request.params.name.toLowerCase()
    if(state[stateName]){
        response.json(state[stateName])
    }else{
        response.json(state['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})