var all_events = [
	{date: '2017-04-14',
	 time: '20:00',
	 location: 'Hill Auditorium',
	 address: '825 N University Ave, Ann Arbor, MI',
	 title: 'Schelomo with University Orchestra',
	 piece: ['Ernest Bloch - Schelomo: Rhapsodie Hébraïque'],
	 detailed_url: 'https://events.umich.edu/event/38571'},
	{date: '2016-01-29',
	 time: '20:00',
	 location: 'Paul Recital Hall, Lincoln Center',
	 address: '155 W 65th St, New York, NY',
	 title: 'The Juilliard School Master of Music Graduation Recital',
	 piece: ['Ludwig van Beethoven - Cello Sonata No. 3 in A major', 'Arvo Pärt - Fratres for Cello and Piano', 'Gaspar Cassadó - Danse du Diable Vert', 'Astor Piazzolla - Le Grand Tango', 'Works by Piazzolla arranged for Cello Quartet'],
	 detailed_url: ''},
	{date: '2015-04-15',
	 time: '18:00',
	 location: 'Paul Recital Hall, Lincoln Center',
	 address: '155 W 65th St, New York, NY',
	 title: 'The Juilliard School Bachelor of Music Graduation Recital',
	 piece: ['Ludwig van Beethoven - Cello Sonata No.5', 'Igor Stravinsky - Suite Italienne', 'Ana Sokolovic - Vez', 'Felix Mendelssohn - String Octet'],
	 detailed_url: ''},
	{date: '2018-02-26',
	 time: '10:00',
	 location: 'Britton Recital Hall',
	 address: '1100 Baits Dr, Ann Arbor, MI',
	 title: 'MASTA Chamber Music Festival',
	 piece: ['Ludwig van Beethoven - String Quartet, Op. 18, No. 6'],
	 detailed_url: 'http://astamichigan.org/events/chamber-music-festival/'},
	{date: '2018-03-25',
	 time: '16:00',
	 location: 'McIntosh Theatre',
	 address: '1100 Baits Dr, Ann Arbor, MI',
	 title: 'Michigan Chamber Players',
	 piece: ['Eric Ewazen - Angel of Dreamers'],
	 detailed_url: 'https://smtd.umich.edu/performances_events/event.php?id=11468'},
	{date: '2018-04-07',
	 time: '16:00',
	 location: 'Walgreen Center, Stamps Auditorium',
	 address: '1226 Murfin Ave, Ann Arbor, MI',
	 title: 'A Cellobration of Songs in English',
	 piece: ['Stephen Foster - Beautiful Dreamer / I Dream of Jeannie'],
	 detailed_url: 'https://smtd.umich.edu/performances_events/event.php?id=11656'},
	{date: '2018-04-07',
	 time: '20:00',
	 location: 'Temple Beth Emeth',
	 address: '2309 Packard Street, Ann Arbor, MI',
	 title: 'Concert in Celebration of Adler\'s 90th Birthday',
	 piece: ['Samuel Adler - Emunah (Faith)'],
	 detailed_url: 'http://templebethemeth.org/images/misc/TBE-Sam-Adler-Concert.pdf'},
	{date: '2018-06-20',
	 time: '19:00',
	 location: 'Britton Recital Hall',
	 address: '1100 Baits Dr, Ann Arbor, MI',
	 title: 'Center Stage Strings - Faculty Showcase',
	 piece: ['Nikolai Kapustin - Elegy, Op. 96', 'Ludwig van Beethoven - Eyeglasses Duo for Viola and Cello'],
	 detailed_url: 'http://www.centerstagestringsinstitute.com/new-page-3'},
	{date: '2018-07-11',
	 time: '19:00',
	 location: 'Britton Recital Hall',
	 address: '1100 Baits Dr, Ann Arbor, MI',
	 title: 'Center Stage Strings - Faculty and Student Collaboration Concert',
	 piece: ['Ludwig van Beethoven - String Quartet, Op. 18, No. 1'],
	 detailed_url: 'http://www.centerstagestringsinstitute.com/new-page-3'},
{date: '2018-10-14',
	 time: '14:00',
	 location: 'Michigan Theater',
	 address: '603 E Liberty St, Ann Arbor, MI',
	 title: 'Disney in Concert: Around The World&trade;',
	 piece: [''],
	 detailed_url: 'https://a2so.com/events/disney-in-concert-around-the-world/'},
{date: '2018-10-23',
	 time: '20:00',
	 location: 'Stamps Auditorium',
	 address: '1226 Murfin Ave, Ann Arbor, MI',
	 title: 'DMA First Dissertation Recital',
	 piece: ['Henri Dutilleux - Trois Strophes Sur Le Nom De Sacher (Cello)', 'Roger Sessions - Six Pieces for Cello', 'Jean Sibelius - Theme and Variations for Solo Cello', 'Geon-yong Lee - Song in the Dusk II', 'Guy Fouquet - Improvisation'],
	 detailed_url: ''},
{date: '2018-12-01',
	 time: '17:30',
	 location: 'Stamps Auditorium',
	 address: '1226 Murfin Ave, Ann Arbor, MI',
	 title: 'DMA Second Dissertation Recital',
	 piece: ['Johannes Brahms - Clarinet Sonata No. 1 and No. 2', 'Robert Schumann - Three Romances for Oboe and Piano'],
	 detailed_url: ''},
{date: '2019-04-11',
	 time: '20:00',
	 location: 'Stamps Auditorium',
	 address: '1226 Murfin Ave, Ann Arbor, MI',
	 title: 'DMA Final Dissertation Recital',
	 piece: ['Adrien-François Servais - Souvenir de Spa, Op. 2', 'Nikolai Kapustin - Nearly Waltz', 'Claude Bolling - Suite for Cello and Jazz Piano Trio'],
	 detailed_url: ''},
{date: '2020-06-24',
	 time: '19:00',
	 location: 'Britton Recital Hall',
	 address: '1100 Baits Dr, Ann Arbor, MI',
	 title: 'Center Stage Strings: Faculty Recital',
	 piece: [''],
	 detailed_url: ''},
{date: '2019-07-15',
	 time: '19:00',
	 location: 'Britton Recital Hall',
	 address: '1226 Murfin Ave, Ann Arbor, MI',
	 title: 'Center Stage Strings: Faculty Recital',
	 piece: [''],
	 detailed_url: ''},
{date: '2020-04-25',
	 time: '20:00',
	 location: 'Hill Auditorium',
	 address: '825 N University Ave, Ann Arbor, MI',
	 title: 'Ann Arbor Symphony',
	 piece: ['Works by Verdi, Berlioz, Satie, Bolcom, and Mahler'],
	 detailed_url: ''},
];

var time_int = Date.now();

var upcoming_events = [], previous_events = [];
for(var i=0;i<all_events.length;i++){
	if(Date.parse(all_events[i].date + "T" + all_events[i].time + ":00") > time_int) {
		upcoming_events.push(all_events[i]);
	}
	else{
		previous_events.push(all_events[i]);
	}
}


previous_events.sort(function(b, a){
	return (Date.parse(a.date + "T" + a.time + ":00") - Date.parse(b.date + "T" + b.time + ":00"))
});
upcoming_events.sort(function(a, b){
	return (Date.parse(a.date + "T" + a.time + ":00") - Date.parse(b.date + "T" + b.time + ":00"))
});


var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var longMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function convertTime(date, time){
	var year = date.slice(0,4);
	var month_str = month[parseInt(date.slice(5,7))-1];
	var date_int = date.slice(8,10);
	var date_str = month_str + " " + date_int + ", " + year;

	if(time == '') {
		var time_str = time;
	}
	else if(parseInt(time.slice(0,2)) > 12) {
		var time_str = "@ "+(parseInt(time.slice(0,2)) - 12).toString() + ":" + time.slice(3, 5)+" PM";
	}
	else if(parseInt(time.slice(0,2)) == 12) {
		var time_str = "@ "+time+" PM";
	}
	else {
		var time_str = "@ "+time+" AM";
	}

	return [date_str, time_str];
}

events = previous_events.concat(upcoming_events);
var hasUpcoming = '';

for (var i = 0; i < events.length ; i ++) {
	var date_time_str = convertTime(events[i].date, events[i].time);
	var piece_info = '';
	for(var j=0;j<events[i].piece.length;j++){
		piece_info += 
		'<p class="event-piece">'+events[i].piece[j]+'</p>\
		 <p class="event-lastitem"></p>';
	}
	var html_str 
	= '<div class="row events-row">\
			<div class="col-sm-4">\
				<h5>'+date_time_str[0]+'<br>'+date_time_str[1]+'</h5>\
				<h6>'+events[i].location+'</h6>\
				<h6>'+events[i].address+'</h6>\
			</div>\
			<div class="col-sm-8">'
				+ ((events[i].title=='')?'':'<p class="event-title">'+events[i].title+'</p>')
				+ piece_info +
				((events[i].detailed_url=='')?'':
				'<div class="detailed-info"><span class="event-detailed"><a target="_blank" href="'+events[i].detailed_url+'"><img src="../assets/img/infobox_icon.png"/>Detailed Info</a></span></div>')
			+'</div></div>';
	
	if (Date.parse(events[i].date + "T" + events[i].time + ":00") > time_int) {
		var year = events[i].date.slice(0,4);
		var month_str = events[i].date.slice(5,7);
		var date_int = events[i].date.slice(8,10);
		var start_time = month_str+'/'+date_int+'/'+year+' '+date_time_str[1].slice(2);
		div_cut_html_str = html_str.slice(0, html_str.length - 12);
		if(i==0) hasUpcoming = longMonth[parseInt(month_str)-1];
		div_cut_html_str +=
		'<div title="Add to Calendar" class="addeventatc">\
            Add to Calendar\
            <span class="start cal-items">'+start_time+'</span>\
            <span class="timezone cal-items">America/Detroit</span>\
            <span class="title cal-items">Caroline Kim\'s Performance</span>\
            <span class="description cal-items">'+((events[i].title=='')?'':events[i].title)+'</span>\
            <span class="location cal-items">'+events[i].location+', '+events[i].address+'</span>\
        </div></div></div>'
		$('#upcoming_events').append(div_cut_html_str);
	}
	else{
		$('#previous_events').append(html_str);
	}
}

// If there is no upcoming events
if( $('#upcoming_events').children().length < 1) {
	var no_upcoming_str 
	= '<div class="row events-row">\
			<div class="col-12">\
				<h5>No upcoming events</h5>\
			</div>\
		</div>';
	$('#upcoming_events').append(no_upcoming_str);
}
var events_row = document.getElementsByClassName('events-row');
for(var i=0;i<events_row.length;i++){
	if(!events_row[i].nextSibling) {
		events_row[i].style.borderStyle="none";
	}
}