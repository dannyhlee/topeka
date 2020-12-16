import { LightningElement } from 'lwc';

const ATTRACTIONS = [
    {
        Name: 'Brown v. Board of Education National Historic Site',
        Description:
            'The story of Brown v. Board of Education, which ended legal segregation in public schools, is one of hope and courage. When the people agreed to be plaintiffs in the case, they never knew they would change history. The people who make up this story were ordinary people. They were teachers, secretaries, welders, ministers and students who simply wanted to be treated equally.',
        Picture: '/resources/images/brown_v_board_of_education_nhs.jpg'
    },
    {
        Name: 'Evel Knievel Museum',
        Description:
            'For daredevils and dreamers of all ages, come rediscover the spectacle of the death-defying Evel Knievel show, now open and flying sky-high in Topeka, Kansas. Witness the incredible collection of the physics-defying bikes that launched the legend. See his iconic 1974 Mack Truck & Trailer "Big Red." Examine the star-spangled helmets (battered, and beaten and beautiful) that undoubtedly saved Evel\'s uninsurable life more than once. Listen to the eye-widening, imagination-sparking, and the doesn\'t-seem-possible stories that defined an American icon.',
        Picture: '/resources/images/evel_knievel_museum.jpg'
    },
    {
        Name: 'Lake Shawnee',
        Description:
            'Twice cited by the tourism industry as a top travel destination in Kansas, lake Shawnee is visited by more than 1 million people each year for festivals, ball tournaments, golf, boating, fishing and camping or just to hike the Lake Shawnee Trail and visit Ted Ensley Gardens. Shelter houses available for rent, playgrounds, tennis courts and sand volleyball round out the fun.',
        Picture: '/resources/images/lake_shawnee.jpg'
    },
    {
        Name: 'Kansas Museum of History',
        Description:
            "This award-winning museum tells the story of the people of Kansas. See the Santa Fe's oldest surviving locomotive, No. 132, from 1880. A.K. Longren's 1914 version of the plane in which he made the first successful flight of a Kansas-built plane in 1911. Named one of the 8 Wonders of Kansas History.",
        Picture: '/resources/images/kansas_museum_of_history.jpg'
    },
    {
        Name: 'Combat Air Museum',
        Description:
            'The Combat Air Museum has served as an educational institution and tourism destination for forty three years. It is one of a handful of major aviation museums in the United States located on an active air field. Visitors to our Museum are regularly treated to flying activities of Air Force fighter aircraft and Army helicopter operations. With the longest runway in the State of Kansas, large refueling tanker aircraft of the Kansas Air National Guard and army troop transports often fill the skies around the Museum. The Museum\'s "Young Aviators" classes and Girls in Aviation Day offer students and Girl Scouts a unique opportunity to be immersed in the midst of a museum covering aviation history from the earliest days of flight to the present day.',
        Picture: '/resources/images/combat_air_museum.jpg'
    }
];

export default class AttractionIterator extends LightningElement {
    attractions = ATTRACTIONS;
    activeTab = '';

    toggleDisplay(event) {
        this.activeTab = event.target.value;
    }
}
