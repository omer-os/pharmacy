export const db = {
  categories: [
    {
      name: "الأدوية العامة",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
      subtitle: "العلاج الشامل وفقًا لاحتياجاتك",
      slug: "aladwia-alammah",
      items: [
        {
          name: "مسكنات الألم",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "تسكين آمن وفعّال للألم",
          slug: "maskinat-alalam",
          subcategories: [
            {
              name: "الأسبرين",
              img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
              subtitle: "تسكين آمن وفعّال للألم",
              slug: "asprin",
            },
            {
              name: "الباراسيتامول",
              img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
              subtitle: "تسكين سريع وموثوق للألم",
              slug: "barasetamol",
            },
          ],
        },
        {
          name: "مضادات الحموضة",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "تخفيف الحموضة والحماية من القرحة",
          slug: "madadat-alhamwa",
          subcategories: [
            {
              name: "أقراص الماغنيسيوم",
              img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
              subtitle: "توازن الحموضة وتحسين الهضم",
              slug: "aqrass-al-magnesium",
            },
            {
              name: "مضادات الهيستامين",
              img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
              subtitle: "التخفيف من أعراض الحساسية والتهاب الأنف",
              slug: "madadat-alhistamine",
            },
          ],
        },
      ],
    },
    {
      name: "الأدوية الموضعية",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
      subtitle: "عناية فعالة ومحددة لتسكين الأعراض المحلية",
      slug: "aladwia-almoda'iah",
      items: [
        {
          name: "كريمات الحكة",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "تخفيف الحكة وتهدئة البشرة",
          slug: "krimat-alhakah",
        },
        {
          name: "مراهم المضادات الحيوية",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "مكافحة العدوى وتعزيز عملية الشفاء",
          slug: "maramem-almodadat-alhayaweyah",
        },
      ],
    },
    {
      name: "الأعشاب والمكملات الغذائية",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
      subtitle: "تحسين صحتك العامة بالمكملات الطبيعية",
      slug: "alashab-walmkamlat-alghidhayyah",
      items: [
        {
          name: "الجنسنج",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "زيادة الطاقة وتعزيز الجهاز المناعي",
          slug: "aljinseng",
        },
        {
          name: "زيت السمك",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "فوائد صحية متعددة للقلب والدماغ",
          slug: "zayt-alsamak",
        },
      ],
    },
    {
      name: "العناية بالبشرة",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
      subtitle: "بشرة رائعة تشع بالجمال والصحة",
      slug: "alunayat-bialbashrah",
      items: [
        {
          name: "مرطبات الوجه",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "ترطيب عميق وتغذية البشرة",
          slug: "murtbat-alwajh",
        },
        {
          name: "كريمات الشمس",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "حماية فعالة من أشعة الشمس الضارة",
          slug: "krimat-alshams",
        },
      ],
    },
    {
      name: "مستحضرات التجميل",
      img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
      subtitle: "اكتشف الجمال الذاتي من خلال مستحضرات التجميل",
      slug: "mustahdarat-altajmeel",
      items: [
        {
          name: "أحمر الشفاه",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "لون وإشراقة فوريين للشفاه",
          slug: "ahmar-alshifah",
        },
        {
          name: "ماسكارا",
          img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg",
          subtitle: "رموش طويلة وكثيفة بمظهر جذاب",
          slug: "mascara",
        },
      ],
    },
  ],
};