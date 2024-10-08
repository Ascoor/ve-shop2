import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  registerUser,
  selectUser,
  selectStatus,
  selectError,
} from "../store/slices/authSlice";
import { toastr } from "react-redux-toastr";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    name: Yup.string().required("Name is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    const { email, password, name } = values;
    try {
      const result = await dispatch(registerUser({ email, password, name }));
      if (result.payload) {
        router.push("/"); // توجيه المستخدم للصفحة الرئيسية بعد نجاح التسجيل
        toastr.success("Success", "User registered successfully");
      }
    } catch (error) {
      toastr.error("Error", error.message || "Registration failed");
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
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            إنشاء حساب
          </h2>
          <div className='mt-2 text-center text-sm text-gray-600'>
            Or{" "}
            <Link
              href='/login'
              className='font-medium text-[#E43038] hover:text-[#d49ea1]'
            >
          تسجيل الدخول إلى حسابك
            </Link>
          </div>
        </div>
        <Formik
          className='mt-8 space-y-6'
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email' className='sr-only'>
      البريد الالكتروني
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E43038] mb-3 '
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-xs text-red-500'>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor='name' className='sr-only'>
            إسم المستخدم
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='إدخل إسم المستخدم'
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E43038] mb-3 '
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='text-xs text-red-500'>
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  كلمة السر
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='إدخل كلمة السر'
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2  focus:outline-none focus:border-[#E43038] mb-3 '
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='text-xs text-red-500'>
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-[#E43038] py-2 px-4 text-sm font-medium mt-4 text-white hover:bg-[#dd9194] focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2'
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? "تحميل..." : "إشتراك"}
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
