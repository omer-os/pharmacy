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
    name: "العناية بالبشرة",
    img: "https://modo3.com/thumbs/fit630x300/113772/1465729955/%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9_%D8%A8%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9_%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A7%D9%8B.jpg",
    subtitle: "الحفاظ على بشرتك ناعمة وصحية",
    slug: "alainaya-bilbashra",
    items: [
      {
        _type: "item",
        name: "كريم الترطيب",
        img: "https://cdn.shopify.com/s/files/1/0446/6783/0423/products/Aloe-vera-moisturizing-Cream-Ecom-01_1200x1200.jpg?v=1612460589",
        subtitle: "لبشرة ناعمة ومرطبة",
        slug: "kareem-tarteeb",
      },
      {
        _type: "item",
        name: "ماسك الوجه",
        img: "https://as1.ftcdn.net/v2/jpg/03/10/02/38/1000_F_310023837_96G0c37stGaAq8VnRWRSyYl5qT4lNXwM.jpg",
        subtitle: "لتنظيف البشرة وتجديدها",
        slug: "mask-alwajh",
      },
      {
        _type: "subcategory",
        name: "مستحضرات مضادة للشيخوخة",
        img: "https://stylecaster.com/wp-content/uploads/2023/06/peak-scents-vitamin-c-serum.png?w=960&h=540&crop=1",
        subtitle: "لبشرة أصغر سنا وأكثر إشراقا",
        slug: "anti-aging-products",
        items: [
          {
            _type: "item",
            name: "سيروم فيتامين C",
            img: "https://stylecaster.com/wp-content/uploads/2023/06/peak-scents-vitamin-c-serum.png?w=960&h=540&crop=1",
            subtitle: "لإشراق البشرة وتقليل التجاعيد",
            slug: "serum-vitamin-c",
          },
          {
            _type: "item",
            name: "كريم الريتينول",
            img: "https://depology.com/cdn/shop/products/Anti-Aging-Retinol-Cream-Black-1_800x.jpg?v=1670853097",
            subtitle: "لتجديد البشرة وتحسين ملمسها",
            slug: "cream-retinol",
          },
        ],
      },
      {
        _type: "subcategory",
        name: "العناية بالعيون",
        img: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/08/30/6c9e95d6-1b3a-4779-aafe-842a872e1763_bda64e25.jpg?itok=ENeGpJA5&v=1630295382",
        subtitle: "لعيون أكثر إشراقا وانتعاشا",
        slug: "eye-care-products",
        items: [
          {
            _type: "item",
            name: "جل العيون",
            img: "https://media.viskan.com/v2/makeupmekkaprod/normal/1642174742/42-3_extra[1]/Makeup-Mekka-Depuff-Eye-Gel.jpg",
            subtitle: "لتهدئة منطقة العيون وتقليل الانتفاخ",
            slug: "gel-eyes",
          },
          {
            _type: "item",
            name: "كريم مكافحة الهالات السوداء",
            img: "https://images.apollo247.in/pub/media/catalog/product/8/9/8906087771982f.jpg",
            subtitle: "لتقليل الهالات السوداء وتفتيح منطقة العين",
            slug: "dark-circles-cream",
          },
          {
            _type: "item",
            name: "ماسكارا تكثيف الرموش",
            img: "https://stylecaster.com/wp-content/uploads/2023/06/peak-scents-vitamin-c-serum.png?w=960&h=540&crop=1",
            subtitle: "لرموش أكثر كثافة وجاذبية",
            slug: "mascara-eyelashes",
          },
        ],
      },
    ],
  },
  {
    _type: "category",
    name: "الأعشاب والمكملات الغذائية",
    img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/4218/herbs-supplements-vitamins.png",
    subtitle: "تحسين صحتك العامة بالمكملات الطبيعية",
    slug: "alashab-walmkamlat-alghidhayyah",
    items: [
      {
        _type: "subcategory",
        name: "الجنسنج",
        img: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/ginseng-root-on-cutting-board-1296x728.jpg?w=1155&h=989",
        subtitle: "زيادة الطاقة وتعزيز الجهاز المناعي",
        slug: "aljinseng",
        items: [
          {
            _type: "item",
            name: "جنسنج كوري",
            img: "https://www.kgccanada.com/files/attach/images/236/39b1746402c68a10ffa7c99aa2381059.jpg",
            subtitle: "زيادة الطاقة وتعزيز الجهاز المناعي",
            slug: "jinseng-kory",
          },
        ],
      },
      {
        _type: "item",
        name: "زيت السمك",
        img: "https://hips.hearstapps.com/hmg-prod/images/omega-3-fish-oil-capsules-and-a-glass-bottle-on-a-royalty-free-image-1678205033.jpg?crop=0.66635xw:1xh;center,top&resize=1200:*",
        subtitle: "فوائد صحية متعددة للقلب والدماغ",
        slug: "zayt-alsamak",
      },
    ],
  },
  {
    _type: "category",
    name: "الأدوية العامة",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/VariousPills.jpg/440px-VariousPills.jpg",
    subtitle: "العلاج الشامل وفقًا لاحتياجاتك",
    slug: "aladwia-alammah",
    items: [
      {
        _type: "item",
        name: "مسكنات الألم",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2ZraObFOkhutRFPUjcf3i9elv3n1u91YFWH-juhTULe8XrybSRmIsjUq3ilU37QhIHw&usqp=CAU",
        subtitle: "تسكين آمن وفعّال للألم",
        slug: "maskinat-alalam",
      },
      {
        _type: "subcategory",
        name: "مضادات الحموضة",
        img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-157679215_header-1024x575.jpg?w=1155&h=1528",
        subtitle: "تخفيف الحموضة والحماية من القرحة",
        slug: "madadat-alhamwa",
        items: [
          {
            _type: "item",
            name: "أقراص الماغنيسيوم",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyNEUTQav1gEONpgPGF3v1kSgV4I7t8bZ28VD_gJFhm4x1jcLh-i7dLJUmHgnlF0C9_A&usqp=CAU",
            subtitle: "توازن الحموضة وتحسين الهضم",
            slug: "aqrass-al-magnesium",
          },
          {
            _type: "item",
            name: "مضادات الهيستامين",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHSqvLDU-4cCpI4tMOuedrFKLrMGDc4Omcw&usqp=CAU",
            subtitle: "التخفيف من أعراض الحساسية والتهاب الأنف",
            slug: "madadat-alhistamine",
          },
        ],
      },
    ],
  },
  // Add more categories here...
];

const deepSearch = (
  items: (Subcategory | Item)[],
  slug: string
): Item | null => {
  for (const item of items) {
    if (item._type === "item" && item.slug === slug) {
      return item;
    }

    if (item._type === "subcategory") {
      const foundItem = deepSearch(item.items, slug);
      if (foundItem) {
        return foundItem;
      }
    }
  }
  return null;
};

export const getItemBySlug = (slug: string): Item | null => {
  for (const category of db) {
    const foundItem = deepSearch(category.items, slug);
    if (foundItem) {
      return foundItem;
    }
  }
  return null;
};
