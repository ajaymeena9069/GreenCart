import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  return (
    <section className='home-section container'>
      <div className="grid grid-col-2 home-hero-section">
        <div className='home-section-heading'>
          <h1>Freshness You Can Trust, Savings You Will Love, Quality You Deserve!</h1>
          <button className='btn home-section-btn'>Shop now</button>
          <button className="home-explore-btn"><div><span>Explore deals</span> <FaArrowRightLong /></div></button>
        </div>
        <div className='home-hero-img'>
          <img src="public\img\pngwing.com.png" alt="" />
        </div>
      </div>
    </section>
  )
}
