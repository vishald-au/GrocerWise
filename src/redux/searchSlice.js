import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock Data
const MOCK_PRODUCTS = [
    { id: 1, name: 'Full Cream Milk 2L', price: 3.10, store: 'Woolworths', image: 'https://placehold.co/200?text=Woolies+Milk', unitPrice: '$1.55 / 1L' },
    { id: 2, name: 'Full Cream Milk 2L', price: 3.10, store: 'Coles', image: 'https://placehold.co/200?text=Coles+Milk', unitPrice: '$1.55 / 1L' },
    { id: 3, name: 'Farmsdale Full Cream Milk 2L', price: 3.09, store: 'Aldi', image: 'https://placehold.co/200?text=Aldi+Milk', unitPrice: '$1.55 / 1L' },
    { id: 4, name: 'Coca-Cola 1.25L', price: 2.85, store: 'Woolworths', image: 'https://placehold.co/200?text=Coke', unitPrice: '$2.28 / 1L' },
    { id: 5, name: 'Coca-Cola 1.25L', price: 3.50, store: 'Coles', image: 'https://placehold.co/200?text=Coke', unitPrice: '$2.80 / 1L' },
    { id: 6, name: 'Tim Tams Original', price: 4.50, store: 'Woolworths', image: 'https://placehold.co/200?text=Tim+Tams', unitPrice: '$2.25 / 100g' },
    { id: 7, name: 'Tim Tams Original', price: 2.50, store: 'Coles', image: 'https://placehold.co/200?text=Tim+Tams', unitPrice: '$1.25 / 100g' },
    { id: 8, name: 'Tim Tams Original', price: 3.00, store: 'Aldi', image: 'https://placehold.co/200?text=Tim+Tams', unitPrice: '$1.50 / 100g' },
    { id: 9, name: 'Bananas (kg)', price: 3.50, store: 'Woolworths', image: 'https://placehold.co/200?text=Bananas', unitPrice: '$3.50 / 1kg' },
    { id: 10, name: 'Bananas (kg)', price: 4.00, store: 'Coles', image: 'https://placehold.co/200?text=Bananas', unitPrice: '$4.00 / 1kg' },
];

export const searchProducts = createAsyncThunk(
    'search/searchProducts',
    async (query) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (!query) return [];

        return MOCK_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
        loading: false,
        selectedStores: ['Woolworths', 'Coles', 'Aldi'],
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        toggleStore: (state, action) => {
            const store = action.payload;
            if (state.selectedStores.includes(store)) {
                state.selectedStores = state.selectedStores.filter(s => s !== store);
            } else {
                state.selectedStores.push(store);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(searchProducts.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setQuery, toggleStore } = searchSlice.actions;
export default searchSlice.reducer;
