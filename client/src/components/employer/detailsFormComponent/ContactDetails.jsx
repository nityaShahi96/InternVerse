import { TextInput } from "../../formComponent/index";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Contact Details</h1>
        <p className="text-[#777]">Please fill your contact details.</p>
      </div>

      <TextInput
        label="Phone Number"
        placeholder="9841234567"
        name="phoneNumber"
      />
    </div>
  );
}
