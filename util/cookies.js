import { cookies } from 'next/headers';

// nullish coalescing operator
export function getCookie(name) {
  return cookies().get(name)?.value;
}

export function setCookie(name, value) {
  console.log('setCookie', name, value);
  return cookies().set(name, value);
}
