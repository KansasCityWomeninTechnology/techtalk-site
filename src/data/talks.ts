// export interface Topic {
//     name: string;
//     slidesLink: string;
//     worksheetLink: string;
//     areLinksEnabled: boolean;
// }

// export const TOPICS: Topic[] = [{
//     name: 'The Glass: HTML',
//     slidesLink: 'http://bit.ly/cnchtmlslide',
//     worksheetLink: 'http://bit.ly/cnchtmlwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Garnish: CSS',
//     slidesLink: 'http://bit.ly/cnccssslides',
//     worksheetLink: 'http://bit.ly/cnccsswork',
//     areLinksEnabled: true
// }, {
//     name: 'The Rocks: Git',
//     slidesLink: 'http://bit.ly/cncgitslides',
//     worksheetLink: 'http://bit.ly/cncgitwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Liquor: JavaScript',
//     slidesLink: 'http://bit.ly/cncjavascriptslides',
//     worksheetLink: 'http://bit.ly/cncjavascriptwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Mixer: Interactive',
//     slidesLink: 'http://bit.ly/cncinteractiveslides',
//     worksheetLink: 'http://bit.ly/cncinteractivework',
//     areLinksEnabled: true
// }, {
//     name: 'Enjoy! CodeJam',
//     slidesLink: 'http://bit.ly/CnCNovSlides',
//     worksheetLink: 'http://bit.ly/cncenjoywork', // not created yet. need to figure out name
//     areLinksEnabled: false
// }];

export interface Talk {
    date: string;
    time: string;
    name: string;
    eventbriteLink: string;
    eventbriteIFrameLink: string;
    areLinksEnabled: boolean;
}

export const TALKS: Talk[] = [{
    date: '2019-09-18',
    time: '6-8pm',
    name: 'TechTalk Discovers: Open Source Contribution',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalk-discovers-open-source-contribution-tickets-63666010752',
    eventbriteIFrameLink: 'eventbrite.com/tickets-external?eid=63666010752',
    areLinksEnabled: true
}];

// Month to display for upcoming talk. Use 7 for July, 8 for Aug, etc
// N.B. The -1 is due to the schedule shift in 2019 and needs to be removed in 2020.
export const UPCOMING_TALK_MONTH = 9;

