import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const SearchResults = () => {
    const { results, loading, query, selectedStores } = useSelector((state) => state.search);

    // Optional: Filter logic if not handled by API/Slice yet
    // The slice currently filters by name, but let's confirm store filtering logic.
    // The slice toggleStore just updates selectedStores array.
    // The thunk ONLY filters by name. So we probably need to filter by store here or in a selector.
    // Let's do it here for simplicity as per plan.

    const filteredResults = results.filter(product => selectedStores.includes(product.store));

    if (loading) {
        return (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-gray-100 rounded-2xl"></div>
                ))}
            </div>
        );
    }

    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                    🔍
                </div>
                <h3 className="text-xl font-medium text-gray-900">Start searching for groceries</h3>
                <p className="text-gray-500 mt-2">Compare prices across Woolworths, Coles, and Aldi</p>
            </div>
        );
    }

    if (filteredResults.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">No products found for "{query}"</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResults.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default SearchResults;
