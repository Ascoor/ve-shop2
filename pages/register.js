import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  registerUser,
  selectUser,
  selectStatus,
  selectError,
} from '../store/slices/authSlice';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const initialValues = {
    email: '',
    password: '',
    name: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('البريد الإلكتروني غير صالح').required('مطلوب'),
    password: Yup.string()
      .required('كلمة المرور مطلوبة')
      .min(6, 'يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل'),
    name: Yup.string().required('مطلوب إدخال الإسم'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    const { email, password, name } = values;
    try {
      const result = await dispatch(registerUser({ email, password, name }));
      if (result.payload) {
        router.push('/');
      }
    } catch (error) {
      console.error('فشل في التسجيل', error);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-background-day)] text-[var(--color-text-day)] dark:bg-[var(--color-background-night)] dark:text-[var(--color-text-night)]">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src="/assets/logo.png"
            alt="background"
            className="mx-auto h-36 w-auto rounded-full"
            width={600}
            height={600}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)]">
            إنشاء حساب
          </h2>
          <div className="mt-2 text-center text-sm text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
            أو{' '}
            <Link
              href="/login"
              className="font-medium text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)] hover:text-[var(--color-button-hover-day)] dark:hover:text-[var(--color-button-hover-night)]"
            >
              تسجيل الدخول إلى حسابك
            </Link>
          </div>
        </div>
        <Formik
          className="mt-8 space-y-6"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--color-primary-day)] dark:focus:border-[var(--color-primary-night)] mb-3 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
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
                  type="text"
                  id="name"
                  name="name"
                  placeholder="إدخل إسم المستخدم"
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--color-primary-day)] dark:focus:border-[var(--color-primary-night)] mb-3 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="إدخل كلمة السر"
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[var(--color-primary-day)] dark:focus:border-[var(--color-primary-night)] mb-3 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-red-500">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] py-2 px-4 text-sm font-medium mt-4 text-white hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-day)] dark:focus:ring-[var(--color-primary-night)] focus:ring-offset-2"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'تحميل...' : 'إشتراك'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
