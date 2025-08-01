import {useRef} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import animation2 from "./../assets/124168-blue-mailbox.json";
import emailjs from "@emailjs/browser";
import {Slide} from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8daoxnt",
        "template_qaerwp9",
        form.current,
        "2hK3oBrStEJNcKpV_"
      )
      .then(
        result => {
          if (result) {
            alert("Email send Successfully!");
          }
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero min-h-screen max-w-7xl mx-auto rounded-md   bg-transparent  ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-left">
          <h1 className="text-4xl font-bold ">
            {" "}
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7]">
              Get In Touch!
              <Slide>
                {" "}
                <hr className="w-28 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341] " />
              </Slide>
            </span>
          </h1>

          <Player
            src={animation2}
            className="player md:w-[450px] md:[h-300px]"
            loop
            autoplay
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#fcf8f5]">
          {/* <Slide direction="up"> */}{" "}
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-900 font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="user_name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-900 font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                name="user_email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-900 font-semibold">
                  Message
                </span>
              </label>
              <textarea
                type="textarea"
                placeholder="Your Message"
                className="input input-bordered p-1"
                name="message"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#3d60b7] via-[#65a6e4] to-[#3d60b7] text-red-50 font-semibold text-lg">
                <input type="submit" value="Send" />
              </button>
            </div>
          </form>
          {/* </Slide> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
