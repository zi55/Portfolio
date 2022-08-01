import React from "react";
import '../Style/Home.css'
import About from '../components/About'
import Skills from "../components/Skills";
import Services from '../components/Services'
import Interest from '../components/Interest'
import Favorite from "../components/FavoriteInterest";
import Contact from '../components/Contact'
let NavLink = [
  {
    txt: 'Front-end programming',
    txt1: 'Personal',
    txt2: 'Language',

    txt000:'HTML/CSS',
    txt001:'100%',

    txt002:'JavaScript',
    txt003:'90%',

    txt004:'React',
    txt005:'75%',

    txt006:'Vue',
    txt007:'70%',

    txt008:'Committed',
    txt009:'100%',

    txt010:'Leadership',
    txt011:'90%',

    txt012:'Communicative',
    txt013:'70%',

    txt014:'lucky',
    txt015:'50%',

    txt016:'Russian',
    txt017:'100%',

    txt018:'Uzbek',
    txt019:'90%',

    txt020:'English',
    txt021:'50%',

    txt022:'Tajik',
    txt023:'70%',

    url: "/",
  },
];

export default function Home() {
  return (
    <div className="home container">
      <About/>
      <Skills arrLink={NavLink}></Skills>
      <Services></Services>
      <Interest></Interest>
      <Favorite></Favorite>
      <Contact></Contact>
    </div>
  );
}