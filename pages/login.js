import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toastr } from 'react-redux-toastr';
import { loginUserThunk } from '../store/slices/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('البريد الإلكتروني غير صالح').required('مطلوب'),
    password: Yup.string().required('مطلوب'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const user = await dispatch(loginUserThunk(values)).unwrap();
      toastr.success('تم بنجاح', 'تم تسجيل الدخول بنجاح');

      // Navigate based on user role after successful login
      if (user.role_id === 1 || user.role_id === 2) {
        await router.replace('/admin/dashboard'); // Redirect to admin dashboard
      } else {
        await router.replace('/'); // Redirect to home for regular users
      }
    } catch (error) {
      let errorMessage = 'حدث خطأ أثناء محاولة تسجيل الدخول';
      if (error.message.includes('401')) {
        errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      }
      toastr.error('خطأ', errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-background-day)] text-[var(--color-text-day)] dark:bg-[var(--color-background-night)] dark:text-[var(--color-text-night)]">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src="/assets/logo.png"
            alt="logo"
            className="mx-auto h-36 w-auto rounded-full"
            width={600}
            height={600}
            priority
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)]">
            سجل الدخول إلى حسابك
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
            أو
            <Link
              href="/register"
              className="font-medium text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)] hover:text-[var(--color-button-hover-day)] dark:hover:text-[var(--color-button-hover-night)]"
            >
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
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--color-primary-day)] dark:focus:border-[var(--color-primary-night)] mb-3 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-500">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="كلمة المرور"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--color-primary-day)] dark:focus:border-[var(--color-primary-night)] mb-3 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-red-500">
                    {formik.errors.password}
                  </div>
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
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  >
                    تذكرني
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md py-2 px-4 text-sm font-medium bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] hover:bg-[var(--color-button-hover-day)] dark:bg-[var(--color-primary-night)] dark:text-[var(--color-secondary-night)] dark:hover:bg-[var(--color-button-hover-night)] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'تحميل....' : 'دخول'}
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
