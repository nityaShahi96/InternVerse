import { TextInput } from "../formComponent/index";

export default function Filter() {
  const locations = [
    "Pokhara",
    "Kathmandu",
    "Biratnagar",
    "Lalitpur",
    "Bhaktapur",
    "Butwal",
    "Dharan",
    "Birgunj",
    "Hetauda",
    "Nepalgunj",
    "Itahari",
    "Dhangadi",
    "Janakpur",
    "Mahendranagar",
    "Bharatpur",
    "Dhulikhel",
    "Damak",
    "Tulsipur",
  ];
  return (
    <div className="flex flex-col rounded-lg bg-primary bg-opacity-5 p-5 sticky top-10">
      <div className="text-xl font-semibold text-center border-b">Filter</div>
      <div className="flex flex-col gap-4 mt-3">
        <div>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            className="w-full py-2 outline-none"
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <TextInput
          label="Duration"
          placeholder="Duration"
          name="duration"
          className="w-full"
        />
        <TextInput
          label="Categories"
          placeholder="Software, IT, etc"
          name="categories"
          className="w-full"
        />

        <div>
          <button className="bg-primary text-white rounded-lg p-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
