import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { formu } from "../../../informacion";
import Gracias from "./Gracias/Gracias";
import Modals from "../../Modal/Modals";
import Modal from "../../Modal/Modal";
import { useModal } from "../../Modal/useModal";

function Form() {
  const form = useRef();

  const [btn, setBtn] = useState(true);
  const [email, setEmail] = useState(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);

  const sendEmail = (event) => {
    event.preventDefault();
    setBtn(false);
    setEmail(false)

    emailjs
      .sendForm("service_5q5xi1w", "template_zhg34ah", form.current, {
        publicKey: "pfbSPvLl8_a5qpuLZ",
      })
      .then(
        () => {
          setBtn(true);
          form.current.reset();
          openModal4()          
          
        },
        (error) => {
          console.log("FAILED...", error.text);
          setBtn(true);
          const mensaje = error.text || 'Hubo un error intentelo de nuevo'
          setEmail(mensaje)          
          openModal4()
        }
      );
  };

  return (
    <Fragment>
      <form
        className="contact-form box-shadow-1"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* Todo lo que use label e input */}
        {formu.map((formu) => {
          return (
            <formu.input
              type={formu.type}
              name={formu.name}
              required={formu.required}
              cols={formu.cols}
              rows={formu.rows}
              placeholder={`${formu.placeholder}`}
              value={formu.value}
              pattern={`${formu.pattern}`}
              title={`${formu.title}`}
              className={`${formu.class}`}
              key={formu.key}
            />
          );
        })}

        <div className={`contact-form-loader text-center ${btn && "none"}`}>
          <img src="loader.svg" alt="Enviando..." />
        </div>
      </form> 
        <Modal isOpen={isOpenModal4 } closeModal={closeModal4} >
          <h3>{email ? "Error" : "Gracias por escribirnos"}</h3>
          <p>{email ? email : "Pronto tendras una respuesta"}</p>
          <div>
          {email ? 
          <svg width="152px" height="152px" viewBox="0 0 246 246" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_397_3255)"> <g filter="url(#filter0_iii_397_3255)"> <path d="M0 115C0 51.4872 51.4873 0 115 0H127C192.722 0 246 53.2781 246 119V127C246 192.722 192.722 246 127 246H123C55.069 246 0 190.931 0 123V115Z" fill="url(#paint0_radial_397_3255)"></path> </g> <g filter="url(#filter1_i_397_3255)"> <path d="M101.54 106C105.66 106 109.081 109.378 108.197 113.402C106.794 119.789 103.591 125.699 98.8952 130.395C92.4252 136.865 83.65 140.5 74.5 140.5C65.35 140.5 56.5748 136.865 50.1048 130.395C45.6509 125.941 42.5406 120.395 41.0346 114.386C39.8974 109.848 43.7924 106 48.4706 106C52.8564 106 56.2631 109.719 58.1273 113.689C59.0089 115.566 60.215 117.296 61.7097 118.79C65.1019 122.182 69.7027 124.088 74.5 124.088C79.2973 124.088 83.8981 122.182 87.2903 118.79C88.5423 117.538 89.5918 116.122 90.4178 114.591C92.7658 110.24 96.5961 106 101.54 106Z" fill="#C4C4C4"></path> <path d="M101.54 106C105.66 106 109.081 109.378 108.197 113.402C106.794 119.789 103.591 125.699 98.8952 130.395C92.4252 136.865 83.65 140.5 74.5 140.5C65.35 140.5 56.5748 136.865 50.1048 130.395C45.6509 125.941 42.5406 120.395 41.0346 114.386C39.8974 109.848 43.7924 106 48.4706 106C52.8564 106 56.2631 109.719 58.1273 113.689C59.0089 115.566 60.215 117.296 61.7097 118.79C65.1019 122.182 69.7027 124.088 74.5 124.088C79.2973 124.088 83.8981 122.182 87.2903 118.79C88.5423 117.538 89.5918 116.122 90.4178 114.591C92.7658 110.24 96.5961 106 101.54 106Z" fill="#221725"></path> </g> <g filter="url(#filter2_i_397_3255)"> <path d="M198.54 106C202.66 106 206.081 109.378 205.197 113.402C203.794 119.789 200.591 125.699 195.895 130.395C189.425 136.865 180.65 140.5 171.5 140.5C162.35 140.5 153.575 136.865 147.105 130.395C142.651 125.941 139.541 120.395 138.035 114.386C136.897 109.848 140.792 106 145.471 106C149.856 106 153.263 109.719 155.127 113.689C156.009 115.566 157.215 117.296 158.71 118.79C162.102 122.182 166.703 124.088 171.5 124.088C176.297 124.088 180.898 122.182 184.29 118.79C185.542 117.538 186.592 116.122 187.418 114.591C189.766 110.24 193.596 106 198.54 106Z" fill="#C4C4C4"></path> <path d="M198.54 106C202.66 106 206.081 109.378 205.197 113.402C203.794 119.789 200.591 125.699 195.895 130.395C189.425 136.865 180.65 140.5 171.5 140.5C162.35 140.5 153.575 136.865 147.105 130.395C142.651 125.941 139.541 120.395 138.035 114.386C136.897 109.848 140.792 106 145.471 106C149.856 106 153.263 109.719 155.127 113.689C156.009 115.566 157.215 117.296 158.71 118.79C162.102 122.182 166.703 124.088 171.5 124.088C176.297 124.088 180.898 122.182 184.29 118.79C185.542 117.538 186.592 116.122 187.418 114.591C189.766 110.24 193.596 106 198.54 106Z" fill="#221725"></path> </g> <g filter="url(#filter3_diiii_397_3255)"> <mask id="path-4-inside-1_397_3255" fill="white"> <path d="M76.5352 189.398C72.4691 186.824 71.3807 181.312 74.7263 177.852C79.5896 172.823 85.336 168.583 91.7368 165.325C100.849 160.687 111.018 158.177 121.384 158.009C131.749 157.841 142.005 160.019 151.283 164.358C157.808 167.41 163.714 171.468 168.763 176.343C172.222 179.683 171.326 185.224 167.353 187.931C163.708 190.415 158.806 189.564 155.545 186.593C152.054 183.412 148.049 180.743 143.663 178.691C136.842 175.501 129.301 173.899 121.679 174.023C114.058 174.147 106.581 175.992 99.8809 179.402C95.5877 181.587 91.6949 184.374 88.3301 187.653C85.1612 190.742 80.2739 191.765 76.5352 189.398Z"></path> </mask> <path d="M76.5352 189.398C72.4691 186.824 71.3807 181.312 74.7263 177.852C79.5896 172.823 85.336 168.583 91.7368 165.325C100.849 160.687 111.018 158.177 121.384 158.009C131.749 157.841 142.005 160.019 151.283 164.358C157.808 167.41 163.714 171.468 168.763 176.343C172.222 179.683 171.326 185.224 167.353 187.931C163.708 190.415 158.806 189.564 155.545 186.593C152.054 183.412 148.049 180.743 143.663 178.691C136.842 175.501 129.301 173.899 121.679 174.023C114.058 174.147 106.581 175.992 99.8809 179.402C95.5877 181.587 91.6949 184.374 88.3301 187.653C85.1612 190.742 80.2739 191.765 76.5352 189.398Z" stroke="url(#paint1_linear_397_3255)" stroke-width="22" stroke-linejoin="round" mask="url(#path-4-inside-1_397_3255)"></path> </g> </g> <defs> <filter id="filter0_iii_397_3255" x="-11" y="-24" width="278" height="326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_innerShadow_397_3255"></feMorphology> <feOffset dx="21" dy="73"></feOffset> <feGaussianBlur stdDeviation="24"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3255"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="-24"></feOffset> <feGaussianBlur stdDeviation="15.5"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0"></feColorMatrix> <feBlend mode="normal" in2="effect1_innerShadow_397_3255" result="effect2_innerShadow_397_3255"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="-11" dy="30"></feOffset> <feGaussianBlur stdDeviation="15.5"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.766722 0 0 0 0 0.693056 0 0 0 0.68 0"></feColorMatrix> <feBlend mode="normal" in2="effect2_innerShadow_397_3255" result="effect3_innerShadow_397_3255"></feBlend> </filter> <filter id="filter1_i_397_3255" x="40.8352" y="106" width="67.5018" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_397_3255"></feMorphology> <feOffset dx="9.2" dy="-7"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3255"></feBlend> </filter> <filter id="filter2_i_397_3255" x="137.835" y="106" width="67.5018" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_397_3255"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3255"></feBlend> </filter> <filter id="filter3_diiii_397_3255" x="39.4131" y="141.333" width="164.832" height="99.3673" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="16.6667"></feOffset> <feGaussianBlur stdDeviation="16.6667"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0.0298758 0 0 0 0 0.0216858 0 0 0 0 0.0308333 0 0 0 0.24 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_397_3255"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_397_3255" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="5.18518"></feOffset> <feGaussianBlur stdDeviation="2.59259"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.17328 0 0 0 0 0.125777 0 0 0 0 0.178833 0 0 0 1 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_397_3255"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="-2.59259"></feOffset> <feGaussianBlur stdDeviation="1.2963"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.119503 0 0 0 0 0.086743 0 0 0 0 0.123333 0 0 0 1 0"></feColorMatrix> <feBlend mode="normal" in2="effect2_innerShadow_397_3255" result="effect3_innerShadow_397_3255"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect4_innerShadow_397_3255"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="effect3_innerShadow_397_3255" result="effect4_innerShadow_397_3255"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect5_innerShadow_397_3255"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="effect4_innerShadow_397_3255" result="effect5_innerShadow_397_3255"></feBlend> </filter> <radialGradient id="paint0_radial_397_3255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(109 16) rotate(86.5167) scale(230.426)"> <stop offset="0.576389" stop-color="#FFBB0C"></stop> <stop offset="1" stop-color="#FFC907"></stop> </radialGradient> <linearGradient id="paint1_linear_397_3255" x1="122.5" y1="279" x2="122.5" y2="158" gradientUnits="userSpaceOnUse"> <stop stop-color="#201721"></stop> <stop offset="1" stop-color="#2B1F2C"></stop> </linearGradient> <clipPath id="clip0_397_3255"> <rect width="246" height="246" fill="white"></rect> </clipPath> </defs> </g></svg>
          :
          <svg fill="#d90062" height="128px" width="128px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#d90062"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,0C114.617,0,0,114.617,0,256s114.617,256,256,256s256-114.617,256-256S397.383,0,256,0z M256,494.933 C124.043,494.933,17.067,387.957,17.067,256S124.043,17.067,256,17.067S494.933,124.043,494.933,256S387.957,494.933,256,494.933 z"></path> <path d="M324.267,307.2c-4.713,0-8.533,3.82-8.533,8.533c0,18.873-15.26,34.133-34.133,34.133h-93.867 c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H281.6c28.299,0,51.2-22.901,51.2-51.2 C332.8,311.021,328.979,307.2,324.267,307.2z"></path> <path d="M351.59,137.237c11.176-2.304,22.814,1.07,31.042,9.305c3.331,3.334,8.734,3.336,12.068,0.005 c3.334-3.331,3.336-8.734,0.005-12.068c-12.33-12.34-29.815-17.409-46.56-13.957c-4.616,0.952-7.586,5.465-6.635,10.081 C342.461,135.218,346.974,138.188,351.59,137.237z"></path> <path d="M129.464,146.541c8.211-8.211,19.811-11.589,30.973-9.32c4.618,0.939,9.123-2.044,10.062-6.662 s-2.044-9.123-6.662-10.062c-16.717-3.398-34.14,1.675-46.441,13.976c-3.332,3.333-3.332,8.735,0,12.068 C120.728,149.874,126.131,149.874,129.464,146.541z"></path> <path d="M187.733,204.8c4.713,0,8.533-3.82,8.533-8.533c0-23.563-19.104-42.667-42.667-42.667 c-23.563,0-42.667,19.104-42.667,42.667c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533c0-14.137,11.463-25.6,25.6-25.6 c14.137,0,25.6,11.463,25.6,25.6C179.2,200.979,183.021,204.8,187.733,204.8z"></path> <path d="M358.4,153.6c-23.563,0-42.667,19.104-42.667,42.667c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533 c0-14.137,11.463-25.6,25.6-25.6s25.6,11.463,25.6,25.6c0,4.713,3.821,8.533,8.533,8.533c4.713,0,8.533-3.82,8.533-8.533 C401.067,172.704,381.963,153.6,358.4,153.6z"></path> <path d="M76.8,238.933c-18.853,0-34.133,15.281-34.133,34.133c0,18.853,15.281,34.133,34.133,34.133 c18.853,0,34.133-15.281,34.133-34.133C110.933,254.214,95.653,238.933,76.8,238.933z M76.8,290.133 c-9.427,0-17.067-7.64-17.067-17.067c0-9.427,7.64-17.067,17.067-17.067c9.427,0,17.067,7.64,17.067,17.067 C93.867,282.494,86.227,290.133,76.8,290.133z"></path> <path d="M435.2,238.933c-18.853,0-34.133,15.281-34.133,34.133c0,18.853,15.281,34.133,34.133,34.133 c18.853,0,34.133-15.281,34.133-34.133C469.333,254.214,454.053,238.933,435.2,238.933z M435.2,290.133 c-9.427,0-17.067-7.64-17.067-17.067c0-9.427,7.64-17.067,17.067-17.067s17.067,7.64,17.067,17.067 C452.267,282.494,444.627,290.133,435.2,290.133z"></path> </g> </g> </g> </g></svg>
          }
          </div>

        </Modal>
    </Fragment>
  );
}

export default Form;
