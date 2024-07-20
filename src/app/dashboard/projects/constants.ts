import { SelectItem } from "@/components/ui/select";
import { Remuneration, Role, Size } from "@prisma/client";
import _ from "lodash";

type IRemunerationItem = SelectItem<Remuneration, Remuneration>;
type ISizeItem = SelectItem<Size, Size>;
type IRoleItem = SelectItem<Role, Role>;

export const SELECT_REMUNERATION: IRemunerationItem[] = Object.values(Remuneration).map((value) => ({
  data: value,
  label: _.capitalize(value),
  value
}));

export const SELECT_SIZE: ISizeItem[] = Object.values(Size).map((value) => ({
  data: value,
  label: _.capitalize(value),
  value
}));

export const SELECT_ROLE: IRoleItem[] = Object.values(Role).map((value) => ({
  data: value,
  label: _.capitalize(value),
  value
}));


