import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Tool, TOOLS, Hero, LEADERS, MENTORS, Venue, VENUE, Talk, TALKS, UPCOMING_TALK_MONTH } from '@data/index';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: Tool[];
  public venue: Venue;
  public map;
  public zm = 15;
  public talks: Talk[];
  public leaders: Hero[];
  public mentors: Hero[];
  public upcomingTalk: Talk;
  public upcomingTalkTicketLink: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.tools = TOOLS;
    this.venue = VENUE;
    this.leaders = LEADERS;
    this.mentors = MENTORS;
    this.talks = TALKS;
    // console.log(this.talks);

    this.upcomingTalk = this.talks[UPCOMING_TALK_MONTH];
    console.log(this.talks);
    console.log(UPCOMING_TALK_MONTH);
    console.log(this.upcomingTalk);

    // bypass sanitization of the url so that we can display the iframe
    this.upcomingTalkTicketLink = sanitizer.bypassSecurityTrustResourceUrl(this.upcomingTalk.eventbriteIFrameLink);
  }

  ngOnInit() {

  }
}
