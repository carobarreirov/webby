// home - landing content 
// ----------------------------------

(function (){

    // get home div
    var home = document.getElementById('home');

    // html string
    var html = `
    <!-- Content START -->
    <div class="container">

        <!-- Title -->
        <div class="row align-items-center g-5">


            <!-- -------------- Left content START -------------- -->
            <div class="col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-5 mb-sm-0">

                <!-- Title -->
                <h1 class="mb-0 display-6">Beautiful Patterns</h1>
                
                <!-- Content -->
                <p class="my-2 lead"> Beautiful Patterns is an interdisciplinary effort that seeks high-impact solutions to the complex socialtechnical challenge of women's STEM education, with and emphasis in computation, in the developing world.</p>

                Announcements:                
                <div class="row g-2 d-flex justify-content-center">                

                    <div class="col-sm-12 col-md-8 col-xl-6">
                        <mit-main-announcement
                            color="warning"
                            title="Bootcamps"
                            data="bootcamp_announcements.js"
                        ></mit-main-announcement>
                    </div>
                    <div class="col-sm-12 col-md-8 col-xl-6">
                        <mit-main-announcement
                            color="blue"
                            title="Courses"
                            data="courses_announcements.js"                     
                        ></mit-main-announcement>
                    </div>
                    <div class="col-sm-12 col-md-8 col-xl-6">
                        <mit-main-announcement
                            color="purple"
                            title="Team"
                            data="people_announcements.js"
                        ></mit-main-announcement>
                    </div>
                
                    <div class="col-sm-12 col-md-8 col-xl-6">
                        <mit-main-announcement
                            color="info"
                            title="Media"
                            data="media_announcements.js"                     
                        ></mit-main-announcement>
                    </div>

                    <mit-consumer></mit-consumer>
                </div>


                Videos:
                <div class="row g-2 d-flex justify-content-center">                

                    <div class="col-sm-8 col-md-8 col-xl-8">

                        <a href="" data-bs-toggle="tooltip" data-bs-title="test">
                            <div class="d-flex p-1 bg-dark rounded-3">
                              <div class="ms-2 h6 fw-normal mb-0">
                                <div class="d-flex">
                                  <h5 class="mb-0 text-truncate text-white" style="max-width: 200px;"><i class="fab fa-youtube"></i> Courses</h5>
                                </div>                
                              </div>
                            </div>
                        </a>

                    </div>

                    <div class="col-sm-8 col-md-8 col-xl-8">

                        <a href="" data-bs-toggle="tooltip" data-bs-title="test">
                            <div class="d-flex p-1 bg-dark rounded-3">
                              <div class="ms-2 h6 fw-normal mb-0">
                                <div class="d-flex">
                                  <h5 class="mb-0 text-truncate text-white" style="max-width: 200px;"><i class="fab fa-youtube"></i> Bootcamps</h5>
                                </div>                
                              </div>
                            </div>
                        </a>

                    </div>



                </div>


            </div>
            <!-- -------------- Left content END -------------- -->

            <!-- -------------- Right content START -------------- -->
            <div class="col-lg-7 col-xl-6 text-center position-relative">

                <div class="container">             
                                    
                            
                            <!-- Slider START -->
                            <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
                                <div class="tiny-slider-inner" data-autoplay="false" data-gutter="0" data-arrow="true" data-dots="false" data-items="1">


                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/images/main/columns_blur.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">

                                                <h1 class="text-white display-6">MIT GDC</h1>

                                                <div class="row g-2">
                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="bootcamps.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-university"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Bootcamps</h5>
                                                                    </div>
                                                                    <p class="mb-0">Bootcamps instances</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div class="row g-2">

                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="courses.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-laptop-code"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Course</h5>
                                                                    </div>
                                                                    <p class="mb-0">Online Courses</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div class="row g-2">

                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="people.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-users"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Team</h5>
                                                                    </div>
                                                                    <p class="mb-0">Meet the team</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>                                          

                                                <div class="row g-2">


                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="contribute.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-hand-holding-medical"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Contribute</h5>
                                                                    </div>
                                                                    <p class="mb-0">Support Beautiful Patterns</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->                                  
                                    

                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/images/main/bp_blur.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">
                                                <div class="row justify-content-center">
                                                    <div class="col-11 col-lg-7">
                                                        <!-- Title -->
                                                        <h1 class="text-white display-6">Discover Beautiful Patterns</h1>
                                                        <p class="text-white">GDC Outreach - Teaching computation to women in Latin America.
                                                            <a href="https://dreamers.mit.edu" class="link-warning">Project Information.</a> 
                                                        </p>
                                                        <!-- Button -->
                                                        <a href="https://www.youtube-nocookie.com/embed/TdjFj4CNvGM" class="btn btn-warning mb-0 glightbox3"><i class="fas fa-play-circle"></i> Video: Crazy Idea</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->
            

                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/images/main/university_blur.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">
                                                <div class="row justify-content-center">
                                                    <div class="col-11 col-lg-7">
                                                        <!-- Title -->
                                                        <h1 class="text-white display-6">Discover Lifelong Learning</h1>
                                                        <p class="text-white">This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College, University, Courses Hub, Training Center, or any Academy.</p>
                                                        <!-- Button -->
                                                        <a href="courses.html" class="btn btn-outline-white mb-0">Learn More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->                                  


                                </div>
                            </div>
                            <!-- Slider END -->

                            

                </div>
                
            </div>
            <!-- -------------- Right content END -------------- -->
        </div>
    </div>
    <!-- Content END -->
    `;


    // set html for home
    home.innerHTML = html;
})();

