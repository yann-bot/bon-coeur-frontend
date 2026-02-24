




export default function BrandingPanel() {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center p-12 h-screen relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
            </div>
            
            <div className="text-center space-y-8 relative z-10">
                {/* Logo Container */}
                <div className="flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-md rounded-2xl mx-auto shadow-xl border border-white/30 p-4">
                    <img 
                        src="logo.jpeg" 
                        alt="Bon Coeur Multiservices" 
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>

                {/* Company Name */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                        Bon Coeur Multiservices
                    </h1>
                    <p className="text-white/90 text-xl font-medium">
                        Gestion Commerciale
                    </p>
                </div>
                
                {/* Tagline */}
                <div className="max-w-sm mx-auto">
                    <p className="text-white/80 text-base leading-relaxed">
                        Votre solution de gestion commerciale et financière sécurisée
                    </p>
                </div>
               
                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mt-10 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <div className="w-2.5 h-2.5 bg-[#00AFE0] rounded-full animate-pulse shadow-lg shadow-[#00AFE0]/50" />
                    <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                        Connexion sécurisée
                    </span>
                </div>

                {/* Decorative elements */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}