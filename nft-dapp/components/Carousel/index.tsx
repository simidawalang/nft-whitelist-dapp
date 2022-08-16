import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="image-carousel">
      <div className="glass-card">
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1660647336/nft-dapp/sango_uqi2zd.png"
          alt="Sango"
          width={326}
          height={375}
        />
      </div>
      {/* <div className="glass-card">
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1660647336/nft-dapp/sango_uqi2zd.png"
          alt="Sango"
          width={326}
          height={375}
        />
      </div>
      <div className="glass-card">
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1660647336/nft-dapp/sango_uqi2zd.png"
          alt="Sango"
          width={326}
          height={375}
        />
      </div> */}
    </div>
  );
};

export default Carousel;
