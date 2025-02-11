import { Link } from 'react-router-dom'
import { projects } from '../data'
import arrow from '../assets/svg/arrow.svg'
import Footer from './Footer'
import { Fade } from 'react-awesome-reveal'
import { FaReact, FaJsSquare, FaCss3Alt } from 'react-icons/fa'

const categoryIcons = {
  React: <FaReact />,
  JS: <FaJsSquare />,
  CSS: <FaCss3Alt />,
}

const Products = () => {
  return (
    <section className="max-sm:mx-4">
      <div className="mt-10 pb-14 border-t pt-10 border-t-gray-600">
        <Fade direction="up" delay="20" triggerOnce={true}>
          <h3 className="font-bold text-3xl tracking-wide mb-14">Mis proyectos</h3>
        </Fade>
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <Fade direction="up" delay="40" triggerOnce={true} key={project.id}>
              <div className="bg-[#343639] p-2 rounded-xl hover:scale-105 ease-in-out duration-300 relative card max-sm:w-[160px] h-full">
                <Link to={`/projects/${project.name}`}>
                  <div className="card-icon opacity-0">
                    <img src={arrow} alt="" className="absolute right-2 top-1" />
                  </div>
                  <div className="flex gap-2 flex-wrap h-auto text-center items-center p-1">
                    <span className=" text-lg rounded-lg font-semibold text-[#81E0FD]">
                      {categoryIcons[project.category] || project.category}
                    </span>
                    <span className="font-semibold text-base text-[#F7E025] ">
                      {categoryIcons[project.category2] || project.category2}
                    </span>
                    <span
                      className={` rounded-lg font-semibold ${
                        project.category3 === 'CSS' ? 'text-[#39ACDD]' : 'text-sm'
                      }`}
                    >
                      {categoryIcons[project.category3] || project.category3}
                    </span>
                  </div>
                  <div className="my-4">
                    <h3 className="text-sm font-semibold">{project.name}</h3>
                  </div>
                  <img
                    src={project.image1}
                    alt={project.title}
                    title={project.title}
                    className="rounded-sm h-32 w-full object-cover max-sm:h-20"
                  />
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
