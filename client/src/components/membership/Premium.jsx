import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Unlimited job postings",
    icons: Check,
  },
  {
    name: "Access to all resumes",
    icons: Check,
  },
  {
    name: "Featured company",
    icons: Check,
  },
  {
    name: "Priority support",
    icons: Check,
  },
];

export default function Premium() {
  return (
    <div className="mx-10 my-28 bg-gray-50 w-full p-5 flex flex-col items-center">
      <div className="text-xl font-semibold mb-2">Premium Membership</div>
      <div className="border-2 border-slate-200 w-2/4 p-2 rounded-lg">
        <div className="bg-slate-200 text-primary rounded-lg flex flex-col items-center w-3/3 m-auto p-2">
          <div className="text-lg">Premium</div>
          <div className="font-semibold text-2xl">Rs.3000/mo </div>
        </div>
        <div className="mt-5">
          {navLinks.map((items, index) => (
            <div
              key={index}
              className="flex space-x-3 cursor-pointer rounded p-2"
            >
              <items.icons size={20} />
              <span>{items.name}</span>
            </div>
          ))}
        </div>
        <NavLink to="/employer/payment" className="mt-5">
          <button className="bg-primary w-full text-white rounded-lg px-4 py-2">
            Buy packages
          </button>
        </NavLink>
      </div>
    </div>
  );
}
