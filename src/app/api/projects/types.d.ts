export interface ParamsFilters {
  size?: string;
  date?: string;
  remuneration?: string;
  role?: string;
}

export interface BodyProject {
  id: string;
  title: string;
  logoUrl: string | null;
  description: string | null;
  size: string | null;
  remuneration: string | null;
  role: string | null;
}
