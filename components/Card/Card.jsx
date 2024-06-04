import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription } from './elements';

export const Card = ({ imageSrc, title, description, link }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(link);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardImage>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};