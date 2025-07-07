import React from 'react'
import iphoneInvest from '../../assets/iphoneInvest.avif'

const DiverseInvest = () => {
  return (
    <>
      <div className="mt-30 bg-white text-[#122231]">
        <div>
          <h1 className="font-bold text-[55px]">Diverse ways to Invest</h1>
          <p className="text-[24px] mb-15">
            Grow your money and invest for your future confidently.
          </p>
        </div>

        <main className="flex bg-[#7913E5] justify-between p-10 pb-0 rounded-3xl mb-30">
          <div className=" w-[600px] text-left">
            <h1 className="font-bold text-[36px] text-white">
              Earn Up to 35% returns
            </h1>
            <p className="text-[20px] text-[#FED6F1] w-[330px]">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
          </div>
          <div className="w-[500px]">
            <img src={iphoneInvest} alt="" />
          </div>
        </main>
      </div>

      <section>
        <h1 className="text-[48px] font-bold text-[#122231]">
          Meet Our Saver of the Month
        </h1>
        <p className="text-[23px] px-[150px] mt-4 text-[#3D4F60] text-lg mb-20">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>

        <div className="max-w-4xl mx-auto p-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/2EnGMGxKuII?si=z-0aTJ7uF7CYsx10"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiverseInvest
