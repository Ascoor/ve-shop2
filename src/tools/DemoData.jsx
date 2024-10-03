import {
 Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15
} from '../assets/images/index';


const DemoData = (type) => {
    switch (type) {
      case 'reviews':
        return [
          {
            username: 'علي محمد',
            reviewText: 'منتج ممتاز! جودة عالية وسعر رائع، أنصح به بشدة.',
            rating: 5,
            date: 'منذ يومين',
            userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          {
            username: 'سارة أحمد',
            reviewText: 'خدمة العملاء رائعة، لكن المنتج وصل متأخر قليلاً.',
            rating: 4,
            date: 'منذ أسبوع',
            userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
          },
       

          {
            username: 'محمد عبدالله',
            reviewText: 'منتج ممتاز! جودة عالية وسعر رائع، أنصح به بشدة.',
            rating: 5,
            date: 'منذ يومين',
            userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          {
            username: 'سارة أحمد',
            reviewText: 'خدمة العملاء رائعة، لكن المنتج وصل متأخر قليلاً.',
            rating: 4,
            date: 'منذ أسبوع',
            userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
          },
          {
            username: 'أحمد عادل',
            reviewText: 'لم يكن المنتج كما توقعت، ألوانه مختلفة عن الصورة.',
            rating: 3,
            date: 'منذ أسبوعين',
            userImage: 'https://randomuser.me/api/portraits/men/50.jpg',
          },

          ];
          
      case 'slides':
        return [
        
            {
              id: 1,
              img: Img1,
              title: "خصم 50%",
              description: "استمتع بأفضل العروض والخصومات على منتجاتنا المتنوعة. جودة عالية وأسعار منافسة بانتظارك.",
              buttonText: "تسوق الآن",
            },
            {
              id: 2,
              img: Img2,
              title: "عرض خاص",
              description: "احصل على أفضل المنتجات بأفضل الأسعار. عرض محدود لفترة قصيرة.",
              buttonText: "تسوق الآن",
            },
            {
              id: 3,
              img: Img3,
              title: "تخفيضات الصيف",
              description: "استفد من تخفيضات الصيف الرائعة على جميع المنتجات.",
              buttonText: "تسوق الآن",
            },
          
        ]
        case 'categoryMenuItems':
            return [
              { label: 'الموبايلات والأجهزة الإلكترونية', link: '/electronics' },
              { label: 'الأزياء والملابس', link: '/fashion' },
              { label: 'الأحذية والحقائب', link: '/shoes-bags' },
              { label: 'الجمال والعناية الشخصية', link: '/beauty' },
              { label: 'الأجهزة المنزلية', link: '/home-appliances' },
              { label: 'الأثاث والديكور', link: '/furniture' },
              { label: 'الرياضة واللياقة البدنية', link: '/sports' },
              { label: 'الألعاب والهدايا', link: '/toys-gifts' },
              { label: 'المواد الغذائية والمشروبات', link: '/groceries' },
              { label: 'الأجهزة المكتبية واللوازم', link: '/office-supplies' },
              { label: 'السيارات وملحقاتها', link: '/cars-accessories' },
              { label: 'الحيوانات الأليفة', link: '/pets' },
              { label: 'ألعاب الفيديو', link: '/video-games' },
              { label: 'الكتب والقرطاسية', link: '/books-stationery' },
              { label: 'المجوهرات والإكسسوارات', link: '/jewelry-accessories' },
              { label: 'الساعات والنظارات', link: '/watches-glasses' },
              { label: 'المستلزمات الطبية', link: '/medical-supplies' },
              { label: 'عروض وتخفيضات', link: '/offers' },
              { label: 'اتصل بنا', link: '/contact' },
            ];
          case 'occasionCategories' : 
          return [
          
            {
              title: "حفلات الزفاف",
              description: "اكتشف أرقى الملابس لتكون في قمة أناقتك في يوم الزفاف.",
              imageSrc: "https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg", // صورة تعبيرية للزفاف
              link: "/shop/weddings",
            },
            {
              title: "العودة إلى المدارس",
              description: "استعد لموسم المدارس مع كل ما تحتاجه.",
              imageSrc: "https://cdn.pixabay.com/photo/2023/08/31/15/37/ai-generated-8225400_640.png",
               link: "/shop/back-to-school",
            },
            {
              title: "حفلات التخرج",
              description: "احتفل بأناقة مع تشكيلتنا الخاصة بحفلات التخرج.",
              imageSrc: "https://cdn.pixabay.com/photo/2023/11/06/14/45/ai-generated-8369776_640.png", // صورة تعبيرية لحفلات التخرج
              link: "/shop/graduation",
            },
            {
              title: "عيد الحب",
              description: "عبّر عن حبك مع اختياراتنا المميزة لعيد الحب.",
              imageSrc: "https://cdn.pixabay.com/photo/2018/08/03/04/36/couple-3581038_640.jpg",
              link: "/shop/valentines-day",
            },
            {
              title: "حفلات أعياد الميلاد",
              description: "احتفل بأعياد الميلاد مع تشكيلاتنا المميزة.",
              imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZUIZmwxM4bP0LOLJBeICAamGn16_xnTG2g&s", // صورة تعبيرية لأعياد الميلاد
              link: "/shop/birthday-parties",
            },
            {
              title: "حفلات الزوار",
              description: "احتفل بأعياد الزوار مع تشكيلاتنا المميزة.",
              imageSrc: "https://cdn.pixabay.com/photo/2017/08/06/19/18/restaurant-2595431_640.jpg", // صورة تعبيرية لأعياد الزوار
              link: "/shop/wedding-parties",
            },
            ];
            case 'productList':
              return [
                { id: 1, title: "حتى 50% خصم | فستان أحمر بنقط بيضاء", price: 120, description: "فستان أنيق مثالي للمناسبات الخاصة، مزين بنقط بيضاء، خامة خفيفة مريحة", imageSrc: Img10, altText: "فستان أحمر", linkHref: "#" },
                { id: 2, title: "قماش صيفي متعدد الألوان", price: 85, description: "قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة", imageSrc: Img8, altText: "قميص صيفي", linkHref: "#" },
                { id: 3, title: "خلاط كهربائي من باناسونيك", price: 300, description: "خلاط كهربائي متعدد الوظائف من باناسونيك، مثالي لجميع احتياجات المطبخ", imageSrc: Img4, altText: "خلاط كهربائي", linkHref: "#" },
                { id: 4, title: "مجموعة مستحضرات تجميل", price: 220, description: "كل ما تحتاجينه من مستحضرات تجميل في مجموعة واحدة متكاملة", imageSrc: Img5, altText: "مستحضرات تجميل", linkHref: "#" },
                { id: 5, title: "مجموعة الكترونيات", price: 1500, description: "تشكيلة واسعة من الأجهزة الالكترونية لتلبية جميع احتياجاتك التكنولوجية", imageSrc: Img6, altText: "أجهزة الكترونية", linkHref: "#" },
                { id: 6, title: "قميص صيفي مريح", price: 45, description: "قميص صيفي بنقشة مربعات، خامات عالية الجودة توفر الراحة في الأيام الحارة", imageSrc: Img7, altText: "قميص صيفي", linkHref: "#" },
                { id: 7, title: "قميص رسمي", price: 100, description: "قميص رسمي عالي الجودة، مثالي للمناسبات والاجتماعات الرسمية", imageSrc: Img11, altText: "قميص رسمي", linkHref: "#" }
              ];
            
  
      case 'brands':
        return [
          
          
  {
    name: "Nike",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Apple",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Adidas",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Puma-logo-%28text%29.svg",
  },
  {
    name: "Amazon",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
];
      case 'clientList':
        return [
          { id: 1, name: 'عميل 1', email: 'client1@example.com' },
          { id: 2, name: 'عميل 2', email: 'client2@example.com' },
          { id: 3, name: 'عميل 3', email: 'client3@example.com' },
        ];
  
      case 'footerLinks':
        return [
          { label: 'الخصوصية', link: '/privacy' },
          { label: 'الشروط والأحكام', link: '/terms' },
          { label: 'سياسة الإرجاع', link: '/return-policy' },
        ];
  
      default:
        return [];
    }
  };
  
export default DemoData;