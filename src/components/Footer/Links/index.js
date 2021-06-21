import links from '../../../utils/constants/footerLinks';

import './index.css';

const Links = () => {
	return (
			<nav>
				<ul className="footer__column-links">
					{ links.map(link => {
						return (
								<li className="footer__link-wrapper" key={link.name}>
									<a className="footer__link"
										 href={ link.href }
										 target="_blank"
										 rel="noreferrer">
										{ link.name }
									</a>
								</li>
						)
					}) }
				</ul>
			</nav>
	)
}

export default Links;