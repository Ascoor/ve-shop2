import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// دالة لإنشاء تخزين وهمي "Noop" في حالة عدم توفر `localStorage`
const createNoopStorage = () => {
  return {
    getItem: () => Promise.resolve(null), // عند محاولة الحصول على عنصر، تُرجع `null`
    setItem: () => Promise.resolve(), // عند محاولة التخزين، لا تفعل شيئًا
    removeItem: () => Promise.resolve(), // عند محاولة الحذف، لا تفعل شيئًا
  };
};

// إذا كانت البيئة هي المتصفح، استخدم `localStorage`، وإلا استخدم `NoopStorage`
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local") // استخدم `localStorage` في بيئة المتصفح
    : createNoopStorage(); // استخدم `NoopStorage` في بيئة `server`

export default storage;
