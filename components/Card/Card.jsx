import React from 'react';
import Image from 'next/image';
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription } from './elements';

export const Card = ({ imageSrc, title, description, link }) => {
    const handleCardClick = () => {
        window.open(link, '_blank');
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <CardImage>
                <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
            </CardImage>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </CardContainer>
    );
};
