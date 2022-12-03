import LogoGray from "@/assets/logo_dark.png";

const Logo = ({ isWhite }) => {
  return (
    <>
      {isWhite ? (
        <img src="https://i.imgur.com/7PagZrt.png" alt="PL-VACC Logo" />
      ) : (
        <img
          src={LogoGray}
          className="w-[80%] max-w-[300px]"
          alt="PL-VACC Main Logo"
        />
      )}
    </>
  );
};

export default Logo;
