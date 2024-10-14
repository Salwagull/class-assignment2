import React from 'react';
import cssStyle from './hero.module.css';
console.log(cssStyle)
import Link from 'next/link';

interface HeroProps {
    title: string;
    buttonText?: string;
    buttonText1?: string;
    buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, buttonText, buttonLink }) => {
    return (
        <section className={cssStyle.h1}>
            <div className={cssStyle.heroContent}>
                <h1 className={cssStyle.heroTitle}>{title}</h1>
                {buttonLink && buttonText && buttonText && (
                    <Link href={buttonLink} className={cssStyle.heroButton}>{buttonText}</Link>
                )
            }
            </div>
        </section>
    );
}

export default Hero;
