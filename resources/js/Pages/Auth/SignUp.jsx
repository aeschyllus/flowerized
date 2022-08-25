import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { IoFlowerOutline } from "react-icons/io5";

export default function SigUp() {
  const { data, setData, post, processing, errors, reset } = useForm({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
      reset("confirmPassword");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };

  return (
    <section className="bg-neutral-200 h-screen grid place-items-center p-3">
      <div className="bg-white p-11 shadow-lg">
        <Link
          href="/"
          className="text-4xl flex items-center justify-center text-yellow-600 space-x-2 mb-7"
        >
          <IoFlowerOutline />
          <h1>Flowerized</h1>
        </Link>

        <form onSubmit={submit}>
          <div>
            <InputLabel forInput="firstName" value="First Name" />
            <Input
              type="text"
              name="firstName"
              value={data.firstName}
              className="mt-1 block w-full"
              isFocused={true}
              handleChange={onHandleChange}
            />
            <InputError message={errors.firstName} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="lastName" value="Last Name" />
            <Input
              type="text"
              name="lastName"
              value={data.lastName}
              className="mt-1 block w-full"
              handleChange={onHandleChange}
            />
            <InputError message={errors.lastName} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="email" value="Email" />
            <Input
              type="text"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              handleChange={onHandleChange}
            />
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="password" value="Password" />
            <Input
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-7 lg:flex lg:space-x-3">
            <button
              type="submit"
              className={`${
                processing
                  ? "bg-neutral-500"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } w-full lg:w-auto text-white uppercase text-sm px-3 py-2 tracking-widest`}
              disabled={processing}
            >
              Sign Up
            </button>

            <p className="text-sm mt-2 text-neutral-500">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Sign in.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

SigUp.layout = null;
