document.addEventListener('DOMContentLoaded', (event) => {
    const video = $('#video');
    const startTime = 10;

    video.on('loadedmetadata', function() {
        video[0].currentTime = startTime;
    });

    // video.on('canplay', function() {
    //     video[0].muted = true;
    //     video[0].loop = true;
    //     video[0].play();
    // });

    video.load();
});


// TODO Search icon 

$('#search').on('change', function() {
    $(this).is(':checked') ? 
      $('#search-box').css({
        backgroundColor: '#eff0f3',
        marginRight: '0em',
        width: '10em',
        transition: '350ms',
        padding: '0 0.6em 0',
      }) : 
      $('#search-box').css({
        width: '0',
        backgroundColor: '#0000',
        marginRight: '-1.15em',
        padding: '0',
        transition: '350ms',
      });
});

// todo Hamburger
$('#hamburger-label').on('click', function() {
const bars = $('.bars');
const barsIcon = $('#bars-icon');
const hbgCheckbox = $('#hamburger');

if (hbgCheckbox.is(':checked')) {
    barsIcon.css({
    transform: 'rotate(180deg)',
    color: '#feec93',
    });

    bars.css({
    transform: 'translateX(-15em)',
    opacity: '1',
    boxShadow: '-10em 0px 10px rgba(0, 0, 0, 0.6)',
    zIndex: '20'
    });
} else {
    barsIcon.css({
    transform: 'rotate(0deg)',
    color: '#fff',
    });

    bars.css({
    transform: 'translateX(0em)',
    opacity: '0',
    boxShadow: 'none',
    zIndex: '1',
    });
}
});

// TODO SPOTIFY 

$('#Vietnam').on('click', function() {
window.open('https://open.spotify.com/playlist/4YJnIVHbU50DhkGKGWKsiv?si=e24da81abcd84fdc', '_blank');
});

$('#idiosyncrasy').on('click', function() {
window.open('https://open.spotify.com/playlist/5FUYKwQRiVasnuxYSd32Ti?si=66071eacc48b4804', '_blank');
});

$('#female').on('click', function() {
window.open('https://open.spotify.com/playlist/031gqm3DJuYIITCgJFV0oC?si=576f4b88dfec48d2', '_blank');
});

$('#male').on('click', function() {
window.open('https://open.spotify.com/playlist/0x9GQNsycTnRauVDsVej4l?si=445aeb8d04044393', '_blank');
});

// TODO Btn Message 
const button = $('#alertBtn');
const message = $('#alertMessage');

button.on('click', function(event) {
    event.preventDefault();
    button.hide();
    message.show().text('Submited !');
});


// TODO Suggest   
const searchSuggest = $('#search-suggest');

const artists = [
    {
        avtArtist : 'assets/images/Artist/mtp-avtArtist.jpg',
        nameArtist: 'Sơn Tùng M-TP',
        link      : 'Son-Tung-MTP.html' 
    },
    {
        avtArtist : 'assets/images/Artist/TheWeeknd-avtArtist.jpg',
        nameArtist: 'The Weeknd',
        link      : 'The-Weeknd.html' 
    },
    {
        avtArtist : 'assets/images/Artist/billieEilish-avtArtist.jpg',
        nameArtist: 'Billie Eilish',
        link      : '#' 
    },
    {
        avtArtist : 'assets/images/Artist/DPRIAN-avtartist.jpg',
        nameArtist: 'DPR IAN',
        link      : '#' 
    },
];

const songs = [
    {
        imgSrc: 'assets/images/Collections/MoodswingsInThisOrder.jpg',
        title : 'Nerves',
        artist: 'DPR IAN',
        views : '162.9K',
        link  : 'nerves.html'
    },
    {
        imgSrc: 'assets/images/Collections/MITO.png',
        title : 'Ballroom Extravaganza',
        artist: 'DPR IAN',
        views : '611.1K',
        link  : 'ballroomExtravaganza.html'
    },
    {
        imgSrc: 'assets/images/Collections/Chungtacuatuonglai.jpg',
        title : 'Chúng Ta Của Tương Lai',
        artist: 'Sơn Tùng M-TP',
        views : '6.3M',
        link  : 'chungTaCuaTuongLai.html'
    },
    {
        imgSrc: 'assets/images/Collections/hayTraoChoAnh.jpg',
        title : 'Hãy Trao Cho Anh',
        artist: 'Sơn Tùng M-TP',
        views : '270M',
        link  : 'hayTraoChoAnh.html'
    },
    {
        imgSrc: 'assets/images/Collections/oneOfTheGirls.jpg',
        title : 'One Of The Girls',
        artist: 'The Weeknd, JENNIE, Lily-Rose Deep',
        views : '1.1M',
        link  : 'oneOfTheGirls.html'
    },
    {
        imgSrc: 'assets/images/Collections/afterHours.jpg',
        title : 'After Hours',
        artist: 'The Weeknd',
        views : '212M',
        link  : 'afterHours.html'
    },
    {
        imgSrc: 'assets/images/Collections/popular.png',
        title : 'Popular',
        artist: 'The Weeknd',
        views : '619.1K',
        link  : 'popular.html'
    },
    {
        imgSrc: 'assets/images/Collections/hitMeHardAndSoft.jpg',
        title : 'BLUE',
        artist: 'Billie Eilish',
        views : '611.1K',
        link  : 'blue.html'
    },
    {
        imgSrc: 'assets/images/Collections/hitMeHardAndSoft.jpg',
        title : 'CHIHIRO',
        artist: 'Billie Eilish',
        views : '856.1K',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/DrawnFM.jpg',
        title : 'Is There Someone Else',
        artist: 'The Weeknd',
        views : '830.7K',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/Dear-Melancholy.jpg',
        title : 'I Was Never There',
        artist: 'The Weeknd, Gesaffelstein',
        views : '1.5M',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/DearInsanity.jpg',
        title : 'Violet Crazy',
        artist: 'DPR IAN',
        views : '611.1K',
        link  : 'VioletCrazy.html'
    },
    {
        imgSrc: 'assets/images/Collections/starboy.jpg',
        title : 'Die For You',
        artist: 'The Weeknd',
        views : '4.3M',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/starboy.jpg',
        title : 'Starboy',
        artist: 'The Weeknd',
        views : '8.9M',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/MoodswingsInThisOrder.jpg',
        title : 'So Beautiful',
        artist: 'DPR IAN',
        views : '90.1K',
        link  : '#'
    },
    {
        imgSrc: 'assets/images/Collections/theColorViolet.jpg',
        title : 'The Color Violet',
        artist: 'Tory Lanez',
        views : '31M',
        link  : 'theColorViolet.html'
    },
];

// TODO sự kiện tìm kiếm 

$('#search-box').on('input', function() {
    const query = $(this).val().toLowerCase();

    searchSuggest.empty();

    if(query) {
        const filterSong = songs.filter(song => song.title.toLowerCase().includes(query));

        const filterArist = artists.filter(artist => artist.nameArtist.toLowerCase().includes(query));

        filterSong.forEach(song => {
            const songElement = $('<div>').addClass('suggestion-item');
            songElement.html(`
                <img src="${song.imgSrc}">
                <div>
                    <span class="title">${song.title}</span>
                    <span class="artist">${song.artist}</span>
                    <span class="views"><i class="bi bi-eye"></i> ${song.views}</span>
                </div>
            `);
            songElement.on('click', function() {
                window.location.href = song.link;
            });
            searchSuggest.append(songElement);
        });

        filterArist.forEach(artist => {
            const artistElement = $('<div>').addClass('suggestion-item');
            artistElement.html(`
                <img src="${artist.avtArtist}" class="avtArtistSugg">    
                <div>
                    <span class="title">${artist.nameArtist}</span>
                    <span class="artist">

                     Artist 
                    <i class="bi bi-dot"></i>
                     Pop<span>
                </div>
            `);
            artistElement.on('click', function() {
                window.location.href = artist.link;
            });
            searchSuggest.append(artistElement);
        });
    }
});


$('label i.fa-magnifying-glass').on('click', function() {
    searchSuggest.toggle();
    const query = searchBox.val().toLowerCase();
    const toSong = songs.find(song => song.title.toLowerCase() === query);
    if(toSong) {
        window.location.href = toSong.link;
    }
});

// TODO Log in && Sign up 

const $logIn = $('#logIn');
const $signUp = $('#signp');


// Fix EFFECT
$(window).on('scroll', function() {
    const scrollPos = $(window).scrollTop();

    if (scrollPos > 50) {
        $('#header').addClass('effHeader');
    } else {
        $('#header').removeClass('effHeader');
    }

    if (600 < scrollPos && scrollPos < 1449) {
        // $('.play-list').addClass('toPos');
        // $('.title-large').addClass('toPos');
        $('.clfeatured').addClass('border');
    } else {
        $('.clfeatured').removeClass('border');
    }

    if (1450 < scrollPos && scrollPos < 2099) {
        // $('.reference').addClass('leftPos');
        $('.clnews').addClass('border');
    } else {
        $('.clnews').removeClass('border');
    }

    if (scrollPos > 2100) {
        // $('#songs').addClass('reveal');
        // $('#contact').addClass('reveal');
        // $('.videos').addClass('toPos');
        $('.clsongs').addClass('border');
    } else {
        $('.clsongs').removeClass('border');
    }
});

$(document).ready(function() {
    setTimeout(function() {
        $('.loader').fadeOut(500, function() {
            $(this).remove();
        });
    }, 1600);
});