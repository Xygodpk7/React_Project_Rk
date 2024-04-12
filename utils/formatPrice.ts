// Define a function 'formatPrice' that takes an 'amount' of type number and returns a formatted currency string
export const formatPrice = (amount: number) => {
    // Use Intl.NumberFormat to format the 'amount' as currency in Indian Rupees (INR)
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
};
