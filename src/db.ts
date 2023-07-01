export interface Item {
  _type: "item";
  name: string;
  img: string;
  subtitle: string;
  slug: string;
}

export interface Subcategory {
  _type: "subcategory";
  name: string;
  img: string;
  subtitle: string;
  slug: string;
  items: Item[];
}

export interface Category {
  _type: "category";
  name: string;
  img: string;
  subtitle: string;
  slug: string;
  items: (Item | Subcategory)[];
}

export const db: Category[] = [
  {
    _type: "category",
    name: "الأعشاب والمكملات الغذائية",
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
    subtitle: "تحسين صحتك العامة بالمكملات الطبيعية",
    slug: "alashab-walmkamlat-alghidhayyah",
    items: [
      {
        _type: "subcategory",
        name: "الجنسنج",
        img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
        subtitle: "زيادة الطاقة وتعزيز الجهاز المناعي",
        slug: "aljinseng",
        items: [
          {
            _type: "item",
            name: "جنسنج كوري",
            img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
            subtitle: "زيادة الطاقة وتعزيز الجهاز المناعي",
            slug: "jinseng-kory",
          },
        ],
      },
      {
        _type: "item",
        name: "زيت السمك",
        img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
        subtitle: "فوائد صحية متعددة للقلب والدماغ",
        slug: "zayt-alsamak",
      },
    ],
  },
  {
    _type: "category",
    name: "الأدوية العامة",
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
    subtitle: "العلاج الشامل وفقًا لاحتياجاتك",
    slug: "aladwia-alammah",
    items: [
      {
        _type: "item",
        name: "مسكنات الألم",
        img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
        subtitle: "تسكين آمن وفعّال للألم",
        slug: "maskinat-alalam",
      },
      {
        _type: "subcategory",
        name: "مضادات الحموضة",
        img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
        subtitle: "تخفيف الحموضة والحماية من القرحة",
        slug: "madadat-alhamwa",
        items: [
          {
            _type: "item",
            name: "أقراص الماغنيسيوم",
            img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
            subtitle: "توازن الحموضة وتحسين الهضم",
            slug: "aqrass-al-magnesium",
          },
          {
            _type: "item",
            name: "مضادات الهيستامين",
            img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
            subtitle: "التخفيف من أعراض الحساسية والتهاب الأنف",
            slug: "madadat-alhistamine",
          },
        ],
      },
    ],
  },
  // Add more categories here...
];
