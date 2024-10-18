import Image from 'next/image';
import Link from 'next/link';
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk, selectUser } from '../store/slices/authSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      if (user.role_id === 1 || user.role_id === 2) {
        router.push('/dashboard');
      } else if (user.role_id === 3) {
        router.push('/store');
      }
    }
  }, [user, router]);

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("البريد الإلكتروني غير صالح").required("مطلوب"),
    password: Yup.string().required("مطلوب")
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(loginUserThunk(values));
      setSubmitting(false);
    } catch (error) {
      console.error("فشل تسجيل الدخول:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[var(--background-color)] text-[var(--text-color)]">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src='/assets/logo.png'
            alt='logo'
            className='mx-auto h-36 w-auto rounded-full'
            width={600}
            height={600}
            priority
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--primary-color)]">
            سجل الدخول إلى حسابك
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--muted-text-color)]">
            أو{" "}
            <Link href="/register" className="font-medium text-[var(--primary-color)] hover:text-[var(--button-hover-background-color)]">
              إنشاء حساب
            </Link>
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--primary-color)] mb-3 bg-[var(--background-color)] text-[var(--text-color)]"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="كلمة المرور"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--primary-color)] mb-3 bg-[var(--background-color)] text-[var(--text-color)]"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text-color)]">
                    تذكرني
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md py-2 px-4 text-sm font-medium bg-[var(--button-background-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-background-color)] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? "تحميل...." : "دخول"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
