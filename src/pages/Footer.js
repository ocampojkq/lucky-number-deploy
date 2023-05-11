const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center pt-5 mt-5 ">
        <div className="text-center">
          <a
            href="mailto:ocampopdawagrealty@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope  fa-xl p-2 footer-icon"></i>
          </a>
          <a
            href="https://www.facebook.com/pcso.gov"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook  fa-xl p-2 footer-icon"></i>
          </a>
          <a href="https://m.me/sspaniardd" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-messenger  fa-xl p-2 footer-icon"></i>
          </a>
        </div>

        <div className="pt-5 text-center">
          <i className="fa-solid fa-copyright text-center p-2 footer-icon pt-5 mt-5"></i>{' '}
          2023 Kit. All rights Reserved{' '}
        </div>
      </div>
    </>
  );
};

export default Footer;
