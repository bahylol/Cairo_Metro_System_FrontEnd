import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer__addr">
					<h1 className="footer__logo">RetroMetro</h1>

					<a href="/ourteam">Contact Us</a>

					<address>
						5534 Somewhere In. The World 22193-10212
						<br />
						<a className="footer__btn" href="mailto:metronoreplystation@gmail.com">
							Email Us
						</a>
					</address>
				</div>

				<ul className="footer__nav">
					<li className="nav__item">
						<h2 className="nav__title">Media</h2>

						<ul className="nav__ul">
							<li>
								<a href="#">Online</a>
							</li>

							<li>
								<a href="#">Print</a>
							</li>

							<li>
								<a href="#">Alternative Ads</a>
							</li>
						</ul>
					</li>

					<li className="nav__item nav__item--extra">
						<h2 className="nav__title">Technology</h2>

						<ul className="nav__ul nav__ul--extra">
							<li>
								<a href="#">Hardware Design</a>
							</li>

							<li>
								<a href="#">Software Design</a>
							</li>

							<li>
								<a href="#">Digital Signage</a>
							</li>

							<li>
								<a href="#">Automation</a>
							</li>

							<li>
								<a href="#">Artificial Intelligence</a>
							</li>

							<li>
								<a href="#">IoT</a>
							</li>
						</ul>
					</li>

					<li className="nav__item">
						<h2 className="nav__title">Legal</h2>

						<ul className="nav__ul">
							<li>
								<a href="#">Privacy Policy</a>
							</li>

							<li>
								<a href="#">Terms of Use</a>
							</li>

							<li>
								<a href="#">Sitemap</a>
							</li>
						</ul>
					</li>
				</ul>

				<div className="legal">
					<p>&copy; 2019 Something. All rights probably not reserved.</p>
					<div className="legal__links">
						<span>
							Made with <span className="heart">♥</span> remotely from Anywhere
						</span>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 col-xs-12">
					<ul class="social-icons">
						<li>
							<a class="facebook" href="https://www.facebook.com/">
								<FacebookIcon className="icon" />
							</a>
						</li>
						<li>
							<a class="twitter" href="https://www.twitter.com/">
								<TwitterIcon className="icon" />
							</a>
						</li>
						<li>
							<a class="linkedin" href="https://www.linkedin.com/">
								<LinkedInIcon className="icon" />
							</a>
						</li>
						<li>
							<a class="insta" href="https://www.instagram.com/">
								<InstagramIcon className="icon" />
							</a>
						</li>
						<li>
							<a class="youtube" href="https://www.youtube.com/">
								<YouTubeIcon className="icon" />
							</a>
						</li>
						<li>
							<a class="git" href="https://www.github.com/">
								<GitHubIcon className="icon" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
