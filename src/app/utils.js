export const formatCurrency = function(amount) {
    return "₦" + parseFloat(amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};