var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

var spotlight = {
    distance: '0px',
    opacity: 0,
    delay: 100
};


// Navbar effects

var navbar = [
    ".nav1",
    ".nav2",
    ".nav3",
    ".nav4",
    ".nav5",
    ".nav6",
]

scroll.reveal('.navbar-brand', {distance: '150%',
                                origin: 'bottom',
                                opacity: 0,
                                cleanup: true
                                });
let counter = 300;
for (x in navbar) {
    console.log(counter);
    console.log(navbar[x]);
    scroll.reveal(navbar[x], {distance: '150%',
                                origin: 'bottom',
                                opacity: 0,
                                delay: counter,
                                cleanup: true
                                });
    counter = counter + 100;
}

// Intro effects

var intro = [
    ".intro1",
    ".intro2",
    ".intro3",
    ".intro4",
    ".intro-btn",
    ".intro-img",
    ".transition-div"
]

counter = 900;
for (x in intro) {
    scroll.reveal(intro[x], {distance: '50%',
                                origin: 'bottom',
                                opacity: 0,
                                delay: counter,
                                cleanup: true
                                });
    counter = counter + 100;
}

// About me on landing page

var aboutMe = [
    ".about-me-img",
    ".about-me1",
    ".about-me2",
    ".quote",
    ".about-me3",
    ".about-me4",
    ".about-me5",
    "about-me-btn"
]

counter = 200;
for (x in aboutMe) {
    console.log(aboutMe[x]);
    scroll.reveal(aboutMe[x], {distance: '20%',
                      origin: 'bottom',
                      opacity: 0,
                      delay: counter,
                      cleanup: true
                      }); 
    counter = counter + 50;
}

// Experience Section

var experience = [
    ".experience-title",
    ".ibm",
    ".cansofcom",
    ".ford",
    ".wato",
    ".uofc"
]

counter = 200;
for (x in experience) {
    scroll.reveal(experience[x], {distance: '20%',
                                origin: 'bottom',
                                opacity: 0,
                                delay: counter,
                                cleanup: true
                                });
}

// Projects Section 

var projects = [
    ".projects-title",
    ".cpu",
    ".guardian",
    ".detritusAI",
    ".fireguard"
]

counter = 200;
for (x in projects) {
    scroll.reveal(projects[x], {distance: '20%',
                        origin: 'bottom',
                        opacity: 0,
                        delay: counter,
                        cleanup: true
                        });
}

// Footer

var footer = [
    ".container",
    ".footer1",
    ".footer2",
    ".footer3",
    ".footer-icons",
    ".footer-copyright"
]

counter = 200;
for (x in footer) {
    scroll.reveal(footer[x], {distance: '20%',
                        origin: 'bottom',
                        opacity: 0,
                        delay: counter,
                        cleanup: true
                        });
}


// Specific Projects 

var specificProject = [
    ".projects-back",
    ".generic-project-title",
    ".generic-project-subheading",
    ".generic-project-desc",
    ".generic-project-video",
    ".generic-caption",
    ".generic-project-img",
    ".generic-project-subheading2",
    ".go-back",
    ".next-project",
    ".generic-project-hackathon",
    ".generic-project-prizes",
    ".guardian-img-row",
    ".guardian-img-column",
    ".detritusAI-img-flex1"
]

counter = 200;
for (x in specificProject) {
    scroll.reveal(specificProject[x], {distance: '20%',
                        origin: 'bottom',
                        opacity: 0,
                        delay: counter,
                        cleanup: true
                        });
}

// About me Page - Does not include B&W pics section

var aboutMepage = [
    ".about-me-page1-img",
    ".about-me-subheading",
    ".about-me-subheading2",
    ".about-me-description",
    ".values",
    ".about-me-sports-img",
    ".about-me-subheading",
    ".about-me-description",
    ".award-wrapper"
]

counter = 200;
for (x in aboutMepage) {
    scroll.reveal(aboutMepage[x], {distance: '20%',
                        origin: 'bottom',
                        opacity: 0,
                        delay: counter,
                        cleanup: true
                        });
}

// About me page B&W pics 
var BWPics = [
    ".bw1",
    ".bw2",
    ".bw3",
    ".bw4",
    ".bw5",
    ".bw6",
    ".bw7",
    ".bw8",
    ".bw9",
    ".bw10",
    ".bw11",
    ".bw12",
    ".bw13",
    ".bw14",
    ".bw15",
    ".bw16"
]

counter = 200;
for (x in BWPics) {
    scroll.reveal(BWPics[x], {distance: '20%',
                        origin: 'bottom',
                        opacity: 0,
                        delay: counter,
                        cleanup: true
                        });
    counter = counter + 50;
}
//scroll.destroy();
//scroll.reveal('.about-me-img', spotlight);*/
/*if(performance.navigation.type == 2)
{
    scroll.destroy();
}*/