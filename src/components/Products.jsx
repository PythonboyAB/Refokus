import React from "react";
import Product from "./Product";

const Products = () => {
  var productData = [
    {
      id: 1,
      title: "CloudSync",
      description:
        "Experience crystal-clear audio with our latest wireless earbuds featuring active noise cancellation and 32-hour battery life. The ergonomic design ensures all-day comfort, while touch controls let you manage calls and music effortlessly. Water-resistant and equipped with premium drivers, these earbuds deliver studio-quality sound whether you're commuting, working out, or relaxing at home.",
      live: true,
      case: false,
    },
    {
      id: 2,
      title: "ErgoLux ",
      description:
        "Transform any workspace into an ergonomic powerhouse with this adjustable standing desk converter. Featuring a smooth gas-spring lift mechanism, it transitions seamlessly between sitting and standing positions in seconds. The spacious dual-tier design accommodates monitors up to 32 inches and includes a dedicated keyboard tray. Built from premium steel with a scratch-resistant surface, it supports up to 35 pounds while promoting better posture and increased productivity.",
      live: true,
      case: false,
    },
    {
      id: 3,
      title: "PureGlow",
      description:
        "Illuminate your beauty routine with this Hollywood-style vanity mirror featuring adjustable LED lighting in three color modes. The 10X magnification spot mirror ensures flawless makeup application, while the 360-degree rotation lets you find the perfect angle. Touch-sensitive controls adjust brightness levels, and the rechargeable battery provides up to 5 hours of cordless use. Perfect for makeup artists, beauty enthusiasts, and anyone seeking professional-quality lighting.",
      live: true,
      case: true,
    },
    {
      id: 4,
      title: "AeroFit",
      description:
        "Monitor your health journey with precision using this advanced fitness tracker that goes beyond step counting. Track heart rate, blood oxygen levels, sleep quality, and 20+ workout modes with medical-grade accuracy. The vibrant AMOLED display remains visible in bright sunlight, while 7-day battery life keeps you connected without constant charging. Water-resistant to 50 meters and compatible with iOS and Android, it's your personal health companion for every adventure.",
      live: true,
      case: true,
    },
    {
      id: 5,
      title: "BrewMaster",
      description:
        "Craft café-quality beverages at home with this programmable coffee maker featuring precision temperature control and a built-in burr grinder. The thermal carafe keeps coffee hot for hours without a heating plate that ruins flavor. Customize brew strength, schedule your morning cup up to 24 hours in advance, and enjoy the convenience of a 12-cup capacity. Self-cleaning function and dishwasher-safe components make maintenance effortless.",
      live: true,
      case: false,
    },
    {
      id: 6,
      title: "ZenNest",
      description:
        "Discover deeper, more restful sleep with this premium weighted blanket designed using deep pressure therapy principles. Filled with non-toxic glass beads evenly distributed in small pockets, it provides gentle, consistent pressure that reduces anxiety and promotes relaxation. The breathable cotton cover is removable and machine washable, while the blanket itself comes in multiple weights to suit your preference. Available in sizes from twin to king for ultimate comfort.",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="my-32">
      {productData.map((product) => (
        <Product val={product} />
      ))}
    </div>
  );
};

export default Products;
