import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, name }) {
  return (
    <li>
      <Link href={href} className={active ? "text-yellow-600" : ""}>
        {name}
      </Link>
    </li>
  );
}
