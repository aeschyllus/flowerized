import { Link } from "@inertiajs/inertia-react";

export default function NavLinkMobile({ href, active, name }) {
  return (
    <li>
      <Link href={href}>
        {active && (
          <span className="absolute mt-2 left-3 bg-red-500 w-2 h-2 rounded-full"></span>
        )}
        {name}
      </Link>
    </li>
  );
}
