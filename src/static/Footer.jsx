import React from 'react'
import compliance from '../assets/compliance.avif'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import tiktok from '../assets/tiktok.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 justify-between gap-70 mt-40 max-tablet:grid grid-cols-2">
        <div>
          <div className="w-[300px] mb-[20px]">
            <img src="./footerlogo.svg" alt="" />
          </div>
          <div className="w-[150px]">
            <img src={compliance} alt="" />
          </div>
        </div>

        <section className="flex justify-between max-tablet:flex-wrap gap-30 text-left mb-15 max-tablet:grid grid-cols-2">
          <main>
            <p className="text-[#122231]">Products</p>
            <ul>
              <li>
                <a href="#">Piggybank</a>
              </li>
              <li>
                <a href="./Invest">Invest</a>
              </li>
              <li>
                <a href="#">Safelock</a>
              </li>
              <li>
                <a href="#">Target savings</a>
              </li>
              <li>
                <a href="#">Flex Naira</a>
              </li>
              <li>
                <a href="#">Flex Dollar</a>
              </li>
            </ul>
          </main>

          <main>
            <p className="text-[#122231]">Company</p>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </main>

          <main>
            <p className="text-[#122231]">Legal</p>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </main>

          <main>
            <div className="flex gap-3 justify-center">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={tiktok} alt="" />
              <img src={youtube} alt="" />
            </div>
            <p>
              <a href="#">
                {" "}
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </a>
            </p>
            <span>
              <a href="#">contact@piggyvest.com</a>
            </span>
            <span>
              <a href="#">+234 700 933 9339</a>
            </span>
          </main>
        </section>
      </div>

      <section className="border-t-1 border-grey-100 text-left text-[11px]">
        <p className="pt-8 text-[#818C97] pr-[450px] mb-10">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="text-[#303EAB]">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </section>
    </>
  );
}

export default Footer
