// src/features/search/store/searchAtoms.ts
import { atom } from "jotai";
import { SearchPreferences } from "@/features/search/types/preference";

export const searchQueryAtom = atom<string>("");
export const searchPreferencesAtom = atom<SearchPreferences | null>(null);
export const isSearchLoadingAtom = atom<boolean>(false);
