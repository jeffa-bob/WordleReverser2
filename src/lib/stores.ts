import { writable } from 'svelte/store';
import type { colors } from './extras';

export const words = writable(new Array<string>);
export const color = writable(new Array<Array<colors>>);