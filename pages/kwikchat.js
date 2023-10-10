import React from 'react'
import { gsap } from "gsap";

export default function KwikChat() {

    React.useEffect(() => {
        animate()
    }, [])

    const animate = () => {
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
        });
        tl.fromTo('.imgWrapper .screen1', { opacity: 0, duration: 1}, { opacity: 1, duration: 1 });
        tl.to('.placeholder.screen1', { opacity: 1, delay: 2});
        tl.fromTo('.placeholder.screen1 .caption1', { opacity: 0, x: -10, css: {marginTop: '33%'}, duration: 2}, { opacity: 1, x: 0, duration: 2});
        tl.fromTo('.placeholder.screen1 .caption2', { opacity: 0, x: 10, css: {marginTop: '58%'}, duration: 2}, { opacity: 1, x: 0, duration: 2 });
        tl.to('.placeholder.screen1', { opacity: 0});
        tl.fromTo('.screen2', { opacity: 0, duration: 2}, { opacity: 1, duration: 2});
        tl.to('.placeholder.screen2', { opacity: 1, delay: 2});
        tl.fromTo('.placeholder.screen2 .caption1', { opacity: 0, x: 10, css: {marginTop: '70%'}, duration: 2}, { opacity: 1, x: 0, duration: 2});
        tl.to('.placeholder.screen2', { opacity: 0});
        tl.fromTo('.screen3', { opacity: 0, duration: 2}, { opacity: 1, duration: 2});
        tl.to('.placeholder.screen3', { opacity: 1, delay: 2});
        tl.fromTo('.placeholder.screen3 .caption1', { opacity: 0, x: -10, css: {marginTop: '33%'}, duration: 2}, { opacity: 1, x: 0, duration: 2});
        tl.fromTo('.placeholder.screen3 .caption2', { opacity: 0, x: 10, css: {marginTop: '58%'}, duration: 2}, { opacity: 1, x: 0, duration: 2 });
    
        // tl.fromTo('.screen3', { opacity: 0, duration: 4}, { opacity: 1, duration: 4 });
    }


    return (
        <div className='kwikchat'>
            <div className='imgWrapper'>
                <img src='./kwikchat/1.png' className='screen screen1' />
                <img src='./kwikchat/2.png' className='screen screen2' />
                <img src='./kwikchat/3.png' className='screen screen3' />
            </div>
            <div className='placeholder screen1'>
                <div className='box-screen left caption1'>
                    <div className='text'>Title 1</div>
                    <div className='arrow-border'></div>
                </div>
                <div className='box-screen right caption2'>
                    <div className='text'>Title 1</div>
                    <div className='arrow-border'></div>
                </div>
            </div>
            <div className='placeholder screen2'>
                <div className='box-screen right caption1'>
                    <div className='text'>Title 1</div>
                    <div className='arrow-border'></div>
                </div>
            </div>
            <div className='placeholder screen3'>
                <div className='box-screen left caption1'>
                    <div className='text'>Title 1</div>
                    <div className='arrow-border'></div>
                </div>
                <div className='box-screen right caption2'>
                    <div className='text'>Title 1</div>
                    <div className='arrow-border'></div>
                </div>
            </div>

        </div>
    )
}
