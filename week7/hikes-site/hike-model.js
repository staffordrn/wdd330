export const hikeList = [
    {
    name: 'Bechler Falls',
    imgSrc: 'bechler.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
    name: 'Teton Canyon',
    imgSrc: 'teton-canyon.jpg',
    imgAlt: 'Image of Teton Canyon Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Teton Canyon is undoubtedly one of the best spots to start a trip on the western side of the Tetons.',
    directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
    name: 'Denanda Falls',
    imgSrc: 'denanda.jpg',
    imgAlt: 'Image of Denanda Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Although the distance is long, it is flat for most of the way, making it doable as a day hike or an overnighter. For the best conditions, do this hike in September.',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
];
// create and export a hikeModel class
export default class HikeModel {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    //this.backButton = this.buildBackButton();    
  }
  //getter function for all hikes 
    getAllHikes() {
        return hikeList;
    }
  //getter function for a single hike
  getHikeByName(hikeName) {
     return this.getAllHikes().find(hike => hike.name === hikeName);
  }
  /* buildBackButton() {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- Return to Hikes List';
    backButton.addEventListener('touchend', () => {
    this.showHikeList();
    })
    backButton.addEventListener('click', () => {
    this.showHikeList();
    });
    backButton.classList.add('hidden');
    console.log(this.parentElement);
    this.parentElement.before(backButton);
    return backButton;
    } */
}