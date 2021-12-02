export function secondToMin(second: number): string{
  const zeroInLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const min = zeroInLeft((second / 60) % 60);
  const seg = zeroInLeft((second % 60) % 60);
  return `${min}:${seg} min`
}