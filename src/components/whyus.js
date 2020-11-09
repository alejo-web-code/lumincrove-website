import React, { useState } from 'react';
import ButtonLink from './buttonLink';

function WhyUs(props) {
    const { viewportWidth } = props;
    let sectionClass;
    let contentClass;
    let subtitleClass = "text-bold";
    let cardClass;
    let titleClass;

    const [selectedItem, setSelectedItem] = useState(0);

    const content = [
        {
            title: 'High-Class Specialists',
            content: 'Our specialists possess a high value of knowledge and dedication, mastering the most powerful technologies to deliver our services.'
        },
        {
            title: 'Competitive Prices',
            content: 'we have the most attractive and competitive prices in the international web development sector.'
        },
        {
            title: '24 Hour Technical Support',
            content: 'We provide 24h technical support dedicated to customer satisfaction.'
        },
        {
            title: 'Quality Results',
            content: 'We strive so that the result of our work reaches the highest values in terms of performance, speed and positioning.'
        },
        {
            title: 'Range of Services',
            content: 'We have a wide range of services that can be broken down so that our clients choose the service according to their needs.'
        }
    ];

    const dropdown = (index) => {
        setSelectedItem(index)
    }

    if (viewportWidth > '780') {
        sectionClass = 'bg-white padding-for-section'
        cardClass = 'responsive margin-bottom flex wrap'
        titleClass = 'color-cta margin-bottom text-center underline text-left'
    }
    else {
        sectionClass = 'bg-primary padding-for-section'
        cardClass = 'responsive text-reversed margin-bottom'
        titleClass = 'color-cta margin-bottom text-center'
    }

    return (
        <section className={sectionClass}>
            <h2 className={titleClass}>WHY US</h2>
            <div className={cardClass}>
                {content.map((element, index) => {
                    if (viewportWidth < '780') {
                        if (index === selectedItem) {
                            subtitleClass = 'text-bold expanded relative'
                            contentClass = 'full-height padding-top-small'
                        }
                        else {
                            subtitleClass = 'text-bold collapsed relative'
                            contentClass = 'no-height padding-top-small'
                        }
                    }

                    return (
                        <div className="w-4 inline-block margin-bottom-small card" key={index} onClick={() => dropdown(index)}>
                            <h4 className={subtitleClass}>{element.title}</h4>
                            <div className={contentClass}>
                                <p>{element.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center">
                <ButtonLink url="#" style="button cta button-get" name="GET STARTED" />
            </div>
        </section>
    )
}
export default WhyUs;
