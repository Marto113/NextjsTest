import React from "react";
import { Card } from "../../components/Card";
import {
	GlobalStyle,
	BackgroundDiv,
	StyledContainer,
	StyledTitle,
	StyledDescription,
	StyledTextContainer,
	StyledImageAndCardsContainer,
	StyledImageWrapper,
	StyledImageContainer,
	StyledCardsWrapper,
} from "./elements";

export const CardSection = () => {
	return (
		<>
			<BackgroundDiv>
				<StyledContainer>
					<StyledTextContainer>
						<StyledTitle>Managed agency selection</StyledTitle>
						<StyledDescription>Strengthen your onboarding process</StyledDescription>
					</StyledTextContainer>
					<StyledImageAndCardsContainer>
						<StyledImageWrapper>
							<StyledImageContainer>
								<img src="/img/video.png" alt="example" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
							</StyledImageContainer>
						</StyledImageWrapper>
						<StyledCardsWrapper>
							<Card
								imageSrc="/img/i3.png"
								title="Brief"
								description="Complete brief writing or simple guidance on what to include, we’ve got you covered."
								link="https://www.goodbrief.io/"
							/>
							<Card
								imageSrc="/img/i3.png"
								title="Search"
								description="In-depth agency search covering; criteria matching, door knocking and due-diligence vetting."
								link="/link"
							/>
							<Card
								imageSrc="/img/i3.png"
								title="Pitch"
								description="Comprehensive pitch management, including comms, diary management and pitch hosting."
								link="/link"
							/>
						</StyledCardsWrapper>
					</StyledImageAndCardsContainer>
				</StyledContainer>
			</BackgroundDiv>
		</>
	);
};