
const ProductCard = ({ product }) => {
    const isSpecial = product.id % 3 === 0; // consistent mock "special" logic
    const tagColor = product.store == 'Woolworths' ? 'bg-green-500' : product.store == 'Coles' ? 'bg-red-600' : 'bg-blue-800';

    return (
        <div className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col items-start gap-3">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-1">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-2 right-2 ${tagColor} text-white backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm`}>
                    {product.store}
                </div>
                {isSpecial && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                        Special
                    </div>
                )}
            </div>

            <div className="w-full">
                <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[3rem] group-hover:text-emerald-700 transition-colors">
                    {product.name}
                </h3>
                <div className="text-xs text-gray-500 mt-1">{product.unitPrice}</div>
            </div>

            <div className="w-full flex items-end justify-between mt-auto pt-2 border-t border-gray-50">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
                <button className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
