import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Tool, TOOLS, PreviousTalk, PREVIOUSTALKS, Venue, VENUE, Talk, TALKS, UPCOMING_TALK_MONTH} from '@data/index';
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
  public previoustalks: PreviousTalk[];
  // public mentors: Hero[];
  public upcomingTalk: Talk;
  public upcomingTalkTicketLink: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.tools = TOOLS;
    this.venue = VENUE;
    this.previoustalks = PREVIOUSTALKS;
    // this.mentors = MENTORS;
    this.talks = TALKS;

    this.upcomingTalk = this.talks[UPCOMING_TALK_MONTH - 1];

    // bypass sanitization of the url so that we can display the iframe
    this.upcomingTalkTicketLink = sanitizer.bypassSecurityTrustResourceUrl(this.upcomingTalk.eventbriteIFrameLink);
  }

  ngOnInit() {

  }
}
