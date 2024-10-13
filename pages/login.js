import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk, selectUser } from '../store/slices/authSlice';
import Link from 'next/link';
import Image from 'next/image';
import { Form, Formik } from "formik";
import { useRouter } from 'next/router';  // استيراد useRouter
import * as Yup from "yup";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();  // تهيئة useRouter
  const user = useSelector(selectUser);  // الحصول على حالة المستخدم

  // عند وجود المستخدم في حالة `user`، قم بالتوجيه إلى الصفحة الرئيسية
  if (user) {
    router.push('/');  // توجيه المستخدم إلى الصفحة الرئيسية مباشرةً
  }

  const initialValues = {
    email: "",
    password: "",
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Dispatch the login thunk with the form values
      const result = await dispatch(loginUserThunk(values));
      if (result.meta.requestStatus === "fulfilled") {
        // إذا تم تسجيل الدخول بنجاح، قم بالتوجيه إلى الصفحة الرئيسية
        router.push('/');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    setSubmitting(false);
  };
  
  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <Image
            src='/assets/logo.png'
            alt='background'
            className='mx-auto h-36 w-auto rounded-full'
            width={600}
            height={600}
            priority 
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          سجل الدخول إلى حسابك
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            أو{" "}
            <Link
              href='/register'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
          إنشاء حساب
            </Link>
          </p>
        </div>
        <Formik
          className='mt-8 space-y-6'
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className='-space-y-px rounded-md shadow-sm'>
              <input type='hidden' name='remember' defaultValue='true' />
              <div>
                <label htmlFor='email-address' className='sr-only'>
                البريد الالكتروني
                </label>
                <input
  type="email"
  id="email"
  name="email"
  placeholder="أدخل بريدك الإلكتروني"
  autoComplete="username"  // إضافة هذه الخاصية
  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E43038] mb-3"
  {...formik.getFieldProps("email")}
/>

              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
              كلمة المرور
                </label>
                <input
  type="password"
  name="password"
  id="password"
  placeholder="كلمة المرور"
  autoComplete="current-password"  // موجود بالفعل وهو صحيح
  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2  focus:outline-none focus:border-[#E43038] mb-3"
  {...formik.getFieldProps("password")}
/>

              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    تذكرني
                  </label>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-[#E43038] py-2 px-4 text-sm font-medium mt-4 text-white hover:bg-[#dd9194] focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2'
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? "تحميل...." : "دخول"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
