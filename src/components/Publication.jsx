/* eslint-disable react/no-unescaped-entities */
import {Fade, Slide} from "react-awesome-reveal";
// import {FaGithub, FaLinkedin} from "react-icons/fa";
// bg-[#faf6e0]
const Publication = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-5 rounded-md bg-opacity-90 shadow-[10%]  bg-[#FFFCEF]
            text-[#3F64BA]">
      <div>
        {" "}
        <h1 className="text-4xl font-bold p-2">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
            {" "}
           Publication
          </span>
          <Slide>
            <hr className=" w-14 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
          </Slide>
        </h1>
        <Fade>
          {" "}
          <p className="p-2 text-blue-900 my-3 text-[17px] max-w-5xl mx-auto ">
            M. Akther, Z. R. Chowdhury, A. Tabassum, and M. S. R. Kohinoor, 
            "A Comparative Study on Different Machine Learning Techniques in Diabetes Risk Assessment," 
            2023 3rd International Conference on Intelligent Technologies (CONIT), Hubli, India, 2023, pp. 1-6, 
             <br/><a className="underline text-blue-600" target="_blank" href = "https://doi.org/10.1109/CONIT59222.2023.10205382" rel="noreferrer">doi:10.1109/CONIT59222.2023.10205382</a>
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Publication;
