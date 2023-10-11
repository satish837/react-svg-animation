import React from 'react'
import { gsap } from "gsap";

export default function Hundred() {
  
    React.useEffect(() => {
        animate()
      }, [])

    const animate = () => {
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
        });
        tl.fromTo('.hundred', {x: -3, y: -5, duration: 1, repeat: -1, yoyo: true}, {x: 3, y: 5, duration: 1, repeat: -1, yoyo: true});
    }

    
  return (
    <div>
      <img className="hundred" src='/hundred.svg'/>
    </div>
  )
}
