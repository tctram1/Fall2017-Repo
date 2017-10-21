import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ProjectModel } from '../../models/project-model';
import { reorderArray } from 'ionic-angular';

@Injectable()

export class Projects {

  projects: any[] = [];
  projectActive = false;
  timerInterval: any;
  secondsElapsed: number = 0;


  constructor(public http: Http,
              public storage: Storage) {
    console.log('Hello ProjectsProvider Provider');
  }


  load(): void {

    this.storage.get('permatimerProjects').then((projects) => {
      if(projects) {

        for(let project of projects) {
          let saveProject = new ProjectModel(project.name, new Date(project.lastChecked), project.totalSeconds, project.active);
          this.projects.push(saveProject);

          if(project.active) {
            this.startTiming(saveProject, true);
          }
        }
      }
    });

    this.storage.get('permatimerTime').then((time) => {
      this.secondsElapsed = time;
    });
  } //end of load()


  save(): void {

    this.storage.set('permatimerProjects', this.projects);
    this.storage.set('permatimerTime', this.secondsElapsed);

  } //end of save()


  reorder(indexes): void {

    this.projects = reorderArray(this.projects, indexes);
    this.save();

  } //end of reorder()


  startTiming(project, restarting): void {

    this.projectActive = true;

    if(!restarting) {
      project.setIsActive(true);
      project.setLastChecked(new Date());
    }

    this.timerInterval = setInterval(() => {

      let now =  new Date();
      let timeDifference = now.getTime() - project.lastChecked.getTime();
      let seconds = timeDifference / 1000;

      this.secondsElapsed += seconds;
      project.addToTotalSeconds(seconds);

      project.setLastChecked(now);
      this.save();

    }, 1000);

  } //end of startTiming


  stopTiming(project): number {

    let totoalTimeElapsed = this.secondsElapsed;

    this.projectActive = false;

    project.setIsActive(false);
    clearInterval(this.timerInterval);
    this.timerInterval = false;
    this.secondsElapsed = 0;
    this.save();

    return totoalTimeElapsed;

  } //end of stopTiming()


  increaseSeconds(project, amount): void {

    project.addToTotalSeconds(amount);
    this.save();

  } //end of increaseSeconds()


  decreaseSeconds(project, amount): void {

    project.deductFromTotalSeconds(amount);
    this.save();

  } //end of decreaseSeconds()


  addProject(project): void {

    this.projects.push(project);
    this.save();

  } //end of addProject()


  editProject(project, title): void {

    project.setName(title);
    this.save();

  } //end of editProject()


  removeProject(project): void {

    let index = this.projects.indexOf(project);

    if(index > -1) {
      this.projects.splice(index, 1);
      this.save();
    }

  } //end of removeProject()






} //end of export class
