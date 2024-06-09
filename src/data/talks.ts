export interface Talk {
    date: string;
    time: string;
    name: string;
    eventbriteLink: string;
    eventbriteIFrameLink: string;
    areLinksEnabled: boolean;
}

export const TALKS: Talk[] = [{
    date: '2024-01-12',
    time: '6-8pm',
    name: 'TechTalk January',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-career-panel-taking-action-to-grow-your-career-tickets-881654120207',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
},
  {
    date: '2020-02-12',
    time: '6-8pm',
    name: 'TechTalk February',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-career-panel-taking-action-to-grow-your-career-tickets-881654120207',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-03-12',
    time: '6-8pm',
    name: 'TechTalk March',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-career-panel-taking-action-to-grow-your-career-tickets-881654120207',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-04-26',
    time: '6-8pm',
    name: 'TechTalk April',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-career-panel-taking-action-to-grow-your-career-tickets-881654120207',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-05-21',
    time: '6-8pm',
    name: 'TechTalk May',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-conference-success-tickets-898765530897',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=898765530897',
    areLinksEnabled: true
  },
  {
    date: '2020-06-12',
    time: '6-8pm',
    name: 'TechTalk June',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=920208677927',
    areLinksEnabled: true
  },
  {
    date: '2020-07-12',
    time: '6-8pm',
    name: 'TechTalk July',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-08-12',
    time: '6-8pm',
    name: 'TechTalk August',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-09-12',
    time: '6-8pm',
    name: 'TechTalk September',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
{
    date: '2020-10-12',
    time: '6-8pm',
    name: 'TechTalk October',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-11-12',
    time: '6-8pm',
    name: 'TechTalk November',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  },
  {
    date: '2020-12-12',
    time: '6-8pm',
    name: 'TechTalk December',
    eventbriteLink: 'https://www.eventbrite.com/e/kcwit-techtalks-tech-founders-tickets-920208677927',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=881654120207',
    areLinksEnabled: true
  }];

// Month to display for upcoming talk. Use 7 for July, 8 for Aug, etc
// This should be the index + 1 of the month in the TALKS array
export const UPCOMING_TALK_MONTH = 5 + 1;

