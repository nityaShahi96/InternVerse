import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function AddressDetails({
  addressDetails,
  handleAddressDetailsChange,
}) {
  const details = addressDetails || {};

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Address</h1>
        <p className="text-[#777]">Please fill your address form.</p>
      </div>

      <div className="formCol">
        <TextInput
          label="Province"
          placeholder="Province 3"
          name="province"
          value={details.province}
          onChange={handleAddressDetailsChange}
        />

        <TextInput
          label="City"
          placeholder="Kathmandu"
          name="city"
          value={details.city}
          onChange={handleAddressDetailsChange}
        />
      </div>

      <TextInput
        label="Zip Code"
        placeholder="44600"
        name="zipCode"
        value={details.zipCode}
        onChange={handleAddressDetailsChange}
      />
      <TextInput
        label="Permanent Address"
        placeholder="Pokhara"
        name="permanentAddress"
        value={details.permanentAddress}
        onChange={handleAddressDetailsChange}
      />
    </div>
  );
}
