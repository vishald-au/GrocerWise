const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-6 lg:px-12">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-200">
                    G
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">
                    Grocer<span className="text-emerald-600">Wise</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
                <a href="#" className="hover:text-emerald-600 transition-colors">Deals</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Lists</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">History</a>
            </div>

            <button className="hidden md:block px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Sign In
            </button>
        </nav>
    );
};

export default Navbar;
