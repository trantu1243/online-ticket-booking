const cityList = ['London', "Rosario", "Madrid", "Koltaka", "Rome", "Khoksa"];
const dateList = ['23/10/2019', '24/10/2019', '25/10/2019', '26/10/2019'];
const cinemaList = ["Awaken", "dhaka", "rosario", "madrid", "koltaka", "rome", "khoksa"];

const formList = [
    {
        type: 'city',
        img: '/assets/images/ticket/city.png',
        list: cityList,
    },
    {
        type: 'date',
        img: '/assets/images/ticket/date.png',
        list: dateList,
    },
    {
        type: 'cinema',
        img: '/assets/images/ticket/cinema.png',
        list: cinemaList,
    }
]

const movieList = [
    {
        name: 'alone',
        img: '/assets/images/movie/movie01.jpg',
        tomatoPoint: '88%',
        cakePoint: '88%'
    },
    {
        name: 'mars',
        img: '/assets/images/movie/movie02.jpg',
        tomatoPoint: '88%',
        cakePoint: '88%'
    },
    {
        name: 'venus',
        img: '/assets/images/movie/movie03.jpg',
        tomatoPoint: '88%',
        cakePoint: '88%'
    },
    {
        name: 'horror night',
        img: '/assets/images/movie/movie04.jpg',
        tomatoPoint: '88%',
        cakePoint: '88%'
    }
]

const movie = {
    name: 'Venus',
    img: '/assets/images/movie/venus.jpg',
    video: 'https://www.youtube.com/embed/KGeBMAgc46E',
    videoImg: '/assets/images/movie/video-button.png',
    language: ['English', 'Hindi', 'Telegu', 'Tamil'],
    type: 'horror',
    date: '06 Dec, 2020',
    duration: '2 hrs 50 mins',
    tomatoPoint: '88',
    cakePoint: '88',
    userRating: 4.5,
    photo: [
        '/assets/images/movie/movie-details01.jpg', 
        '/assets/images/movie/movie-details02.jpg', 
        '/assets/images/movie/movie-details03.jpg', 
    ],
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula eros sit amet est tincidunt aliquet. Fusce laoreet ligula ac ultrices eleifend. Donec hendrerit fringilla odio, ut feugiat mi convallis nec. Fusce elit ex, blandit vitae mattis sit amet, iaculis ac elit. Ut diam mauris, viverra sit amet dictum vel, aliquam ac quam. Ut mi nisl, fringilla sit amet erat et, convallis porttitor ligula. Sed auctor, orci id luctus venenatis, dui dolor euismod risus, et pharetra orci lectus quis sapien. Duis blandit ipsum ac consectetur scelerisque.',
    castList:[
        {
            name: 'Bill Hader',
            cate: 'actor',
            img: '/assets/images/cast/cast01.jpg',
            character: 'Richie Tozier',  
        },
        {
            name: 'nora hardy',
            cate: 'actor',
            img: '/assets/images/cast/cast02.jpg',
            character: 'raven',  
        },
        {
            name: 'alvin peters',
            cate: 'actor',
            img: '/assets/images/cast/cast03.jpg',
            character: 'magneto',  
        },
        {
            name: 'josh potter',
            cate: 'actor',
            img: '/assets/images/cast/cast04.jpg',
            character: 'quicksilver',  
        },
    ],
    crewList: [
        {
            name: 'pete warren',
            cate: 'actor',
            img: '/assets/images/cast/cast05.jpg', 
        },
        {
            name: 'howard bass',
            cate: 'executive producer',
            img: '/assets/images/cast/cast06.jpg', 
        },
        {
            name: 'naomi smith',
            cate: 'producer',
            img: '/assets/images/cast/cast07.jpg',
            character: 'quicksilver',  
        },
        {
            name: 'tom martinez',
            cate: 'producer',
            img: '/assets/images/cast/cast08.jpg',
            character: 'quicksilver',  
        },
    ],
    userReview: 147,
    userReviewList: [
        {
            name: 'minkuk seo',
            img: '/assets/images/cast/cast02.jpg',
            date: '13 Days Ago',
            title: 'Awesome Movie',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. '
        },
        {
            name: 'rudra rai',
            img: '/assets/images/cast/cast04.jpg',
            date: '13 Days Ago',
            title: 'Awesome Movie',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. '
        },
        {
            name: 'rafuj',
            img: '/assets/images/cast/cast01.jpg',
            date: '13 Days Ago',
            title: 'Awesome Movie',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. '
        },
        {
            name: 'bela bose',
            img: '/assets/images/cast/cast03.jpg',
            date: '13 Days Ago',
            title: 'Awesome Movie',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. '
        }
    ]
}

export {
    formList,
    movieList,
    movie
}