import { zeroInLeft } from './ZeroLeft'
export function secondToMin(second: number): string{
  const min = zeroInLeft((second / 60) % 60);
  const seg = zeroInLeft((second % 60) % 60);
  return `${min}:${seg} min`
}