import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css";
interface Headline {
    id: number; 
    title: string;
    url: string;
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    const headlines: Headline[] = data.data;
    console.log(headlines);
    return (
        <div className="bg-gray-200">
            <div className="flex max-w-7xl mx-auto items-center gap-2 overflow-hidden">
                <div className="font-bold text-lg py-1 px-4">সর্বশেষ</div>
            <MarqueeText direction="right" duration={10}>
            {headlines.map(h => <span key={h.id}>
                <span>{h.title}</span>
                <span className="mx-2">•</span>
            </span>)}
            </MarqueeText>

            </div>
        </div>
    );
};

export default Marquee;