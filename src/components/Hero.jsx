import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts, setQuery, toggleStore } from '../redux/searchSlice';
import SearchResults from './SearchResults';

const Hero = () => {
    const dispatch = useDispatch();
    const { query, selectedStores } = useSelector((state) => state.search);

    const handleSearch = (e) => {
        const val = e.target.value;
        dispatch(setQuery(val));
        // Debounce could be here, but for now dispatch immediately
        dispatch(searchProducts(val));
    };

    const stores = [
        { name: 'Woolworths', color: 'bg-green-600' },
        { name: 'Coles', color: 'bg-red-600' },
        { name: 'Aldi', color: 'bg-blue-800' }
    ];

    return (
        <div className="pt-24 pb-12 min-h-screen bg-gray-50/50">
            <div className="container mx-auto px-4 lg:px-12 max-w-7xl">

                {/* Search Section */}
                <div className="flex flex-col items-center mb-12 space-y-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight">
                        Smart savings on <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            every grocery shop
                        </span>
                    </h1>

                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-2xl group-hover:bg-emerald-500/30 transition-all duration-300"></div>
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Data-mined prices for milk, bread, eggs..."
                            className="relative w-full h-16 pl-14 pr-6 rounded-2xl border-0 bg-white shadow-xl shadow-emerald-900/5 text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                        />
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {stores.map(store => {
                            const isSelected = selectedStores.includes(store.name);
                            return (
                                <button
                                    key={store.name}
                                    onClick={() => dispatch(toggleStore(store.name))}
                                    className={`
                                        px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                        ${isSelected
                                            ? `${store.color} text-white shadow-lg scale-105`
                                            : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                                    `}
                                >
                                    {store.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Results Section */}
                <SearchResults />

            </div>
        </div>
    );
};

export default Hero;
