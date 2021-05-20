import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import {
	Heading,
	ImageWrapper,
	Img,
	InfoColumn,
	InfoRow,
	InfoSec,
	Subtitle,
	TextWrapper,
	TopLine,
} from './InfoSection.elements';

const InfoSection = ({
	lightBg,
	imgStart,
	lightTopLine,
	lightText,
	lightTextDesc,
	buttonLabel,
	description,
	headline,
	topLine,
	primary,
	img,
	alt,
	start,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Link to='/sign-up'>
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImageWrapper start={start}>
								<Img src={img.default} alt={alt} />
							</ImageWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
