import { FiGithub } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'

const Icons = () => {
  return (
    <>
      <div className="flex my-3 max-sm:flex-col max-sm:items-center max-sm:py-6">
        <a
          target="blank"
          href="mailto:if.dev327@gmail.com"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <AiOutlineMail style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Email</p>
        </a>

        <a
          target="blank"
          href="https://github.com/Ismael-dev-v2"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-3 max-sm:w-[14rem]"
        >
          <FiGithub style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Github</p>
        </a>

        <a
          target="blank"
          href='/Ismael-Fuentes-curriculum.pdf'
          download="Ismael-Fuentes-curriculum.pdf"
          className="flex justify-center items-center bg-[#343639] mr-3 w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <CgFileDocument style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">Mi CV</p>
        </a>
      </div>
    </>
  )
}

export default Icons
