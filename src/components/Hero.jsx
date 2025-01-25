/* eslint-disable react/no-unescaped-entities */
import avatar from '../assets/avatar.jpeg'
import Icons from './Icons'
import { Fade } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <section>
      <header>
        <div className="text-start max-sm:text-center items-center">
          <Fade direction="up" delay="10" triggerOnce={true}>
            <img
              src={avatar}
              className="max-w-[200px] rounded-full bg-[#2d2f31] mx-auto my-10 max-sm:max-w-[160px]"
            />
          </Fade>

          {/* here change your name and add or reduce font size of P tag and H1 */}
          <Fade direction="up" delay="40" triggerOnce={true}>
            <div className="titu text-[4rem] leading-tight font-bold max-sm:text-[2.8rem]">
              <h1>Ismael Fuentes.</h1>
              <p className="text-[2.9rem] max-sm:text-[2.0rem] flex flex-col ">
                <h2 className=" dev text-[#6F6F6F]">Desarrollador Frontend.</h2>
                <span className='text-[#6F6F6F] text-[15px]'>Trainee.</span>
              </p>
            </div>
          </Fade>
        </div>

        <Fade direction="up" delay="50" triggerOnce={true}>
          <Icons />
        </Fade>

        <Fade direction="up" delay="60" triggerOnce={true}>
          <div className="text-[#888b8f] w-[520px] max-sm:w-[365px] max-sm:text-center">
            <br />
            <div className='i-icons'>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-brands fa-npm"></i>
              <i class="fa-brands fa-git-alt"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </Fade>
      </header>
    </section>
  )
}

export default Hero
