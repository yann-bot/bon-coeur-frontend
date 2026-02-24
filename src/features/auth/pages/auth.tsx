import BrandingPanel from "../components/brandingPanel";
import LoginForm from "../components/loginForm";


const Login = () => {
  return (

      <div className="flex w-full h-full bg-linear-to-br from-[#4B3687] via-[#007ABF] to-[#00AFE0]">
        {/* Left Column - Branding */}
        <div className=" w-1/2">
          <BrandingPanel />
        </div>

        {/* Right Column - Authentication */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-white rounded-l-[2rem] px-12 py-16 lg:px-16 lg:py-20">
          <div className="w-full max-w-sm space-y-10">
            {/* En-tête */}
            <header className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight lg:text-4xl">
                Bienvenue
              </h1>
              <p className="text-base text-gray-500">
                Connectez-vous à votre compte pour continuer
              </p>
            </header>

            <LoginForm />
          </div>
        </div>
      </div>

  );
};

export default Login;
