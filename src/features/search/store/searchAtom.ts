// src/features/search/store/searchAtoms.ts
import { SearchPreferences } from "@/features/search/types/preference";
import { atom } from "jotai";

export const searchQueryAtom = atom<string>("");
export const searchPreferencesAtom = atom<SearchPreferences | null>(null);
export const isSearchLoadingAtom = atom<boolean>(false);
