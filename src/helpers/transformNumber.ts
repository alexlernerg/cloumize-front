export const transforNumber = (n: number) => {
    const withDecimals = Number.parseFloat(String(n)).toFixed(2);
    const N = Number(withDecimals);
    const NFormatted = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(N);
    return NFormatted.split('€')[0];
  };