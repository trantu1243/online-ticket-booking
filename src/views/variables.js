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

const movieLists = [
    {
        description: "Đi qua những đau khổ và phản bội, mối tình đơn phương của Ngạn dành cho cô bạn thân thời thơ ấu Hà Lan kéo dài cả một thế hệ trong bộ phim siêu lãng mạn này.",
        duration:117,
        genre: "Lãng mạn",
        image: "http://localhost/online-ticket-booking/image/mat_biec.jpg",
        movieID: 100000000,
        name: "Mắt biếc",
        photo: null,
        poster: "/assets/images/movie/mat_biec_poster.jpg",
        releaseDate: "2019-12-20",
        status: 1,
        tomatoPoint: 69,
        videoUrl: "https://youtu.be/ITlQ0oU7tDA?si=fcAdCZhY7QD72gOO"
    },
    {
        description: "Lấy bối cảnh trận chiến đông xuân kéo dài 60 ngày đêm từ cuối năm 1946 đến đầu năm 1947 ở Hà Nội, câu chuyện theo chân chàng dân quân Văn Dân và chuyện tình với nàng tiểu thư đam mê dương cầm Thục Hương. Khi những người khác đã di tản lên chiến khu, họ quyết định cố thủ lại mảnh đất thủ đô đã tan hoang vì bom đạn, mặc cho những hiểm nguy đang chờ đợi trước mắt.",
        duration: 100,
        genre: "Chiến tranh, Chính kịch",
        image: "http://localhost/online-ticket-booking/image/dao_pho_piano.jpg",
        movieID: 100000001,
        name: "Đào, phở và piano",
        photo: null,
        poster: "/assets/images/movie/dao_pho_piano_poster.jpg",
        releaseDate: "2024-02-22",
        status: 1,
        tomatoPoint: 78,
        videoUrl: "https://youtu.be/qn1t_biQigc?si=GelGe2spBx50NmcU"
    },
    {
        description: "Trong phim, Trấn Thành vào vai ông Tư, một tài xế xe ôm quần quật làm việc qua ngày để chăm lo cho gia đình của mình. Mặc dù khá bảo thủ, nóng nảy, thường xuyên quát tháo nhưng thực chất ông Tư lại là một người rất giàu lòng yêu thương, không chỉ với người thân mà còn có hàng xóm, bạn bè xung quanh và thậm chí là cả những người xa lạ.",
        duration: 128,
        genre: "Hài, Gia đình",
        image: "http://localhost/online-ticket-booking/image/Bo-Gia.jpg",
        movieID: 100000002,
        name: "Bố già",
        photo: null,
        poster: "/assets/images/movie/bo_gia_poster.jpg",
        releaseDate: "2021-03-05",
        status: 1,
        tomatoPoint: 70,
        videoUrl: "https://youtu.be/g8_DQqqTabk?si=CFL6kAANmNPUFacu"
    },
    {
        description: "Lấy bối cảnh trận chiến đông xuân kéo dài 60 ngày đêm từ cuối năm 1946 đến đầu năm 1947 ở Hà Nội, câu chuyện theo chân chàng dân quân Văn Dân và chuyện tình với nàng tiểu thư đam mê dương cầm Thục Hương. Khi những người khác đã di tản lên chiến khu, họ quyết định cố thủ lại mảnh đất thủ đô đã tan hoang vì bom đạn, mặc cho những hiểm nguy đang chờ đợi trước mắt.",
        duration: 100,
        genre: "Chiến tranh, Chính kịch",
        image: "http://localhost/online-ticket-booking/image/dao_pho_piano.jpg",
        movieID: 100000001,
        name: "Đào, phở và piano",
        photo: null,
        poster: "/assets/images/movie/dao_pho_piano_poster.jpg",
        releaseDate: "2024-02-22",
        status: 1,
        tomatoPoint: 78,
        videoUrl: "https://youtu.be/qn1t_biQigc?si=GelGe2spBx50NmcU"
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
    movieLists,
    movie
}