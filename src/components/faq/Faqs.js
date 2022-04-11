import React from 'react'
import Faq from './Faq'
import "./Faq.css"
const Faqs = () => {
  return (
    <div className='faqs'>
        <h1 className='hey'>FAQ</h1>
        <div className="faqo">
        <Faq question="What is IcApes?" answer="IcApes is a 6-issue graphic novel universe a decade in the making from acclaimed Sci-Fi concept artist Burak Demir. The multi-installment saga includes digital and physical versions of the comic, as well as a variety of unique NFT collectibles also redeemable in the physical world. The story is set on Fury-7, a desolate, post-apocalyptic planet abandoned and forgotten by most of humanity. Now humans, robots and A.I. must fend for survival in a barren world." />
        <Faq  question="Who is Burak Demir? " answer="Burak Demir is a concept designer and graphic artist behind some of the biggest gaming and film titles in the world. As senior concept designer for the Halo and Call of Duty dynasties, Mauro’s character, world, weaponry, and mobile designs have helped make the series two of the most successful in gaming history. His visions have graced the big screen in films such as The Hobbit series, Elysium, Chappie, and Spider-Man 2." />
        <Faq question="How to buy IcApes?" answer="IcApes NFTs are available for purchase exclusively at IcApessaga.com. Fans need only an active ETH wallet to obtain a variety of unique collectible items, including ISSUE 1: The Discovery - available for .1 ETH on Friday, October 15th. For those looking to stay up to date on future drop information and pricing, follow @IcApessaga on Twitter and join the hunt on the Discord channel."/>
    </div></div>
  )
}

export default Faqs