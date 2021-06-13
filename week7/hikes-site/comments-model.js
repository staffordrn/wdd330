export const commentList = [
    {
    name: 'Bechler Falls',
    date: 'Sat Jun 05 2021 18:53:39',
    content: 'comment of Bechler Falls',
    },
    {
    name: 'Teton Canyon',
    date: 'Sat Jun 05 2021 18:54:41',
    content: 'comment of Teton Canyon Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:42',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:43',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Bechler Falls',
    date: 'Sat Jun 05 2021 18:54:44',
    content: 'comment of Bechler Falls',
    },
    {
    name: 'Teton Canyon',
    date: 'Sat Jun 05 2021 18:54:45',
    content: 'comment of Teton Canyon Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:46',
    content: 'comment of Denanda Falls',
    },
    {
    name: 'Denanda Falls',
    date: 'Sat Jun 05 2021 18:54:47',
    content: 'comment of Denanda Falls',
    }
];

export default class CommentModel {
  constructor(type) {
    this.type = type;
    // get the initial list of comments out of local storage if it exists
    this.comments = getFromLS(this.type) || [];
  }
  //getter function for all comments 
    getFromLS() {
        return hikeList;
    }
    //setter function for comments
    getHikeByName(hikeName) {
        return this.getAllHikes().find(hike => hike.name === hikeName);
  }
    setToLS(comments, key) {
        
    }
}
//export function getComment(key)
//array for comment storage
//save to lS