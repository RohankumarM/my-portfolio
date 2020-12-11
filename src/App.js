import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, ListItemIcon } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import TourWebsite from './images/TourWebsite.jpg';
import CovidTracker from './images/covidTracker.JPG';
import WebRTC from './images/FrontView.JPG';
import ExploreMERN from './images/ExploreMERN.JPG';
import ProfilePic from './images/Profile_Picture.svg';
import FrontEnd from './images/frontend-icon.svg';
import BackEnd from './images/backend-icon.svg';
import OtherSkills from './images/other-skills-icon.svg';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import './App.css';

const App = () => {

  const [emailSent, setEmailSent] = useState('');
  const [disabled, setDisabled] = useState(false);


  const navbar = useRef();
  const menu = useRef();
  const menuBtn = useRef();
  const cancelBtn = useRef();
  const spanRef = useRef();
  const emailConfirmationRef = useRef();

  const title = "RohanM";
  let rewriteTxt = ['Web Apps', 'Mobile Apps'];

  useEffect(() => {
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    (function typing() {
      if (count === rewriteTxt.length) {
        count = 0;
      }
      currentText = rewriteTxt[count];
      letter = currentText.slice(0, ++index);
      document.querySelector('.typing-animate').textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(typing, 250);
    }());
  });

  const frontEndSkills = ['React/Redux', 'Javascript', 'HTML/CSS/Material-UI', 'Gulp/Webpack'];
  const backEndSkills = ['Express', 'Python', 'Node.js', 'MySQL', 'MongoDB'];
  const otherSkills = ['React Native', 'Firebase', 'Android', 'Java', 'Git']

  const projectDetails = [
    {
      projectName: 'Travel website blog using MERN',
      projectDetails: 'React, MongoDB, Express, Nodejs, RESTApis',
      projectImg: ExploreMERN,
      projectDemo: 'https://exploreplacesandsave.web.app/5f8e93487dff4a3428632341/places',
      projectGithub: 'https://github.com/RohankumarM/MERN'
    },
    {
      projectName: 'Covid-19 Tracker',
      projectDetails: 'HMTL, CSS, React, Material-UI, AlanAI, leaflet, Chartjs, React-Router, APIs, axios, classnames, disease.sh',
      projectImg: CovidTracker,
      projectDemo: 'https://covid19-tracker-67026.web.app/',
      projectGithub: 'https://github.com/RohankumarM/COVID-19-Tracker'
    },
    {
      projectName: 'P2P Video Call using WebRTC',
      projectDetails: 'ejs, express, socketio, peerjs, uuid',
      projectImg: WebRTC,
      projectDemo: 'https://rohan-video-calling-app.herokuapp.com/',
      projectGithub: 'https://github.com/RohankumarM/WebRTC'
    },
    {
      projectName: 'Tour Website',
      projectDetails:
        'HTML, CSS, React-Redux, bootstrap, express, axios, proxy, nedb, bcrypt.js, chai, cookies, mocha',
      projectImg: TourWebsite,
      projectDemo: '',
      projectGithub: 'https://github.com/RohankumarM/Tour-website-using-React-RestAPI-MongoDB'
    }
  ];

  window.onscroll = () => {
    window.pageYOffset > 40 ? navbar.current.classList.add('sticky') : navbar.current.classList.remove('sticky');
  }

  const handleMenuBtn = () => {
    menu.current.classList.add('active');
    menuBtn.current.classList.add('hide');
    document.body.classList.add('disabledScroll');
  };

  const handleCancelBtn = () => {
    menu.current.classList.remove('active');
    menuBtn.current.classList.remove('hide');
    document.body.classList.remove('disabledScroll');
  };

  const closeMenu = () => {
    menu.current.classList.remove('active');
    menuBtn.current.classList.remove('hide');
  }

  useEffect(() => {
    if (emailSent) {
      emailConfirmationRef.current.classList.add('show');
    }
  }, [emailSent]);

  const handleContactUs = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jxtnv6r', 'template_izg18sf', e.target, 'user_VN895HN5a3odRa4u4Jz1i')
      .then((result) => {
        setEmailSent(true);
        setDisabled(true);
      }, (error) => {
        console.log(error.text);
      });
  }

  const goToAbout = () => {
    document.getElementById('about').scrollIntoView(true);
  }

  const goToSkills = () => {
    document.getElementById('skills').scrollIntoView(true);
  }

  const goToProjects = () => {
    document.getElementById('projects').scrollIntoView(true);
  }

  const goToHireMe = () => {
    document.getElementById('sayHello').scrollIntoView(true);
  }

  return (
    <div className="app">
      <nav>
        <div className="navbar" ref={navbar}>
          <div className="content">
            <div className="logo">
              <a href="#about">
                <h3> <span className="title-lt">&lt;</span>{`${title}/`}<span className="title-gt">&gt;</span> </h3>
              </a>
            </div>

            <ul className="menu-list" ref={menu} onClick={closeMenu} >
              <div className="icon cancel-btn" ref={cancelBtn} onClick={handleCancelBtn}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <li onClick={goToAbout}>About</li>
              <li onClick={goToSkills}>Skills</li>
              <li onClick={goToProjects}>Projects</li>
              <li onClick={goToHireMe}>Hire Me</li>
            </ul>
            <div className="icon menu-btn" ref={menuBtn} onClick={handleMenuBtn}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </nav>

      {/* About */}
      <div id="about">
        <div className="about-desc">
          <h1>Hi, My Name is <span style={{ color: '#45B8AD' }}>Rohan Maisuria</span></h1>
          <h1>i <em>design</em> and develop <span className="typing-animate" ref={spanRef}></span></h1>

          <div className="social-media">
            <ul className="social-media-icons">
              <li><a href="https://www.facebook.com/rohan.maisuria.7" target="_blank" rel="noopener noreferrer" alt="facebook"><FacebookIcon /></a></li>
              <li><a href="https://www.linkedin.com/in/rohan-maisuria-458397172/" target="_blank" rel="noopener noreferrer" alt="linkedin"><LinkedInIcon /></a></li>
              <li><a href="https://github.com/RohankumarM" target="_blank" rel="noopener noreferrer" alt="github"><GitHubIcon /></a></li>
            </ul>
          </div>
        </div>
        <div className="profilepic">
          <img src={ProfilePic} alt="Profile Pic" />
        </div>



        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


      {/* Skills */}
      <div id="skills">
        <div className="skills-main-title">
          <h1>Skills</h1>
        </div>
        <div className="skills-desc">
          <div className="skills__column">
            <Card className="frontend__details" variant="outlined">
              <CardContent>
                <div className="img-container">
                  <img className="frontend-avatar" src={FrontEnd} alt=""></img>
                </div>
                <h4 className="skills__title">Frontend</h4>
                {frontEndSkills.map((skill, index) => {
                  return (
                    <List className="list__container" key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <AlbumRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={skill} />
                      </ListItem>
                    </List>
                  )
                })}


              </CardContent>
            </Card>
          </div>

          <div className="skills__column">
            <Card className="frontend__details" variant="outlined">
              <CardContent>
                <div className="img-container">
                  <img className="frontend-avatar" src={BackEnd} alt=""></img>
                </div>
                <h4 className="skills__title">Backend</h4>
                {backEndSkills.map((skill, index) => {
                  return (
                    <List className="list__container" key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <AlbumRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={skill} />
                      </ListItem>
                    </List>
                  )
                })}

              </CardContent>
            </Card>
          </div>

          <div className="skills__column">
            <Card className="frontend__details" variant="outlined">
              <CardContent>
                <div className="img-container">
                  <img className="frontend-avatar" src={OtherSkills} alt=""></img>
                </div>
                <h4 className="skills__title">Other Skills</h4>
                {otherSkills.map((skill, index) => {
                  return (
                    <List className="list__container" key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <AlbumRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={skill} />
                      </ListItem>
                    </List>
                  )
                })}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        <div className="projects-container">
          {projectDetails.map((project, index) => {
            return (
              <Card className="project-root" key={index}>
                <CardActionArea>
                  <CardMedia
                    className="media"
                    image={project.projectImg}
                    title={project.projectName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.projectDetails}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card-actions">
                  {project.projectDemo.length === 0 ? <div>Not Hosted</div> :
                    <a href={project.projectDemo} target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                      View
                  <FontAwesomeIcon icon={faEye} className="view-icon" />
                    </Button></a>
                  }

                  <a href={project.projectGithub}><Button size="small" color="primary">
                    Github
                  <GitHubIcon className="github-icon" />
                  </Button></a>
                </CardActions>
              </Card>
            )
          })

          }
        </div>
      </div>

      {/* Say Hello */}
      <div id="sayHello">
        <h1>Say Hello!</h1>
        <div className="contact-form">
          <form onSubmit={handleContactUs}>
            <input className="contact-input" name="name" type="text" required placeholder="Name"></input>
            <input className="contact-input" name="email" type="text" required placeholder="Email"></input>
            <textarea className="contact-input" name="message" type="text" required placeholder="Message"></textarea>
            {emailSent ? <div ref={emailConfirmationRef} className=" email-confirm">Email Sent</div> : <div className="email-confirm">Email not sent!</div>}
            <input type="submit" value="Submit" disabled={disabled}></input>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
