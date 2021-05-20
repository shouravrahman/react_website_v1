import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
	FooterContainer,
	FooterLink,
	FooterLinksContainer,
	FooterLinksItems,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput,
	SocialIcon,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from './Footer.elements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to recieve the latest news and trends.
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name='email' type='email' placeholder='Your Email' />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to='/sign-up'>How It Works</FooterLink>
						<FooterLink to='/'>Testimonials</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Investors</FooterLink>
						<FooterLink to='/'>Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Contact Us</FooterLinkTitle>
						<FooterLink to='/'>Contact</FooterLink>
						<FooterLink to='/'>Support</FooterLink>
						<FooterLink to='/'>Destinations</FooterLink>
						<FooterLink to='/'>Sponsorships</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>Videos</FooterLinkTitle>
						<FooterLink to='/'>Submit Videos</FooterLink>
						<FooterLink to='/'>Ambassadors</FooterLink>
						<FooterLink to='/'>Agency</FooterLink>
						<FooterLink to='/'>Influencer</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to='/'>Instagram</FooterLink>
						<FooterLink to='/'>Facebook</FooterLink>
						<FooterLink to='/'>Youtube</FooterLink>
						<FooterLink to='/'>Twitter</FooterLink>
						<FooterLink to='/'>LinkedIn</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to='/'>
						<SocialIcon />
						ULTRA
					</SocialLogo>
					<WebsiteRights>ULTRA © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href='/' target='_blank'>
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href='/' target='_blank'>
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href='/' target='_blank'>
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href='/' target='_blank'>
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href='/' target='_blank'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
