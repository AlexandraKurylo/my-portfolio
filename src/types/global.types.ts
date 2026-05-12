import type { Dispatch, SetStateAction } from "react";
import type { THEME_ENUM } from "./global.enums";

export interface IThemeContext {
  theme: THEME_ENUM;
  setTheme: Dispatch<SetStateAction<THEME_ENUM>>;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
  stack: string[];
  liveDemoUrl: string;
  githubUrl: string;
}
