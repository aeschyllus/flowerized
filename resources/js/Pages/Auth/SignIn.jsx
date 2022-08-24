import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { IoFlowerOutline } from "react-icons/io5";

export default function SigIn() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
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
    post(route("login"));
  };

  return (
    <section className="bg-neutral-200 h-screen grid place-items-center p-3">
      <div className="bg-white p-11 shadow-lg">
        <div className="text-4xl flex items-center justify-center text-yellow-600 space-x-2 mb-7">
          <IoFlowerOutline />
          <h1>Flowerized</h1>
        </div>

        <form onSubmit={submit}>
          <div>
            <InputLabel forInput="email" value="Email" />
            <Input
              type="text"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
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
              Sign In
            </button>

            <p className="text-sm mt-2 text-neutral-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500 hover:underline">
                Sign up.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

SigIn.layout = null;
