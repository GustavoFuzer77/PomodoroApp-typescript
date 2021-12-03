import { zeroInLeft } from './ZeroLeft';
export function secondToTime(second: number): string{
  const hour = zeroInLeft(second / 3600);
  const min = zeroInLeft((second / 60) % 60);
  const seg = zeroInLeft((second % 60) % 60);
  return `${hour}h:${min}m:${seg}s`
}