export const saveToRecentProducts = (product) => {
    let recentProducts = JSON.parse(sessionStorage.getItem('recentProducts')) || [];
  
    recentProducts = recentProducts.filter((p) => p.id !== product.id);
  
    if (recentProducts.length > 5) {
      recentProducts.pop();
    }
  
    sessionStorage.setItem('recentProducts', JSON.stringify(recentProducts));
  };
  
  export const getRecentProducts = () => {
    return JSON.parse(sessionStorage.getItem('recentProducts')) || [];
  };
  