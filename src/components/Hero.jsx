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
            <h1 className="text-[4rem] leading-tight font-bold max-sm:text-[2.8rem]">
              Ismael Fuentes.
              <p className="text-[2.9rem] max-sm:text-[2.0rem]">
                <span className="text-[#6F6F6F]">Frontend developer.</span>
              </p>
            </h1>
          </Fade>
        </div>

        <Fade direction="up" delay="50" triggerOnce={true}>
          <Icons />
        </Fade>

        <Fade direction="up" delay="60" triggerOnce={true}>
          <p className="text-[#888b8f] w-[520px] max-sm:w-[365px] max-sm:text-center">
            Frontend developer Trainee.
            <br /> <br />
            Tengo habilidades en HTML5, CSS3, JavaScript, los frameworks que uso son Tailwind,
            ReactJS, y tengo conocimiento en NodeJS, NPM, PNPM, Git and Github.
          </p>
        </Fade>
      </header>
    </section>
  )
}

export default Hero
