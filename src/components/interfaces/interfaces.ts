type Subcategory = {
  name: string;
  subtitle?: string;
  img: string;
  slug: string;
};

type Item = {
  name: string;
  subtitle?: string;
  subcategories?: Subcategory[];
  img: string;
  slug: string;
};

type Category = {
  name: string;
  subtitle?: string;
  items: Item[];
  img: string;
  slug: string;
};

export type Database = {
  categories: Category[];
};
