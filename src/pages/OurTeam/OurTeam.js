import './OurTeam.css';
import joe from '../../Assets/Youssef_Elwy.jpeg';
import osama from '../../Assets/Ahmed_Osama.jpeg';
import yehia from '../../Assets/Ahmed_Yehia.jpeg';
import bahy from '../../Assets/Bahy_Salama.jpeg';
import Footer from '../Footer/Footer.js';
const OurTeam = () => {
    return (
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <section class="team-section">
                <div class="team-row">
                    <h1 id="team-h1" >Our Team</h1>
                </div>
                <div class="team-row">
                    <div class="team-column">
                        <div class="team-card">
                            <div class="team-img-container">
                                <img src={osama} />
                            </div>
                            <h3>Ahmed Osama</h3>
                            <p>Software Engineer</p>
                            <div class="team-icons">
                                <a href="https://www.linkedin.com/in/ahmedosamadiab" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/AhmedOsamaAli" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:ahmedosamadiab@gmail.com" target="_blank">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team-column">
                        <div class="team-card">
                            <div class="team-img-container">
                                <img src={yehia} />
                            </div>
                            <h3>Ahmed Yehia</h3>
                            <p>Software Engineer</p>
                            <div class="team-icons">
                                <a href="https://www.linkedin.com/in/ahmed-yehia-155629206" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/AhmedHosny2" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:Ahmed.hosny4434@gmail.com" target="_blank">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-row">
                    <div class="team-column">
                        <div class="team-card">
                            <div class="team-img-container">
                                <img src={bahy} />
                            </div>
                            <h3>Bahy Salama</h3>
                            <p>Software Engineer</p>
                            <div class="team-icons">
                                <a href="https://www.linkedin.com/in/bahy-salama/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/bahylol" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:bahymohamed2010@gmail.com" target="_blank">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team-column">
                        <div class="team-card">
                            <div class="team-img-container">
                                <img src={joe} />
                            </div>
                            <h3>Youssef Elwy</h3>
                            <p>Software Engineer</p>
                            <div class="team-icons">
                                <a href="https://www.linkedin.com/in/youssef-elwy-427682268" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/youfiElwy" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:youssef47009@gmail.com" target="_blank">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default OurTeam;